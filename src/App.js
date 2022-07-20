import React, { useState, useEffect, useCallback } from 'react'

const App = () => {
  const [number, setNumber] = useState(0)
  const [toggle, setToggle] = useState(true)

  // someFunction에 할당된 함수(객체)의 주소는 리렌더링될 때마다 바뀜.(재사용 안됨.)
  // const someFunction = () => {
  //   console.log(`someFunc: number: ${number}`)
  //   return
  // }

  // 이제 someFunction에는 memoization된 함수의 주소가 들어감.(재사용 가능.)
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`)
    return
  }, [number])

  useEffect(() => {
    console.log('someFunction이 변경되었습니다.')
  }, [someFunction])

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  )
}

export default App
