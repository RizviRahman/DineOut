import { useState, useReducer } from 'react';
import './admin-dashboard.css';
import AdminHeader from './admin-components/AdminHeader';
import RevenueChart from './admin-components/RevenueChart';
import ItemFrequencyChart from './admin-components/ItemFrequencyChart';
import ItemForm from './admin-components/ItemForm';
import ModeratorForm from './admin-components/ModeratorForm';
import itemReducer from './admin-components/itemReducer';




const initialMods = [
  { id: 1, username: 'mod1', role: 'moderator' }
];

// Monthly revenue and item frequency data


export default function AdminDashboard({db_items, monthlyData, initialItems}) {
  // State for items using reducer
  const [state, dispatch] = useReducer(itemReducer, {
    items: initialItems,
    itemForm: { id: null, name: '', price: '', image: '' }
  });
  
  // Other state
  const [mods, setMods] = useState(initialMods);
  const [modForm, setModForm] = useState({ id: null, username: '', role: 'moderator', password: '' });
  const [selectedMonth, setSelectedMonth] = useState(null);


  // Current month data for frequency chart
  const currentMonthData = monthlyData[selectedMonth !== null ? selectedMonth : new Date().getMonth()];

  // Summary cards for header
  const totalRevenue = monthlyData.reduce((a, b) => a + b.revenue, 0);
  const summary = [
    { label: 'Monthly Revenue', value: `৳ ${(totalRevenue / monthlyData.length).toLocaleString()}` },
    { label: 'Total Items', value: state.items.length },
    { label: 'Moderators', value: mods.length }
  ];




  // Item form handlers
  function handleItemSubmit(e) {
    e.preventDefault();
    if (!state.itemForm.name.trim() || !state.itemForm.price) return;
    
    if (state.itemForm.id) {
      dispatch({
        type: ACTIONS.UPDATE_ITEM,
        payload: {
          id: state.itemForm.id,
          name: state.itemForm.name,
          price: Number(state.itemForm.price),
          image: state.itemForm.image
        }
      });
    } else {
      const id = Math.max(0, ...state.items.map(i => i.id)) + 1;
      dispatch({
        type: ACTIONS.ADD_ITEM,
        payload: {
          id,
          name: state.itemForm.name,
          price: Number(state.itemForm.price),
          image: state.itemForm.image
        }
      });
    }
  }
  
  function editItem(it) {
    dispatch({
      type: ACTIONS.SET_ITEM_FORM,
      payload: { id: it.id, name: it.name, price: it.price, image: it.image }
    });
  }
  
  function removeItem(id) {
    dispatch({ type: ACTIONS.REMOVE_ITEM, payload: id });
  }

  // Moderator form handlers
  function handleModSubmit(e) {
    e.preventDefault();
    if (!modForm.username.trim() || !modForm.password) return;
    if (modForm.id) {
      setMods(mods.map(m => m.id === modForm.id ? { ...m, username: modForm.username, role: modForm.role } : m));
    } else {
      const id = Math.max(0, ...mods.map(m => m.id)) + 1;
      setMods([...mods, { id, username: modForm.username, role: modForm.role }]);
    }
    setModForm({ id: null, username: '', role: 'moderator', password: '' });
  }
  function editMod(m) { setModForm({ id: m.id, username: m.username, role: m.role, password: '' }); }
  function removeMod(id) { setMods(mods.filter(m => m.id !== id)); }

  return (
    <div className="p-6 space-y-6 admin-dashboard">
      {/* Dashboard header and summary */}
      
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AdminHeader summary={summary} />
          {/* Revenue chart and item frequency chart */}
          <RevenueChart
            data={monthlyData.map(m => m.revenue)}
            months={monthlyData.map(m => m.month)}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
          <ItemFrequencyChart
            items={currentMonthData?.items || []}
            month={currentMonthData?.month}
          />
        </div>
        <aside className="space-y-6">
          {/* Item and moderator forms */}
          <ItemForm
            db_items={db_items}
            itemForm={state.itemForm}
            setItemForm={(form) => dispatch({ type: ACTIONS.SET_ITEM_FORM, payload: form })}
            onSubmit={handleItemSubmit}
            items={state.items}
            onEdit={editItem}
            onRemove={removeItem}
          />
          <ModeratorForm
            modForm={modForm}
            setModForm={setModForm}
            onSubmit={handleModSubmit}
            mods={mods}
            onEdit={editMod}
            onRemove={removeMod}
          />
        </aside>
      </main>
    </div>
  );
}
