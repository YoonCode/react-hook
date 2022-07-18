import React, { useEffect, useRef } from 'react'

const App = () => {
  const inputRef = useRef()

  useEffect(() => {
    // console.log(inputRef)
    inputRef.current.focus()
  }, [])

  const login = () => {
    alert(`환영합니다! ${inputRef.current.value}님!`)
  }

  return (
    <>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </>
  )
}

export default App
