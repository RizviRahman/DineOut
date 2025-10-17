import Item from "./create-order/Item";
import { useState } from "react";

// const items = [
//         { id: 1, name: "Hamburger", price: 100, image: "./assets/hamburger.svg" },
//         { id: 2, name: "Pizza", price: 200, image: "./assets/pizza.svg" },
//         { id: 3, name: "Chicken Nuggets", price: 300, image: "./assets/chicken.svg" },
//         { id: 4, name: "Submarine Sandwich", price: 300, image: "./assets/submarine.svg" },
//         { id: 5, name: "Steak", price: 800, image: "./assets/steak.svg" },
//     ];


export default function CreateOrder({items, addOrder}) {
    const [priceDetails, setPriceDetails] = useState({price:0, quantity:0});
    const [customerName, setCustomerName] = useState("");
    const [resetToken, setResetToken] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        addOrder({name:customerName.trim(), items:priceDetails.quantity, amount:priceDetails.price, status:"PENDING"})
        alert(`${customerName.trim()}, your order Placed Successfully!\nTotal: BDT ${priceDetails.price}`);
        // reset form and child item components (remount via key)
        setCustomerName("");
        setPriceDetails({ price: 0, quantity: 0 });
        setResetToken((t) => t + 1);
    }

    function calculateTotal({price, quantity}){
        setPriceDetails((prev) => ({
            price: prev.price + price * quantity,
            quantity: prev.quantity + quantity,
        }));
    }

    return (
        <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_145px)]">
            <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
            <p className="text-gray-400 text-sm mb-4">Accurately fulfill customer orders based on a precise
                    understanding of their requirements.</p>

            {/* Customer Name Input */}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Customer Name</label>
                    <input type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter customer name"
                        className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300" />
                </div>

                {/* Choose Items */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Choose Items</label>
                    <div className="items-container">
                        {items.map((item) => (
                            <Item key={`${item.id}-${resetToken}`} item={item} calculateTotal={calculateTotal} />
                        ))}
                    </div>
                </div>

                {/* Place Order Button */}
                <button
                    disabled={priceDetails.price===0 || customerName.trim()===""}
                    type="submit"
                    className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 mt-3">
                    Place Order (BDT {priceDetails.price})
                </button>
            </form>
        </div>
    )
}