import React, {useState} from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical';

type SelectCallback = (selectIndex:number) => void;
export interface MenuProps {
  defaultIndex?: number | string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback
}

interface IMenuContex {
  index: number | string;
  onSelect?: SelectCallback
}

export const MenuContext = React.createContext<IMenuContex>({index: 0})
const Menu: React.FC<MenuProps> = props => {
  const {className, defaultIndex, mode, style, children, onSelect} = props
  const [curIndex, setIndex] = useState(defaultIndex)
  const classes = classNames('menu', className, {
    'menu-vertical':mode === 'vertical'
  })

  const handleClick = (index: number) => {
    setIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext : IMenuContex = {
    index: curIndex? curIndex : 0,
    onSelect: handleClick
  }
  return(
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu