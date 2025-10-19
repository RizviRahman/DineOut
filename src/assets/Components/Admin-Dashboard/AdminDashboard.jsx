import { useState } from 'react';
import './admin-dashboard.css';
import DashboardHeader from './components/DashboardHeader';
import RevenueChart from './components/RevenueChart';
import ItemFrequencyChart from './components/ItemFrequencyChart';
import ItemForm from './components/ItemForm';
import ModeratorForm from './components/ModeratorForm';

const initialItems = [
  { id: 1, name: 'Hamburger', price: 100 },
  { id: 2, name: 'Pizza', price: 200 },
  { id: 3, name: 'Rice Bowl', price: 150 }
];

const initialMods = [
  { id: 1, username: 'mod1', role: 'moderator' }
];

// Monthly revenue and item frequency data
const monthlyData = [
  { month: 'Jan', revenue: 1200, items: [
    { name: "Pizza", count: 55 },
    { name: "Hamburger", count: 38 },
    { name: "Rice Bowl", count: 22 },
    { name: "Chicken Nuggets", count: 18 },
    { name: "Steak", count: 15 },
    { name: "Sub Sandwich", count: 2 }
  ]},
  { month: 'Feb', revenue: 1500, items: [
    { name: "Pizza", count: 52 },
    { name: "Hamburger", count: 42 },
    { name: "Chicken Nuggets", count: 28 },
    { name: "Rice Bowl", count: 25 },
    { name: "Sub Sandwich", count: 20 },
    { name: "Steak", count: 18 }
  ]},
  { month: 'Mar', revenue: 1750, items: [
    { name: "Pizza", count: 58 },
    { name: "Hamburger", count: 48 },
    { name: "Rice Bowl", count: 30 },
    { name: "Chicken Nuggets", count: 26 },
    { name: "Steak", count: 22 },
    { name: "Sub Sandwich", count: 19 }
  ]},
  { month: 'Apr', revenue: 1620, items: [
    { name: "Pizza", count: 55 },
    { name: "Hamburger", count: 44 },
    { name: "Rice Bowl", count: 28 },
    { name: "Chicken Nuggets", count: 24 },
    { name: "Steak", count: 20 },
    { name: "Sub Sandwich", count: 17 }
  ]},
  { month: 'May', revenue: 1800, items: [
    { name: "Pizza", count: 63 },
    { name: "Hamburger", count: 50 },
    { name: "Rice Bowl", count: 32 },
    { name: "Chicken Nuggets", count: 29 },
    { name: "Steak", count: 23 },
    { name: "Sub Sandwich", count: 21 }
  ]},
  { month: 'Jun', revenue: 1950, items: [
    { name: "Pizza", count: 68 },
    { name: "Hamburger", count: 53 },
    { name: "Rice Bowl", count: 35 },
    { name: "Chicken Nuggets", count: 32 },
    { name: "Steak", count: 26 },
    { name: "Sub Sandwich", count: 24 }
  ]},
  { month: 'Jul', revenue: 2100, items: [
    { name: "Pizza", count: 72 },
    { name: "Hamburger", count: 58 },
    { name: "Rice Bowl", count: 38 },
    { name: "Chicken Nuggets", count: 34 },
    { name: "Steak", count: 29 },
    { name: "Sub Sandwich", count: 26 }
  ]},
  { month: 'Aug', revenue: 2000, items: [
    { name: "Pizza", count: 70 },
    { name: "Hamburger", count: 56 },
    { name: "Rice Bowl", count: 36 },
    { name: "Chicken Nuggets", count: 33 },
    { name: "Steak", count: 27 },
    { name: "Sub Sandwich", count: 25 }
  ]},
  { month: 'Sep', revenue: 1850, items: [
    { name: "Pizza", count: 65 },
    { name: "Hamburger", count: 51 },
    { name: "Rice Bowl", count: 33 },
    { name: "Chicken Nuggets", count: 30 },
    { name: "Steak", count: 25 },
    { name: "Sub Sandwich", count: 22 }
  ]},
  { month: 'Oct', revenue: 2200, items: [
    { name: "Pizza", count: 78 },
    { name: "Hamburger", count: 62 },
    { name: "Rice Bowl", count: 40 },
    { name: "Chicken Nuggets", count: 36 },
    { name: "Steak", count: 31 },
    { name: "Sub Sandwich", count: 1 }
  ]},
  { month: 'Nov', revenue: 2050, items: [
    { name: "Pizza", count: 74 },
    { name: "Hamburger", count: 59 },
    { name: "Rice Bowl", count: 37 },
    { name: "Chicken Nuggets", count: 34 },
    { name: "Steak", count: 28 },
    { name: "Sub Sandwich", count: 26 }
  ]},
  { month: 'Dec', revenue: 2400, items: [
    { name: "Pizza", count: 85 },
    { name: "Hamburger", count: 68 },
    { name: "Rice Bowl", count: 45 },
    { name: "Chicken Nuggets", count: 40 },
    { name: "Steak", count: 34 },
    { name: "Sub Sandwich", count: 3 }
  ]}
];

export default function AdminDashboard() {
  // State for forms and selection
  const [items, setItems] = useState(initialItems);
  const [mods, setMods] = useState(initialMods);
  const [itemForm, setItemForm] = useState({ id: null, name: '', price: '' });
  const [modForm, setModForm] = useState({ id: null, username: '', role: 'moderator', password: '' });
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Current month data for frequency chart
  const currentMonthData = monthlyData[selectedMonth !== null ? selectedMonth : new Date().getMonth()];

  // Summary cards for header
  const totalRevenue = monthlyData.reduce((a, b) => a + b.revenue, 0);
  const summary = [
    { label: 'Monthly Revenue', value: `৳ ${(totalRevenue / monthlyData.length).toLocaleString()}` },
    { label: 'Total Items', value: items.length },
    { label: 'Moderators', value: mods.length }
  ];

  // Item form handlers
  function handleItemSubmit(e) {
    e.preventDefault();
    if (!itemForm.name.trim() || !itemForm.price) return;
    if (itemForm.id) {
      setItems(items.map(it => it.id === itemForm.id ? { ...it, name: itemForm.name, price: Number(itemForm.price) } : it));
    } else {
      const id = Math.max(0, ...items.map(i => i.id)) + 1;
      setItems([...items, { id, name: itemForm.name, price: Number(itemForm.price) }]);
    }
    setItemForm({ id: null, name: '', price: '' });
  }
  function editItem(it) { setItemForm({ id: it.id, name: it.name, price: it.price }); }
  function removeItem(id) { setItems(items.filter(i => i.id !== id)); }

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
    <div className="p-6 space-y-6">
      {/* Dashboard header and summary */}
      
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DashboardHeader summary={summary} />
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
            itemForm={itemForm}
            setItemForm={setItemForm}
            onSubmit={handleItemSubmit}
            items={items}
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
