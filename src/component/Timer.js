import React, { useEffect } from 'react'

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 작동 중...')
    }, 1000)

    return () => {
      clearInterval(timer)
      console.log('타이머 중지...')
    }
  }, [])

  return (
    <>
      <p>타이머를 시작합니다.</p>
    </>
  )
}

export default Timer
