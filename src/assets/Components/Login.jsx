import { useState } from 'react'
import { items } from './data'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('moderator')

  function handleSubmit(e) {
    e.preventDefault()
    if (!username.trim()) return alert('Please enter a username')
    onLogin({ username: username.trim(), role })
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
              <p className="text-sm text-gray-400 mb-4">Sign in as moderator or admin to access the dashboard.</p>
              <form onSubmit={handleSubmit}>
                <label className="block text-sm font-medium mb-2">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-zinc-900 p-2 rounded mb-4" />

                <label className="block text-sm font-medium mb-2">Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full bg-zinc-900 p-2 rounded mb-4">
                  <option value="moderator">Moderator</option>
                  <option value="admin">Admin</option>
                </select>

                <button type="submit" className="w-full bg-primary text-white py-2 rounded">Sign in</button>
              </form>
            </div>
        </div>
        
      </div>
    </div>
  )
}
