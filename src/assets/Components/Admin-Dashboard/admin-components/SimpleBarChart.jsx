import { useState } from 'react';
export default function SimpleBarChart({ data = [], months = [], selectedBar = null, onBarClick }) {
  const [hoveredBar, setHoveredBar] = useState(null);
  const width = 800, height = 180, padding = 18;
  // const defaultMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // const labels = months.length >= data.length ? months : defaultMonths;
  const labels = months;
  const max = Math.max(...data, 1);

  // Calculate bar width based on available space and data points
  const barWidth = ((width - padding * 2) / data.length) * 0.7;
  const spacing = ((width - padding * 2) / data.length) * 0.45;

  const bars = data.map((value, i) => {
    const x = padding + (i * (barWidth + spacing))-12;
    const barHeight = (value / max) * (15 + height - padding * 3);
    const y = height - padding - barHeight;
    return { x, y, width: barWidth, height: barHeight, value };
  });

  return (
    <svg className="simple-chart" viewBox={`0 0 ${width+70} ${height}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
        </linearGradient>
        <linearGradient id="hoverGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(99, 241, 130, 0.8)" />
          <stop offset="100%" stopColor="rgba(99, 241, 234, 0.3)" />
        </linearGradient>
      </defs>

      {/* Bars with gradient fill */}
      {bars.map((bar, i) => (
        <g key={i} 
           onMouseEnter={() => setHoveredBar(i)}
           onMouseLeave={() => setHoveredBar(null)}>
          <rect 
            x={bar.x}
            y={bar.y}
            width={bar.width}
            height={bar.height}
            fill={hoveredBar === i || selectedBar === i ? "url(#hoverGrad)" : "url(#grad)"}
            rx="4"
            className="chart-bar"
            onClick={() => onBarClick(selectedBar === i ? null : i)}
            style={{ cursor: 'pointer' }}
          />
          {/* Amount labels */}
          <text 
            x={bar.x + bar.width/2}
            y={bar.y - 8}
            textAnchor="middle"
            className="chart-amount"
          >
            {bar.value}৳
          </text>
          {/* Month labels */}
          <text
            x={bar.x + bar.width/2}
            y={height - 4}
            textAnchor="middle"
            className="chart-label"
          >
            {labels[i].slice(0,3) || ''}
          </text>
        </g>
      ))}
    </svg>
  );
}