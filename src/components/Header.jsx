import React from 'react'

const Header = ({ isDark }) => {
  return (
    <div
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </div>
  )
}

export default Header
