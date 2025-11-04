// Constants for order statuses
export const ORDER_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  }).format(amount);
};

// Calculate order total
export const calculateOrderTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Validate order data
export const validateOrder = (order) => {
  const errors = {};

  if (!order.items || order.items.length === 0) {
    errors.items = 'Order must contain at least one item';
  }

  if (!order.customerName) {
    errors.customerName = 'Customer name is required';
  }

  if (!order.tableNumber) {
    errors.tableNumber = 'Table number is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};