import React, { useState } from 'react'
import './App.css'
import Page from './components/Page'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    // ThemeContext.Provider 가 감싸는 모든 하위 component 는 value 에 접근 가능함.
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  )
}

export default App
