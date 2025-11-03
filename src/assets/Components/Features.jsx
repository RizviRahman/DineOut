import AdminDashboard from './admin-dashboard/AdminDashboard'
import OrderManager from './order-manager/OrderManager'
import { items, orders_data, monthlyData } from './data'
import { useState, useEffect } from 'react'
import { API_ROUTES } from '../../api/routs'
import { apiClient } from '../../api/client'

export default function Features({ user }) {
    const [items_db, setItems_db] = useState(null);
    useEffect(() => {
      // Fetch items from the backend via API client
      const fetchItems = async () => {
        try {
          const data = await apiClient(API_ROUTES.ITEMS.GET_ALL, { method: 'GET' })
          console.log('Fetched items:', data)
          setItems_db(data)
        } catch (error) {
          console.error('Error fetching items:', error)
        }
      }

  //   // Fetch orders from server
  //     const fetchOrders = async () => {
  //       try { 
  //         const response = await fetch('/api/orders'); // ✅ must start with "/"
  //         if (!response.ok) {
  //           console.error('Server error:', response.status, response.statusText);
  //           return;
  //         }   
  //         const data = await response.json();
  //         console.log('Fetched orders:', data);
  //         const orders_db = data; // Update global orders_data
  //       } catch (error) {   
  //         console.error('Error fetching orders:', error); 
  //       } 
  //     };


  // fetchOrders();
  fetchItems();
}, []);





    // console.log("Items in Features:", items);
    const effectiveItems = items_db && items_db.length ? items_db : items

    return (
      user.role === 'admin' ? (
        <AdminDashboard db_items={effectiveItems} initialItems={effectiveItems} monthlyData={monthlyData} />
      ) : (
        <OrderManager items={effectiveItems} orders_data={orders_data} />
      )
    )
}