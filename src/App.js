import React, { useState, useRef, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(1)
  const renderCount = useRef(1)

  useEffect(() => {
    // 랜더링을 발생시키면 안되는 경우에 useRef 가 유용함.
    console.log('랜더링 수: ', renderCount.current)
    renderCount.current += 1
  })

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </>
  )
}

export default App
