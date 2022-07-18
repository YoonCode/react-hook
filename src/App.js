import React, { useState } from 'react'
import './App.css'
import Page from './components/Page'
import { ThemeContext } from './context/ThemeContext'
import { UserContext } from './context/UserContext'

const App = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    // ThemeContext.Provider 가 감싸는 모든 하위 component 는 value 에 접근 가능함.
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default App
