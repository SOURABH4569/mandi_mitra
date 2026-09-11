import { useLanguage } from "../i18n/LanguageContext";

export default function BuyerDemandPanel({ buyers }) {
   const { t } = useLanguage();
  return (
    <div className="panel">
      <div className="panel-head">
        <h2>{t("buyer.title")}</h2>
        <span className="count">{t("buyer.subtitle", { count: buyers.length })}</span>
      </div>
      <div className="buyer-list">
        {buyers.map((b) => (
          <div className="buyer-row" key={b.id}>
            <div className="buyer-avatar">{b.name.charAt(0)}</div>
            <div className="buyer-main">
              <div className="buyer-top">
                <span className="buyer-name">
                  {b.name} {b.verified && <span className="verified-tick" title={t("buyer.verifiedTitle")}>✓</span>}
                </span>
                <span className="buyer-type">{b.type}</span>
              </div>
              <div className="buyer-trust">
                <div className="trust-track">
                  <div className="trust-fill" style={{ width: `${b.trustScore}%` }} />
                </div>
                <span className="trust-num">{t("common.trustScore", { score: b.trustScore })}</span>
              </div>
              <div className="buyer-details">
                <span>📦 {b.demand.quantity}</span>
                <span>🎯 {b.demand.qualitySpec}</span>
                <span>💳 {b.paymentReliability}</span>
                <span>📍 {b.location} ({b.distanceHint})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
