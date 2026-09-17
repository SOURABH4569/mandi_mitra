import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CROP_KEYS } from "../data/cropMeta";
import { useLanguage } from "../i18n/LanguageContext";

export default function Profile({ setFarmer }) {
  const { t } = useLanguage();
  const [name, setName] = useState("Ramesh Kumar");
  const [village, setVillage] = useState("Raebareli, Uttar Pradesh");
  const [crop, setCrop] = useState("wheat");
  const navigate = useNavigate();

  const handleContinue = () => {
    setFarmer({ name: name || "Kisan Bhai", village: village || "Raebareli", crop });
    navigate("/dashboard");
  };

  return (
    <div className="auth-screen">
      <div className="auth-card" style={{ maxWidth: 480 }}>
        <div className="brand-mark">
          <span className="dot" />
          <span className="brand-name">Kisan Mandi Sahayak</span>
        </div>

        <h1>{t("profile.title")}</h1>
        <p className="sub">{t("profile.subtitle")}</p>

        <div className="field">
          <label htmlFor="fname">{t("profile.nameLabel")}</label>
          <input
            id="fname"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="village">{t("profile.villageLabel")}</label>
          <input
            id="village"
            type="text"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
          />
        </div>

        <div className="field">
          <label>{t("profile.cropLabel")}</label>

          <div className="crop-grid">
            {Object.entries(CROP_KEYS).map(([key, meta]) => (
              <div
                key={key}
                className={`crop-pill ${crop === key ? "selected" : ""}`}
                onClick={() => setCrop(key)}
              >
                {meta.icon} {t(meta.labelKey)}
              </div>
            ))}
          </div>
        </div>

        <button className="btn" onClick={handleContinue}>
          {t("profile.openDashboard")}
        </button>
      </div>
    </div>
  );
}