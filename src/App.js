import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('')

  const handleCountUpdate = () => {
    setCount(count + 1)
  }

  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  // 마운트 + [ item ] 변경될 때만 실행.
  // useEffect(() => {
  //   console.log('랜더링 🙌🏻')
  // })
  // //
  // useEffect(() => {
  //   console.log('이름변경 🙌🏻')
  // }, [name])
  // useEffect(() => {
  //   console.log('카운트변경 🙌🏻')
  // }, [count])
  useEffect(() => {
    console.log('처음에만 🙌🏻')
  }, [])

  return (
    <>
      <button onClick={handleCountUpdate}>Update</button>
      <p>count: {count}</p>
      <input type="text" value={name} onChange={handleInputChange} />
      <p>name: {name}</p>
    </>
  )
}

export default App
