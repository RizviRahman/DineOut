import { useState } from 'react';
import PropTypes from 'prop-types';
import { calculateOrderTotal, validateOrder } from '../../utils/orderUtils';

const CreateOrder = ({ items, onSubmit }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [errors, setErrors] = useState({});

  const handleItemSelect = (item) => {
    const existingItem = selectedItems.find(i => i.id === item.id);
    
    if (existingItem) {
      setSelectedItems(selectedItems.map(i => 
        i.id === item.id 
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity < 1) {
      setSelectedItems(selectedItems.filter(i => i.id !== itemId));
      return;
    }

    setSelectedItems(selectedItems.map(i => 
      i.id === itemId ? { ...i, quantity } : i
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const orderData = {
      items: selectedItems,
      customerName,
      tableNumber: Number(tableNumber),
      status: 'PENDING',
      total: calculateOrderTotal(selectedItems),
      timestamp: new Date().toISOString(),
    };

    const { isValid, errors: validationErrors } = validateOrder(orderData);
    
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(orderData);
    
    // Reset form
    setSelectedItems([]);
    setCustomerName('');
    setTableNumber('');
    setErrors({});
  };

  return (
    <div className="bg-cardbg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Create New Order</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Customer Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="input w-full"
            placeholder="Enter customer name"
          />
          {errors.customerName && (
            <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Table Number</label>
          <input
            type="number"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="input w-full"
            placeholder="Enter table number"
          />
          {errors.tableNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.tableNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Items</label>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {items.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemSelect(item)}
                className="p-2 border rounded hover:bg-gray-700 text-left"
              >
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-400">৳{item.price}</div>
              </button>
            ))}
          </div>
          {errors.items && (
            <p className="text-red-500 text-sm mt-1">{errors.items}</p>
          )}
        </div>

        {selectedItems.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium">Selected Items:</h3>
            {selectedItems.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <span>{item.name} (৳{item.price})</span>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-700 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-700 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="font-bold mt-2">
              Total: ৳{calculateOrderTotal(selectedItems)}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-orange-400 text-white py-2 rounded-lg hover:opacity-90"
        >
          Create Order
        </button>
      </form>
    </div>
  );
};

CreateOrder.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  })).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CreateOrder;