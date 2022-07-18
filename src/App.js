import React, { useState, useRef } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  // console.log(countRef) // countRef.current

  console.log('랜더링...')

  const increaseCountState = () => {
    // state 값이 변할 때마다 랜더링이 일어남.
    setCount(count + 1)
  }

  const increaseCountRef = () => {
    // ref 값이 변해도 랜더링이 일어나지 않음. 하지만 전 생애주기 동안 값을 유지함.
    countRef.current += 1
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
