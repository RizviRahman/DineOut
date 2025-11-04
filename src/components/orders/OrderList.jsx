import { memo } from 'react';
import PropTypes from 'prop-types';
import OrderCard from './OrderCard';
import OrderSummary from './OrderSummary';
import { selectOrderSummary } from '../../store/reducers/orderReducer';

const OrderList = memo(({ orders, onUpdateStatus, onDeleteOrder }) => {
  const orderSummary = selectOrderSummary({ orders });

  return (
    <div className="lg:col-span-2 space-y-6">
      <OrderSummary summary={orderSummary} />
      
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Active Orders</h2>
        <div className="grid gap-4">
          {orders
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .map(order => (
              <OrderCard
                key={order.id}
                order={order}
                onUpdateStatus={onUpdateStatus}
                onDelete={onDeleteOrder}
              />
            ))}
        </div>
      </div>
    </div>
  );
});

OrderList.displayName = 'OrderList';

OrderList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    tableNumber: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
  })).isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
  onDeleteOrder: PropTypes.func.isRequired,
};

export default OrderList;