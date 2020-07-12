import React, {useState} from 'react'
import classNames from 'classnames'
import { MenuItemProps } from "./MenuItem";
type MenuMode = 'horizontal' | 'vertical';

type SelectCallback = (selectIndex:string) => void;
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
}

interface IMenuContex {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = React.createContext<IMenuContex>({index: '0'})
const Menu: React.FC<MenuProps> = props => {
  const {className, defaultIndex, mode, style, children, onSelect, defaultOpenSubMenus} = props
  const [curIndex, setIndex] = useState(defaultIndex)
  const classes = classNames('menu', className, {
    'menu-vertical':mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  const handleClick = (index: string) => {
    setIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext : IMenuContex = {
    index: curIndex? curIndex : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }
  const renderChildren = () =>{
    return React.Children.map(children, (child, index)=> {
      const ch = child  as React.FunctionComponentElement<MenuItemProps>;
      if (ch.type.displayName === 'MenuItem' || ch.type.displayName === 'SubMenu') {
        return React.cloneElement(ch, {index: index.toString()}) 
      } else {
        console.error('wrong child')
      }
    })
  }
  return(
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
}

export default Menu