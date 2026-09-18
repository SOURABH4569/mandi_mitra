import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import farmerHero from "../assets/farmer-hero.png";

const roles = [
  {
    id: "farmer",
    icon: "👨‍🌾",
    titleKey: "role.farmer",
    descKey: "role.farmerDesc",
  },
  {
    id: "buyer",
    icon: "🛒",
    titleKey: "role.buyer",
    descKey: "role.buyerDesc",
  },
  {
    id: "admin",
    icon: "🛠️",
    titleKey: "role.admin",
    descKey: "role.adminDesc",
  },
];



export default function Login() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
  if (role === "farmer") {
    navigate("/profile");
    return;
  }

  navigate(`/role-login/${role}`);
};

  return (
    <div className="auth-screen role-screen">
      <div className="role-card">
        <div className="brand-mark">
          <span className="dot" />
          <span className="brand-name">{t("app.name")}</span>
        </div>

        <div className="role-intro">
          <img
              src={farmerHero}
              alt="Farmer"
              className="hero-image"
/>

          <h1>{t("role.heading")}</h1>

          <p className="sub">{t("role.subtitle")}</p>
        </div>

        <div className="role-list">
          {roles.map((role) => (
            <button
              key={role.id}
              className={`role-option role-${role.id}`}
              onClick={() => handleRoleSelect(role.id)}
              type="button"
            >
              <span className="role-icon">{role.icon}</span>

              <span className="role-content">
                <span className="role-title">
                  {t(role.titleKey)}
                </span>

                <span className="role-description">
                  {t(role.descKey)}
                </span>
              </span>

              <span className="role-arrow">→</span>
            </button>
          ))}
        </div>

        <p className="role-footer">
          {t("role.footer")}
        </p>
      </div>
    </div>
  );
}