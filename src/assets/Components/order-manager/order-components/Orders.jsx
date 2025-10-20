import Reports from "./order-components/Reports";
import Summary from "./order-components/Summary";

// Orders component: displays order summary and reports for all orders
export default function Orders({orders_data, updateOrderStatus, deleteOrder}) { 
    // Calculate summary stats
    const ord_sum = {
        totalOrders: orders_data.length,
        deliveredOrders: orders_data.filter(order => order.status === "DELIVERED").length,
        pendingOrders: orders_data.filter(order => order.status === "PENDING").length
    };

    return (
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            {/* Order Summary section */}
            <Summary ord_sum={ord_sum}/>

            {/* Order Reports section */}
            <Reports data={orders_data} updateOrderStatus={updateOrderStatus} deleteOrder={deleteOrder}/>
        </div>
    )
}