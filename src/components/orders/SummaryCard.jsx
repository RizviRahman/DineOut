import PropTypes from 'prop-types';

const SummaryCard = ({ value, label, color }) => {
  const colorClasses = {
    yellow: {
      text: 'text-yellow-500',
      bg: 'bg-yellow-800',
      bgOpacity: 'bg-opacity-50',
      textLight: 'text-yellow-200',
    },
    red: {
      text: 'text-red-500',
      bg: 'bg-red-800',
      bgOpacity: 'bg-opacity-50',
      textLight: 'text-red-200',
    },
    green: {
      text: 'text-green-500',
      bg: 'bg-green-800',
      bgOpacity: 'bg-opacity-50',
      textLight: 'text-green-200',
    },
  };

  const classes = colorClasses[color];

  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div className={`text-5xl font-bold ${classes.text} mb-2`}>{value}</div>
      <div
        className={`${classes.bg} ${classes.bgOpacity} ${classes.textLight} text-xs font-medium px-3 py-1 rounded-full inline-block`}
      >
        {label}
      </div>
    </div>
  );
};

SummaryCard.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['yellow', 'red', 'green']).isRequired,
};

export default SummaryCard;