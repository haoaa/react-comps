import React, { FC, ReactElement, useRef, KeyboardEvent, ChangeEvent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { InputProps } from "../Input/Input";
import Icon from '../Icon/icon'
import Transition from '../Transition/transition'
import Input from '../Input/Input'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'

export type DataSourceItemType<T = {}> = T & {
  value: string;
};

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  /**过滤方法 */
  fetchSuggestions: (keword: string) => DataSourceItemType[] | Promise<DataSourceItemType[]>;
  /**选项选择后回调 */
  onSelect: (item: DataSourceItemType) => void;
  /**options template */
  renderOption?: (item: DataSourceItemType) => ReactElement;
}



/**
 * AutoComplete 自动补全输入框
 * 
 */
export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<DataSourceItemType[]>([])
  const [loading, setLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(inputValue, 300)
  useClickOutside(componentRef, () => { setSuggestions([])})
  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      setSuggestions([]);
      const results = fetchSuggestions(debouncedValue)
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        if (results.length > 0) {
          setShowDropdown(true)
        }
        setSuggestions(results)
      }
    } else {
      setSuggestions([]);
    }
    setHighlightIndex(-1)
  }, [debouncedValue, fetchSuggestions])
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInputValue(val);
    triggerSearch.current = true
  }
  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }
  const handelKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 38:
        highlight(highlightIndex - 1)
        break
      case 40:
        highlight(highlightIndex + 1)
        break
      case 27:
        setShowDropdown(false)
        break
      default:
        break
    }
  }
  const renderTemplate = (item: DataSourceItemType) => {
    return renderOption ? renderOption(item) : item.value || item
  }
  const cnames = classNames('auto-complete', {
  })
  const handleSelect = (item: DataSourceItemType) => {
    setInputValue(item.value)
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }
  const genDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => { setSuggestions([]) }}
      >
        <ul className='suggestion-list'>
          {loading &&
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin />
            </div>
          }
          {suggestions.map((item, index) => {
            const cnames = classNames('suggestion-item', {
              'is-active': index === highlightIndex
            })
            return <li key={index} className={cnames} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          })}
        </ul>
      </Transition>
    )
  }
  return (
    <div className={cnames} ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handelChange}
        onKeyDown={handelKeydown}
        {...restProps}
      />
      {suggestions.length > 0 && genDropdown()}
    </div>
  )
}

export default AutoComplete;