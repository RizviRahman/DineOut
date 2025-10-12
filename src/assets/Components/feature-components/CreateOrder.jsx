import Item from "./create-order/Item";

const items = [
        { id: 1, name: "Hamburger", price: 100, image: "./assets/hamburger.svg" },
        { id: 2, name: "Pizza", price: 200, image: "./assets/pizza.svg" },
        { id: 3, name: "Chicken Nuggets", price: 300, image: "./assets/chicken.svg" },
        { id: 4, name: "Submarine Sandwich", price: 300, image: "./assets/submarine.svg" },
    ];

export default function CreateOrder() {
    return (
        <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
            <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
            <p className="text-gray-400 text-sm mb-4">Accurately fulfill customer orders based on a precise
                    understanding of their requirements.</p>

            {/* Customer Name Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Customer Name</label>
                <input type="text"
                    className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300" />
            </div>

            {/* Choose Items */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Choose Items</label>
                <div className="items-container">
                    {items.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </div>

            {/* Place Order Button */}
            <button
                className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                Place Order (BDT 100)
            </button>
        </div>
    )
}