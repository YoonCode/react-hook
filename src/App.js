import React, { useState } from 'react'
import Timer from './component/Timer'

const App = () => {
  const [showTimer, setShowTimer] = useState(false)
  return (
    <>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer)
        }}
      >
        Toggle Timer
      </button>
    </>
  )
}

export default App
