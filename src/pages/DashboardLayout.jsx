import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TabsNav from "../components/TabsNav";
import { CROP_KEYS } from "../data/cropMeta";
import { useLanguage } from "../i18n/LanguageContext";

export default function DashboardLayout({ farmer }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const safeFarmer = farmer || {
    name: "Kisan Bhai",
    village: "",
    crop: "wheat",
  };

  const cropMeta = CROP_KEYS[safeFarmer.crop || "wheat"] || CROP_KEYS.wheat;

  const handleLogout = () => {
    sessionStorage.removeItem("kms_authenticated");
    sessionStorage.removeItem("kms_phone");
    sessionStorage.removeItem("kms_farmer");

    navigate("/", { replace: true });
  };

  return (
    <div className="dashboard-shell">
      <Header
        farmerName={safeFarmer.name}
        village={safeFarmer.village}
        cropIcon={cropMeta.icon}
      />

      <TabsNav />

      <main className="dash">
        <section className="dashboard-welcome">
          <div className="welcome-main">
            <div className="welcome-icon">
              {cropMeta.icon}
            </div>

            <div className="welcome-text">
              <h2>
                {t("dashboard.greeting", {
                  name: safeFarmer.name,
                })}
              </h2>

              <p>{t("dashboard.subtitle")}</p>

              <div className="welcome-meta">
                <span>
                  {t("dashboard.crop")}:{" "}
                  <strong>{t(cropMeta.labelKey)}</strong>
                </span>

                {safeFarmer.village && (
                  <span>
                    {t("dashboard.village")}:{" "}
                    <strong>{safeFarmer.village}</strong>
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="dashboard-logout"
            onClick={handleLogout}
          >
            {t("dashboard.logout")}
          </button>
        </section>

        <div className="dashboard-actions">
          <NavLink
            to="mandi-bhaav"
            className="dashboard-action"
          >
            <span className="action-icon">💰</span>
            <span>{t("dashboard.mandiAction")}</span>
            <span className="action-arrow">→</span>
          </NavLink>

          <NavLink
            to="lot"
            className="dashboard-action"
          >
            <span className="action-icon">🌾</span>
            <span>{t("dashboard.lotAction")}</span>
            <span className="action-arrow">→</span>
          </NavLink>

          <NavLink
            to="offers"
            className="dashboard-action"
          >
            <span className="action-icon">🤝</span>
            <span>{t("dashboard.offerAction")}</span>
            <span className="action-arrow">→</span>
          </NavLink>
        </div>

        <Outlet context={{ farmer: safeFarmer }} />
      </main>
    </div>
  );
}