import PropTypes from 'prop-types';
import SummaryCard from './SummaryCard';

const OrderSummary = ({ summary }) => {
  const summaryCards = [
    {
      value: summary.totalOrders,
      label: 'Total Order',
      color: 'yellow',
    },
    {
      value: summary.pendingOrders,
      label: 'Pending',
      color: 'red',
    },
    {
      value: summary.deliveredOrders,
      label: 'Delivered',
      color: 'green',
    },
  ];

  return (
    <div className="order-summary">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {summaryCards.map((card) => (
          <SummaryCard
            key={card.label}
            value={card.value}
            label={card.label}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  summary: PropTypes.shape({
    totalOrders: PropTypes.number.isRequired,
    pendingOrders: PropTypes.number.isRequired,
    deliveredOrders: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderSummary;