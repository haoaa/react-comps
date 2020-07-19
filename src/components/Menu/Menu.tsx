import React, {useState, CSSProperties, FC} from 'react'
import classNames from 'classnames'
import { MenuItemProps } from "./MenuItem";
type MenuMode = 'horizontal' | 'vertical';

type SelectCallback = (selectIndex:string) => void;
export interface MenuProps {
  /**默认 active 的菜单项的索引值 */
  defaultIndex?: string;
  className?: string;
  /**菜单类型 横向或者纵向 */
  mode?: MenuMode;
  style?: CSSProperties;
  /**点击菜单项触发的回掉函数 */
  onSelect?: (selectedIndex: string) => void;
  /**设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[];

}

interface IMenuContex {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = React.createContext<IMenuContex>({index: '0'})
/**
 * 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * ~~~js
 * import { Menu } from 'antd'
 * ~~~
 */
const Menu: FC<MenuProps> = props => {
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

export default Menu;