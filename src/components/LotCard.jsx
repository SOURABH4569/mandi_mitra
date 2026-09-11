import { cropMeta } from "../data/mandis";
import { useLanguage } from "../i18n/LanguageContext";

export default function LotCard({ lot }) {
  const { t } = useLanguage();

  return (
    <div className="lot-card">
      {lot.photoUrl && (
        <img
          src={lot.photoUrl}
          alt={lot.crop}
          className="lot-thumb"
        />
      )}

      <div className="lot-info">
        <div className="lot-top">
          <span className="lot-crop">
            {cropMeta[lot.crop]?.icon} {cropMeta[lot.crop]?.label}
          </span>

          <span className="grade-chip" data-grade={lot.grade}>
            {t("common.gradeLabel")} {lot.grade}
          </span>
        </div>

        <div className="lot-meta">
          <span>
            📦 {lot.quantity} {t("common.quintal")}
          </span>

          <span>
            📅 {t("common.harvestLabel")} {lot.harvestDate}
          </span>
        </div>

        <div className="lot-status">
          {t("common.statusLabel")} {lot.status}
        </div>
      </div>
    </div>
  );
}