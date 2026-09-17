import { useLanguage } from "../i18n/LanguageContext";

const TONE_COLORS = {
  good: "var(--forest)",
  "neutral-good": "#6E8F5C",
  neutral: "var(--wheat)",
  bad: "var(--clay)",
};

export default function DemandBadge({ status }) {
  const { t } = useLanguage();

  return (
    <span className="demand-badge" style={{ borderColor: TONE_COLORS[status.tone] }}>
      <span className="demand-dot" style={{ background: TONE_COLORS[status.tone] }} />
      {t(status.labelKey)}
    </span>
  );
}