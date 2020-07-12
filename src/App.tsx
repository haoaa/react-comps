import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


import Ontext from './components/Button/Button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
function App() {
  let [show, ss] = useState(true)
  return (
    <div className="App">
      <Ontext disabled={show} onClick={ e => {e.stopPropagation()}}>ssss</Ontext>
      <Ontext size='lg' autoFocus btnType="primary">ssss</Ontext>
      <Ontext size='sm' href="baidu.com">ssss</Ontext>
      <Ontext size='sm' btnType="danger">ssss</Ontext>
      <Ontext size='sm' btnType="link" target="_blank" href="baidu.com">ssss</Ontext>
      <button onClick={()=>{ss(!show)}}>show {show}          
      </button>
      <Menu defaultIndex='0' mode='vertical' onSelect={(index) => console.log(`clicked ${index} item`)} >
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem disabled index={1}>
          disabled
        </MenuItem> 
        <MenuItem index={2}>
          cool link 2
        </MenuItem> 
      </Menu>
    </div>
  );
}

export default App;
