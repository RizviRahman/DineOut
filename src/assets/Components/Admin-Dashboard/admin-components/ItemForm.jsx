export default function ItemForm({ itemForm, setItemForm, onSubmit, items, onEdit, onRemove }) {
  return (
    <div className="glass-card p-4">
      <h3 className="font-semibold mb-2">{itemForm.id ? 'Edit Item' : 'Add Item'}</h3>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <input
          className="input"
          placeholder="Name"
          value={itemForm.name}
          onChange={e => setItemForm({ ...itemForm, name: e.target.value })}
        />
        <input
          className="input"
          placeholder="Price"
          type="number"
          value={itemForm.price}
          onChange={e => setItemForm({ ...itemForm, price: e.target.value })}
        />

        {/* Image URL input */}
        <label className="text-sm text-zinc-300">Item image URL</label>
        <input
          className="input"
          placeholder="Image URL"
          value={itemForm.image || ''}
          onChange={e => setItemForm({ ...itemForm, image: e.target.value })}
        />

        {/* Preview */}
        {itemForm.image ? (
          <div className="mt-2">
            <img src={itemForm.image} alt="preview" className="w-20 h-16 object-cover rounded" />
          </div>
        ) : null}

        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-purple-600 to-orange-400 hover:bg-gradient-to-bl font-medium rounded text-sm px-5 py-1 text-center me-3 mb-2"
          >
            Save
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-red-400 via-red-600 to-red-800 hover:bg-gradient-to-bl font-medium rounded text-sm px-5 py-1 text-center me-3 mb-2"
            onClick={() => setItemForm({ id: null, name: '', price: '', image: '' })}
          >
            Clear
          </button>
        </div>
      </form>
      <div className="item-list-form mt-3 space-y-2">
        {items.map(it => (
          <div key={it.id} className="flex items-center justify-between bg-white/2 px-2 rounded">
            <div>{it.name} <span className="text-xs text-zinc-400">{it.price} ৳</span></div>
            <div className="flex gap-1">
              <button onClick={() => onEdit(it)} className="text-sm text-sky-400">Edit</button>
              <button onClick={() => onRemove(it.id)} className="text-sm text-red-400">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
    </div>
  );
}
