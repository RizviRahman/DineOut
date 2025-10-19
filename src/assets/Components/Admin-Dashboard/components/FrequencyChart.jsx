export default function FrequencyChart({ items = [] }) {
  const width = 750, height = 220, padding = 15;
  const barHeight = 24;
  const spacing = 12;
  const max = Math.max(...items.map(i => i.count), 1);

  // Sort items by count in descending order
  const sortedItems = [...items].sort((a, b) => b.count - a.count);

  const bars = sortedItems.map((item, i) => {
    const y = padding + (i * (barHeight + spacing));
    const barWidth = (item.count / max) * (width - padding * 6);
    return { ...item, y, width: barWidth };
  });

  return (
    <svg className="frequency-chart" viewBox={`0 0 ${width+80} ${height}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="freqGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="rgba(59, 187, 246, 0.6)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
        </linearGradient>
      </defs>

      {bars.map((bar, i) => (
        <g key={i}>
          {/* Item name */}
          <text 
            x={padding/7}
            y={bar.y + barHeight/2}
            dy="0.35em"
            className="chart-label"
          >
            {bar.name}
          </text>
          {/* Bar */}
          <rect
            x={padding * 8 + 40}
            y={bar.y}
            width={bar.width}
            height={barHeight}
            fill="url(#freqGrad)"
            rx="4"
          />
          {/* Count */}
          <text
            x={(padding * 3.5 + bar.width + 40) < (padding * 8 + 47) ? (padding * 8 + 47) : (padding * 3.5 + bar.width + 40)}
            y={bar.y + barHeight/2}
            dy="0.35em"
            className="chart-quantity"
          >
            {bar.count} orders
          </text>
        </g>
      ))}
    </svg>
  );
}