import { useLanguage } from "../i18n/LanguageContext";

export default function ComingSoonPage({ title, description }) {
  const { t } = useLanguage();

  return (
    <div className="coming-soon">
      <h2>{title}</h2>
      <p>
        {description || t("comingSoon.defaultDesc")}
      </p>
    </div>
  );
}