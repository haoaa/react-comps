import React, { FC, useRef, ChangeEvent, useState } from 'react'
import axios from 'axios'
import UploadList from './uploadList'
import Dragger from './dragger'

import Button from '../Button/Button'
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  action: string;
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) => void;
  headers?: { [key: string]: any };
  name?: string;
  data?: { [key: string]: any };
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
}

export const Upload: FC<UploadProps> = props => {
  const { action, defaultFileList, beforeUpload, onProgress, onError,
    onSuccess, onChange, onRemove, name, headers, data, withCredentials,
    accept, multiple, children, drag, ...rest } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState(defaultFileList || []);

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    } else {
      uploadFiles(files)
      if (fileInput.current) {
        fileInput.current.value = ''
      }
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList(prev => {
      return prev.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const ret = beforeUpload(file)
        if (ret && ret instanceof Promise) {
          ret.then(processedFile => {
            post(processedFile)
          })
        } else if (ret !== false) {
          post(file)
        }
      }
    })
  }

  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }

    setFileList(prev => {
      return [_file, ...prev]
    })
    const formData = new FormData();
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100) {
          updateFileList(_file, { percent: percentage, status: 'uploading' })
          if (onProgress) {
            onProgress(percentage, file)
          }
        }
      }
    }).then(resp => {
      updateFileList(_file, { response: resp.data, status: 'success' })
      if (onSuccess) {
        onSuccess(resp.data, file)
      }
      if (onChange) {
        onChange(file)
      }
    }).catch(err => {
      updateFileList(_file, { error: err, status: 'error' })
      if (onError) {
        onError(err, file)
      }
      if (onChange) {
        onChange(file)
      }
    })

  }

  return <div className='upload-component'>
    <div className="upload-input" style={{ display: 'inline-block' }}
      onClick={handleClick}
    >
      {
        drag ?
          <Dragger onFile={files => { uploadFiles(files) }}
          >{children}</Dragger> :
          children
      }
      <input type="file"
        className='file-input'
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        ref={fileInput}
      />
    </div>
    <UploadList fileList={fileList} onRemove={handleRemove} />
  </div>
};

Upload.defaultProps = {
  name: 'file'
};