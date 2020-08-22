import React, { useState } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import './App.css';

import Ontext from './components/Button/Button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'
import Icon from "./components/Icon/icon";
import Transition from "./components/Transition/transition";
library.add(fas);
function App() {
  let [show, ss] = useState(true)
  return (
    <div className="App">
      <Icon icon='arrow-down' theme='success' size="sm"></Icon>
      <Ontext disabled={show} onClick={ e => {e.stopPropagation()}}>ssss</Ontext>
      <Ontext size='lg' autoFocus btnType="primary">ssss</Ontext>
      <Ontext size='sm' href="baidu.com">ssss</Ontext>
      <Ontext size='sm' btnType="danger">ssss</Ontext>
      <Ontext size='sm' btnType="link" target="_blank" href="baidu.com">ssss</Ontext>
      <button onClick={()=>{ss(!show)}}>show {show}          
      </button>
      <Transition in={show} timeout={300} animation='zoom-in-left'>
        <section>
          
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
        <Ontext size='sm' btnType="danger">ssss</Ontext>
        </section>
      </Transition>
      <Menu defaultIndex='0' mode='horizontal' onSelect={(index) => console.log(`clicked ${index} item`)} >
      
        <MenuItem>
          active
          <Icon icon='arrow-up' theme='danger' size='xs'></Icon>
        </MenuItem>
        <MenuItem disabled>
          disabled
        </MenuItem>
        <MenuItem>
          xyz
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            drop1
          </MenuItem>
        </SubMenu>
        <SubMenu title="opened">
          <MenuItem>
            opened1
          </MenuItem>
          <MenuItem>
            opened1
          </MenuItem>
        </SubMenu>
      </Menu>
      <input type="file" id="input" multiple></input>
    </div>
  );
}

export default App;
