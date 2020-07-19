import React, { useState, FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'antd'
 * ~~~
 */
const Button: FC<ButtonProps> = props => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...rest
  } = props;
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]:btnType,
    [`btn-${size}`]:size,
    'disabled': disabled && (btnType === 'link')
  })
  if (btnType === 'link') {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    )
  } else {
    return (
      <button {...rest} className={classes} disabled={disabled}>
        {children}
      </button>
    )
  }
};

Button.defaultProps ={
  disabled: false,
  btnType: 'default'
}
export default Button;