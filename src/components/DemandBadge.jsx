const TONE_COLORS = {
  good: "var(--forest)",
  "neutral-good": "#6E8F5C",
  neutral: "var(--wheat)",
  bad: "var(--clay)",
};

export default function DemandBadge({ status }) {
  return (
    <span className="demand-badge" style={{ borderColor: TONE_COLORS[status.tone] }}>
      <span className="demand-dot" style={{ background: TONE_COLORS[status.tone] }} />
      {status.label}
    </span>
  );
}
