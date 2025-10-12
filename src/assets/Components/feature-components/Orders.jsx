import Reports from "./order-components/Reports";
import Summary from "./order-components/Summamy";

const order_data = [
        {id:1, name:"Sumit Saha", items:3, amount:900, status:"PENDING"},
        {id:2, name:"Akash Ahmed", items:5, amount:1200, status:"DELIVERED"},
        {id:3, name:"Saad Hasan", items:2, amount:500, status:"PENDING"},
        {id:4, name:"MD Salahuddin", items:2, amount:200, status:"PENDING"},
        {id:5, name:"Ferdous", items:6, amount:1700, status:"PENDING"},
        {id:6, name:"Rafe", items:4, amount:1200, status:"DELIVERED"},
        {id:7, name:"Sarwar", items:1, amount:100, status:"PENDING"},
        {id:8, name:"Obaidul", items:1, amount:300, status:"PENDING"},
    ]
const ord_sum={}
ord_sum.totalOrders = order_data.length;
ord_sum.deliveredOrders = order_data.filter(order => order.status === "DELIVERED").length;
ord_sum.pendingOrders = order_data.filter(order => order.status === "PENDING").length;

export default function Orders() { 
    return (
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            {/* Order Summary */}
            <Summary ord_sum={ord_sum}/>

            {/* Order Reports */}
            <Reports data={order_data}/>
        </div>
    )
 }