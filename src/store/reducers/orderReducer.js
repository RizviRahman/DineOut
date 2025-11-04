// Action Types
export const ORDER_ACTIONS = {
  SET_ORDERS: 'orders/setOrders',
  ADD_ORDER: 'orders/addOrder',
  UPDATE_ORDER_STATUS: 'orders/updateStatus',
  DELETE_ORDER: 'orders/deleteOrder',
};

// Initial State
export const initialOrderState = {
  orders: [],
  loading: false,
  error: null,
};

// Reducer
export const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case ORDER_ACTIONS.SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: null,
      };

    case ORDER_ACTIONS.ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        loading: false,
        error: null,
      };

    case ORDER_ACTIONS.UPDATE_ORDER_STATUS:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id
            ? { ...order, status: action.payload.status }
            : order
        ),
        loading: false,
        error: null,
      };

    case ORDER_ACTIONS.DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

// Selectors
export const selectOrders = (state) => state.orders;
export const selectOrderSummary = (state) => {
  const orders = state.orders;
  return {
    totalOrders: orders.length,
    pendingOrders: orders.filter((order) => order.status === 'pending').length,
    deliveredOrders: orders.filter((order) => order.status === 'delivered').length,
  };
};