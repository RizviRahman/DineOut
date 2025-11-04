import { useState } from 'react'
import { items } from './data'
import { API_ROUTES } from '../../api/routs'
import { apiClient } from '../../api/client'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { login } = useAuthContext()

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    if (!email.trim() || !password) return setError('Please enter email and password')
    setLoading(true)
    try {
      const res = await apiClient(API_ROUTES.USERS.LOGIN, {
        method: 'POST',
        body: JSON.stringify({ email: email.trim(), password })
      })

      // expecting { user, token }
      if (res && res.token) {
        login(res.user || { email }, res.token)
      } else {
        setError('Invalid login response')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-between px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        {/* Left: overlapping glass tiles (menu showcase) */}
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-2"><span className="text-primary">Dine</span>Out</h1>
          <p className="text-gray-400 mb-4">Explore our favorites — hover the tiles.</p>

          <div className="carousel">
            <div className="ring" style={{'--count': items.length}}>
              {items.map((item, index) => (
                <div key={index} className="panel" style={{'--i': index}} data-text={item.name}>
                  <img src={item.image} alt={item.name} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: login form */}
        <div className='mx-auto'>
            <div className="p-6 bg-cardbg rounded-lg w-90">
              <h2 className="text-2xl font-bold mb-4">Sign in</h2>
              <p className="text-sm text-gray-400 mb-4">Sign in to access the dashboard.</p>
              <form onSubmit={handleSubmit}>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-zinc-900 p-2 rounded mb-4" type="email" />

                <label className="block text-sm font-medium mb-2">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-zinc-900 p-2 rounded mb-4" type="password" />

                {error && <div className="text-red-400 mb-2">{error}</div>}

                <button type="submit" className="w-full bg-primary text-white py-2 rounded" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
              </form>
            </div>
        </div>
        
      </div>
    </div>
  )
}
