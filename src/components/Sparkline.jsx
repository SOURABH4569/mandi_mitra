export default function Sparkline({ trend, width = 90, height = 28 }) {
  const pad = 3;
  const min = Math.min(...trend);
  const max = Math.max(...trend);
  const range = max - min || 1;
  const step = (width - pad * 2) / (trend.length - 1);

  const points = trend
    .map((v, i) => {
      const x = pad + i * step;
      const y = height - pad - ((v - min) / range) * (height - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const rising = trend[trend.length - 1] >= trend[0];
  const color = rising ? "var(--forest)" : "var(--clay)";

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
