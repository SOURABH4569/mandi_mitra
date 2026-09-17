import { useLanguage } from "../i18n/LanguageContext";

export default function LogisticsPanel({ options }) {
  const { t } = useLanguage();

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>{t("logistics.title")}</h2>
        <span className="count">
          {t("logistics.subtitle", { count: options.length })}
        </span>
      </div>

      <div className="logistics-list">
        {options.map((o) => (
          <div className="logistics-row" key={o.name}>
            <div className="logistics-icon">
              {o.type.includes("Cold")
                ? "❄️"
                : o.type.includes("Transport")
                ? "🚚"
                : "🏬"}
            </div>

            <div className="logistics-main">
              <div className="logistics-name">{o.name}</div>
              <div className="logistics-type">{o.type}</div>

              <div className="logistics-details">
                <span>📍 {o.distanceHint}</span>
                <span>📦 {o.capacity}</span>
                <span>💰 {o.rate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}