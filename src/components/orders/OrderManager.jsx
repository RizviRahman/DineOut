import { useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import CreateOrder from './CreateOrder';
import OrderList from './OrderList';
import { orderReducer, initialOrderState, ORDER_ACTIONS } from '../../store/reducers/orderReducer';
import { validateOrder } from '../../utils/orderUtils';

const OrderManager = ({ items, initialOrders }) => {
  const [state, dispatch] = useReducer(orderReducer, {
    ...initialOrderState,
    orders: initialOrders
  });

  const handleAddOrder = useCallback((newOrder) => {
    const { isValid, errors } = validateOrder(newOrder);
    
    if (!isValid) {
      console.error('Order validation failed:', errors);
      return;
    }

    const orderId = state.orders.length === 0 
      ? 1 
      : Math.max(...state.orders.map(o => o.id)) + 1;

    dispatch({
      type: ORDER_ACTIONS.ADD_ORDER,
      payload: { ...newOrder, id: orderId }
    });
  }, [state.orders]);

  const handleUpdateStatus = useCallback((orderId) => {
    dispatch({
      type: ORDER_ACTIONS.UPDATE_ORDER_STATUS,
      payload: { id: orderId, status: 'DELIVERED' }
    });
  }, []);

  const handleDeleteOrder = useCallback((orderId) => {
    dispatch({
      type: ORDER_ACTIONS.DELETE_ORDER,
      payload: orderId
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow order-manager">
      <CreateOrder 
        items={items} 
        onSubmit={handleAddOrder}
      />
      <OrderList
        orders={state.orders}
        onUpdateStatus={handleUpdateStatus}
        onDeleteOrder={handleDeleteOrder}
      />
    </div>
  );
};

OrderManager.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  })).isRequired,
  initialOrders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    tableNumber: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  })).isRequired,
};

export default OrderManager;