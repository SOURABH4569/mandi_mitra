export default function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div className="stat-tile" key={s.label}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
