import React, { useState, useRef } from 'react'

const App = () => {
  const [renderer, setRenderer] = useState(0)
  const countRef = useRef(0) // 생애주기 동안 유지
  let countVar = 0 // 렌더링 할 때마다 초기화

  const doRendering = () => {
    setRenderer(renderer + 1)
  }

  const increaseRef = () => {
    countRef.current += 1
    console.log('ref: ', countRef.current)
  }

  const increaseVar = () => {
    countVar += 1
    console.log('var: ', countVar)
  }

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`)
  }

  return (
    <>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </>
  )
}

export default App
