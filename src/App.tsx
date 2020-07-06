import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


import Ontext, {ButtonSize} from './components/Button/Button'
function App() {
  let [show, ss] = useState(true)
  return (
    <div className="App">
      <Ontext disabled={show} onClick={ e => {e.stopPropagation()}}>ssss</Ontext>
      <Ontext size={ButtonSize.Large} autoFocus btnType="primary">ssss</Ontext>
      <Ontext size={ButtonSize.Small} href="baidu.com">ssss</Ontext>
      <Ontext size={ButtonSize.Small} btnType="danger">ssss</Ontext>
      <Ontext size={ButtonSize.Small} btnType="link" target="_blank" href="baidu.com">ssss</Ontext>
      <header className="App-header">
        <button onClick={()=>{ss(!show)}}>show {show}          
        </button>
      </header>
    </div>
  );
}

export default App;
