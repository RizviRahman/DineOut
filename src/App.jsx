import './assets/App.css'
import NavBar from './assets/Components/NavBar'
import Login from './assets/Components/Login'
import { useState } from 'react'
import AdminDashboard from './assets/Components/admin-dashboard/AdminDashboard'
import Features from './assets/Components/Features'

function App() {
  const [user, setUser] = useState(null)

  function handleLogin(userData) {
    // In a real app validate credentials; here we accept any non-empty username
    setUser(userData)
  }

  function handleLogout() {
    setUser(null)
  }

  return (
    <>
      <NavBar user={user} onLogout={handleLogout} />
      {user ?  <Features user={user} />: <Login onLogin={handleLogin} />}
    </>
  )
}

export default App
