import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ farmerName, village, cropIcon }) {
  const { t } = useLanguage();

  return (
    <header className="topbar">
      <div className="brand-mark">
        <span className="dot" />
        <span className="brand-name">{t("app.name")}</span>
      </div>

      <div className="topbar-right">
        <LanguageSwitcher />
        {farmerName && (
          <div className="farmer-chip">
            <span>{cropIcon}</span>
            <span>{farmerName} · {village}</span>
          </div>
        )}
      </div>
    </header>
  );
}