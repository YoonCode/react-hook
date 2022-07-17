import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Touch</button>
    </>
  )
}

export default App
