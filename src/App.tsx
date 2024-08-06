import React, { useState } from "react"
import "./App.css"


const App : React.FC = () => {

  const [count,setCount] = useState(0)

  const inc_count = () => {
    setCount(count + 1)
  }

  const dec_count = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <>
    <h1> {count} </h1>
    <button onClick={inc_count}>Increment</button>
    <button onClick={dec_count}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
