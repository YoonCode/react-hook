import { useState } from 'react'

function App() {
  const [names, setNames] = useState(['홍길동'])
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleUpload = () => {
    setNames((prevState) => {
      return [input, ...prevState]
    })
    setInput('')
  }

  return (
    <>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
    </>
  )
}

export default App
