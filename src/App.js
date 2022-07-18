import React, { useState, useRef } from 'react'

const App = () => {
  const [renderer, setRenderer] = useState(0)
  const countRef = useRef(0)
  let countVar = 0

  const doRendering = () => {
    setRenderer(renderer + 1)
  }

  const increaseRef = () => {
    // ref 값은 함수가 재실행되어도 유지됨.
    countRef.current += 1
    console.log('Ref: ', countRef.current)
  }

  const increaseVar = () => {
    // var 값은 함수가 재실행되면 초기화됨.
    countVar += 1
    console.log('Var: ', countVar)
  }

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`)
  }

  return (
    <>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>랜더!!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </>
  )
}

export default App
