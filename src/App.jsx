import './assets/App.css'
import NavBar from './assets/Components/NavBar'
import Login from './assets/Components/Login'
import Features from './assets/Components/Features'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user, logout } = useAuthContext()

  return (
    <>
      <NavBar user={user} onLogout={logout} />
      {user ? <Features user={user} /> : <Login />}
    </>
  )
}

export default App
