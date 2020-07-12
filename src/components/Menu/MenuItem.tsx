import React, {useContext} from 'react'
import classNames from 'classnames'
import { MenuContext } from "./Menu";

export interface MenuItemProps {
  index?: string;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const {className, disabled, index, style, children} = props
  const cxt = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled':disabled,
    'is-active': cxt.index === index
  })
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(cxt.onSelect && !disabled && index) {
      cxt.onSelect(index)
    }
  }
  return(
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName='MenuItem'
export default MenuItem