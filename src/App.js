import React, { useState } from 'react'
import './App.css';
import Keypad from './components/Keypad';

function App() {
  const [input, setInput] = useState('')
  const handleClick = (value) => {
    setInput(input + value)
  }
  const handleEqual = () => {
    setInput(eval(input).toString())
  }
  const handleClear = () => {
    setInput("")
  }
  return (
    <div className="App">
        <h2>Calculator App</h2>
      <div className="calculator">
        <input className="display" type="text" value={input} readOnly/>
        <Keypad
        handleClear={handleClear} 
        handleClick={handleClick} 
        handleEqual={handleEqual} 
        />
      </div>
    </div>
  )
}

export default App;
