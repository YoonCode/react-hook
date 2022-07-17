import React, { useState, useRef } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  console.log('랜더링...')
  // console.log(countRef) // countRef.current

  const increaseCountState = () => {
    setCount(count + 1)
  }

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1
    console.log('Ref: ', countRef.current)
  }

  return (
    <>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </>
  )
}

export default App
