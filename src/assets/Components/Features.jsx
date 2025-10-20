import AdminDashboard from "./admin-dashboard/AdminDashboard"
import OrderManager from "./order-manager/OrderManager"
import {items, orders_data, monthlyData} from "./data"; 

export default function Features({ user }) {
    return (
        user.role === 'admin' ? 
         <AdminDashboard initialItems={items} monthlyData={monthlyData}/> 
        : 
         <OrderManager items={items} orders_data={orders_data}/>
    );
}