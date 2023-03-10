import { useState, useEffect } from 'react'
import AuthPage from "../AuthPage/AuthPage"
import { Routes, Route } from 'react-router-dom'

function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <div className='App'>
      <>
        <AuthPage setUser={setUser}/>
      </>
    </div>
  )
}

export default App
