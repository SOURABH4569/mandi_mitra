import { useLanguage } from "../i18n/LanguageContext";
import { LANGUAGES } from "../i18n/translations";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <select
      className="lang-switcher"
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      aria-label="Choose Language"
    >
      {LANGUAGES.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
