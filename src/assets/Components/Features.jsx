import CreateOrder from "./feature-components/CreateOrder";
import Orders from "./feature-components/Orders";
import { items, orders_data } from "./data";
import { useState } from "react";

export default function Features() {
    // const [item_list, setItemList] = useState(items);
    const [orders_list, setOrdersList] = useState(orders_data);

    function addOrder(newOrder) {
        orders_list.sort((a, b) => b.id - a.id);
        newOrder.id = orders_list[0].id + 1;
        setOrdersList([newOrder, ...orders_list]);
    }

    function updateOrderStatus(OrderId) {
        const newOrder = orders_list.filter(order => order.id !== OrderId);
        const toUpdateOrder = orders_list.find(order => order.id === OrderId);
        toUpdateOrder.status="DELIVERED"
        newOrder.push(toUpdateOrder);
        newOrder.sort((a, b) => b.id - a.id);
        setOrdersList([...newOrder]);
    }

    function deleteOrder(OrderId) {
        const orders_after_delete = orders_list.filter(order => order.id !== OrderId);
        setOrdersList([...orders_after_delete]);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
            {/* Create Order Section */}
            <CreateOrder items={items} addOrder={addOrder}/>

            {/* Order Summary and Reports Section */}
            <Orders orders_data={orders_list} updateOrderStatus={updateOrderStatus} deleteOrder={deleteOrder}/>
        </div>
    )
}