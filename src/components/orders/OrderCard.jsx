import { memo } from 'react';
import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/orderUtils';

const OrderCard = memo(({ order, onUpdateStatus, onDelete }) => {
  const isPending = order.status === 'PENDING';

  return (
    <div className="bg-cardbg rounded-lg p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold">Table {order.tableNumber}</h3>
          <p className="text-sm text-gray-400">{order.customerName}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm ${
          isPending 
            ? 'bg-yellow-800 bg-opacity-50 text-yellow-200' 
            : 'bg-green-800 bg-opacity-50 text-green-200'
        }`}>
          {order.status}
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span>{item.name} × {item.quantity}</span>
            <span>{formatCurrency(item.price * item.quantity)}</span>
          </div>
        ))}
        <div className="border-t border-gray-700 pt-2 flex justify-between font-bold">
          <span>Total</span>
          <span>{formatCurrency(order.total)}</span>
        </div>
      </div>

      <div className="flex gap-2">
        {isPending && (
          <button
            onClick={() => onUpdateStatus(order.id)}
            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-2 rounded hover:opacity-90"
          >
            Mark Delivered
          </button>
        )}
        <button
          onClick={() => onDelete(order.id)}
          className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded hover:opacity-90"
        >
          Delete
        </button>
      </div>
    </div>
  );
});

OrderCard.displayName = 'OrderCard';

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
    status: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    tableNumber: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default OrderCard;