export default function ModeratorForm({ modForm, setModForm, onSubmit, mods, onEdit, onRemove }) {
  return (
    <div className="glass-card p-4">
      <h3 className="font-semibold mb-2">{modForm.id ? 'Edit Moderator' : 'Add Moderator'}</h3>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <input className="input" placeholder="Username" value={modForm.username} onChange={e => setModForm({ ...modForm, username: e.target.value })} />
        <input className="input" placeholder="Password" type="password" value={modForm.password} onChange={e => setModForm({ ...modForm, password: e.target.value })} />
        <select className="w-full bg-zinc-900 p-2 rounded mb-4" value={modForm.role} onChange={e => setModForm({ ...modForm, role: e.target.value })}>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>
        <div className="flex gap-2 mt-2">
            <button 
                className="text-white bg-gradient-to-br from-cyan-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded text-sm px-5 py-1 text-center me-3 mb-2"
                type="submit"
            >   Save
            </button>
            <button 
                type="button" 
                className="text-white bg-gradient-to-br from-red-400 via-red-600 to-red-800 hover:bg-gradient-to-bl font-medium rounded text-sm px-5 py-1 text-center me-3 mb-2"
                onClick={() => setModForm({ id: null, username: '', role: 'moderator', password: '' })}
            >   Clear
            </button>
        </div>
      </form>
      <div className="moderator-list-form mt-3 space-y-2">
        {mods.map(m => (
          <div key={m.id} className="flex items-center justify-between bg-white/2 px-2 py-1 rounded">
            <div>{m.username} <span className="text-xs text-zinc-400">{m.role}</span></div>
            <div className="flex gap-2">
              <button onClick={() => onEdit(m)} className="text-sm text-sky-400">Edit</button>
              <button onClick={() => onRemove(m.id)} className="text-sm text-red-400">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}