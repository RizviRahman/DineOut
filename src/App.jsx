import './assets/App.css'
import Features from './assets/Components/Features'
import NavBar from './assets/Components/NavBar'
import Login from './assets/Components/Login'
import { useState } from 'react'
import AdminDashboard from './assets/Components/Admin-Dashboard/AdminDashboard'

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
      {user ? ((user.role==="admin")?<AdminDashboard/>:(
        // Dashboard area: reuse Features which contains CreateOrder and Orders
        <div className="px-6">
          <Features />
        </div>
      )) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  )
}

export default App
