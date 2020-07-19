import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './Menu'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

export const defaultMenu = () => (
  <Menu defaultIndex='0' mode='horizontal' onSelect={(index) => console.log(`clicked ${index} item`)} >
    <MenuItem>active</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>xyz</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>drop1</MenuItem>
    </SubMenu>
    <SubMenu title="opened">
      <MenuItem>opened1</MenuItem>
      <MenuItem>opened1</MenuItem>
    </SubMenu>
  </Menu>
)

storiesOf('Menu Component', module)
  .add('Menu', defaultMenu)