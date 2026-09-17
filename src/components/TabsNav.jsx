import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const TABS = [
  { path: "mandi-bhaav", labelKey: "tabs.mandiBhaav" },
  { path: "lot", labelKey: "tabs.lot" },
  { path: "offers", labelKey: "tabs.offers" },
  { path: "transactions", labelKey: "tabs.transactions" },
];

export default function TabsNav() {
  const { t } = useLanguage();

  return (
    <nav className="tabs">
      {TABS.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t(tab.labelKey)}
        </NavLink>
      ))}
    </nav>
  );
}