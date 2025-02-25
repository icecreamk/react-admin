import { useState } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavLink to='/test'>to test</NavLink>
      </div>
    </>
  )
}

export default App

