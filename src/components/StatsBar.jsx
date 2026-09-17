import { useLanguage } from "../i18n/LanguageContext";

export default function StatsBar({ stats }) {
  const { t } = useLanguage();

  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div className="stat-tile" key={s.label}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">
            {t(s.labelKey || s.label)}
          </div>
        </div>
      ))}
    </div>
  );
}
