import React, { useState } from 'react'
import './App.css';
import { evaluate } from 'mathjs'
import Keypad from './components/Keypad';

function App() {
  const [input, setInput] = useState('')
  const handleClick = (value) => {
    setInput(input + value)
  }
  const handleEqual = () => {
    setInput(evaluate(input).toString())
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
