import { useLanguage } from "../i18n/LanguageContext";

export default function QuantityBar({ qty, onChange }) {
  const { t } = useLanguage();

  return (
    <div className="qty-bar">
      <label htmlFor="qtyInput">{t("qty.label")}</label>

      <input
        id="qtyInput"
        type="number"
        min="1"
        value={qty}
        onChange={(e) =>
          onChange(Math.max(1, parseFloat(e.target.value) || 1))
        }
      />

      <div className="divider" />

      <span className="assump">
        {t("qty.assumption")}
      </span>
    </div>
  );
}