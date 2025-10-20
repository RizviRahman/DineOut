import Reports from "./order-components/Reports";
import Summary from "./order-components/Summamy";

// const orders_data = [
//         {id:1, name:"Sumit Saha", items:3, amount:900, status:"PENDING"},
//         {id:2, name:"Akash Ahmed", items:5, amount:1200, status:"DELIVERED"},
//         {id:3, name:"Saad Hasan", items:2, amount:500, status:"PENDING"},
//         {id:4, name:"MD Salahuddin", items:2, amount:200, status:"PENDING"},
//         {id:5, name:"Ferdous", items:6, amount:1700, status:"PENDING"},
//         {id:6, name:"Rafe", items:4, amount:1200, status:"DELIVERED"},
//         {id:7, name:"Sarwar", items:1, amount:100, status:"PENDING"},
//         {id:8, name:"Obaidul", items:1, amount:300, status:"PENDING"},
//     ]


export default function Orders({orders_data, updateOrderStatus, deleteOrder}) { 

    const ord_sum={}
    ord_sum.totalOrders = orders_data.length;
    ord_sum.deliveredOrders = orders_data.filter(order => order.status === "DELIVERED").length;
    ord_sum.pendingOrders = orders_data.filter(order => order.status === "PENDING").length;

    return (
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            {/* Order Summary */}
            <Summary ord_sum={ord_sum}/>

            {/* Order Reports */}
            <Reports data={orders_data} updateOrderStatus={updateOrderStatus} deleteOrder={deleteOrder}/>
        </div>
    )
 }