import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ farmerName, village, cropIcon }) {
  return (
    <header className="topbar">
      <div className="brand-mark">
        <span className="dot" />
        <span className="brand-name">Kisan Mandi Sahayak</span>
      </div>
      {farmerName && (
        <div className="topbar-right">
          <LanguageSwitcher/>
          <div className="farmer-chip">
            <span>{cropIcon}</span>
            <span>
              {farmerName} · {village}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
