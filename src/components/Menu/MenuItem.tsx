import React, {useContext} from 'react'
import classNames from 'classnames'
import { MenuContext } from "./Menu";

export interface MenuItemProps {
  index: number;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const {className, disabled, index, style, children} = props
  const cxt = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disable':disabled,
    'is-active': cxt.index === index
  })
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(cxt.onSelect && !disabled) {
      cxt.onSelect(index)
    }
  }
  return(
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}


export default MenuItem