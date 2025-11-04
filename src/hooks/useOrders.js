import { useReducer, useCallback } from 'react';

const useOrders = (initialOrders = []) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_ORDER':
        return {
          ...state,
          orders: [action.payload, ...state.orders],
        };
      
      case 'UPDATE_STATUS':
        return {
          ...state,
          orders: state.orders.map(order =>
            order.id === action.payload
              ? { ...order, status: 'DELIVERED' }
              : order
          ),
        };
      
      case 'DELETE_ORDER':
        return {
          ...state,
          orders: state.orders.filter(order => order.id !== action.payload),
        };
      
      default:
        return state;
    }
  }, {
    orders: initialOrders,
  });

  const addOrder = useCallback((orderData) => {
    const orderId = state.orders.length === 0
      ? 1
      : Math.max(...state.orders.map(o => o.id)) + 1;

    dispatch({
      type: 'ADD_ORDER',
      payload: { ...orderData, id: orderId },
    });
  }, [state.orders]);

  const updateOrderStatus = useCallback((orderId) => {
    dispatch({
      type: 'UPDATE_STATUS',
      payload: orderId,
    });
  }, []);

  const deleteOrder = useCallback((orderId) => {
    dispatch({
      type: 'DELETE_ORDER',
      payload: orderId,
    });
  }, []);

  return {
    orders: state.orders,
    addOrder,
    updateOrderStatus,
    deleteOrder,
  };
};

export default useOrders;