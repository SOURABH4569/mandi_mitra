import { CROP_KEYS } from "../data/cropMeta";
import { useLanguage } from "../i18n/LanguageContext";

export default function LotCard({ lot }) {
  const { t } = useLanguage();

  return (
    <div className="lot-card">
      {lot.photoUrl && <img src={lot.photoUrl} alt={lot.crop} className="lot-thumb" />}
      <div className="lot-info">
        <div className="lot-top">
          <span className="lot-crop">
            {CROP_KEYS[lot.crop]?.icon}{" "}
            {CROP_KEYS[lot.crop] ? t(CROP_KEYS[lot.crop].labelKey) : lot.crop}
          </span>
          <span className="grade-chip" data-grade={lot.grade}>
            {t("common.gradeLabel", { grade: lot.grade })}
          </span>
        </div>

        <div className="lot-meta">
          <span>📦 {lot.quantity} {t("common.quintal")}</span>
          <span>
            {t("common.harvestLabel", { date: lot.harvestDate })}
          </span>
        </div>

        <div className="lot-status">
          {t("common.statusLabel", { status: lot.status })}
        </div>
      </div>
    </div>
  );
}