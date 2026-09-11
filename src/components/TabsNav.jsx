import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const TABS = [
   { path: "mandi-bhaav", key: "tabs.mandiBhaav" },
  { path: "lot", key: "tabs.lot" },
  { path: "offers", key: "tabs.offers" },
  { path: "transactions", key: "tabs.transactions" },
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
          {t(tab.key)}
        </NavLink>
      ))}
    </nav>
  );
}
