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
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: overlapping glass tiles (menu showcase) */}
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-2"><span className="text-primary">Dine</span>Out</h1>
          <p className="text-gray-400 mb-4">Explore our favorites — hover the tiles.</p>

          <div className="carousel-container">
            <div className="carousel" aria-hidden>
              <div className="carousel__stage" style={{ ['--spin-duration']: '18s' }}>
                {(() => {
                  const cells = [];
                  const cellCount = items.length;
                  const tileWidth = 180;
                  const theta = 360 / cellCount;
                  // radius positions the tiles around the Y-axis; tweak for desired spacing
                  const radius = Math.round((tileWidth / 2) / Math.tan(Math.PI / cellCount)) + 40;
                  for (let i = 0; i < cellCount; i++) {
                    const it = items[i % items.length];
                    const angle = i * theta;
                    const transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
                    cells.push(
                      <div key={i} className="carousel__cell" style={{ transform }}>
                        <div className="glass glass-card" data-text={it.name}>
                          <div className="flex flex-col items-center">
                            <img src={it.image} alt={it.name} className="landing-card-img mb-2" />
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return cells;
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* Right: login form */}
        <div className="p-6 bg-cardbg rounded-lg">
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
  )
}
