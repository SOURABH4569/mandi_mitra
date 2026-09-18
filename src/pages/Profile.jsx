import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CROP_KEYS } from "../data/cropMeta";
import { useLanguage } from "../i18n/LanguageContext";

export default function Profile({ setFarmer, setPhone }) {
  const { t } = useLanguage();

  const [name, setName] = useState("Ramesh Kumar");
  const [village, setVillage] = useState("Raebareli, Uttar Pradesh");
  const [phone, setLocalPhone] = useState("");
  const [crop, setCrop] = useState("wheat");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSendOtp = () => {
    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 10) {
      setError(t("profile.invalidPhone"));
      return;
    }

    setError("");

    setPhone(cleanPhone);

    setFarmer({
      name: name || "Kisan Bhai",
      village: village || "Raebareli",
      crop,
    });

    navigate("/otp");
  };

  return (
    <div className="auth-screen farmer-profile-screen">
      <div className="auth-card farmer-profile-card">
        <div className="profile-top">
          <button
            type="button"
            className="profile-back"
            onClick={() => navigate("/")}
          >
            ←
          </button>

          <div className="brand-mark">
            <span className="dot" />
            <span className="brand-name">{t("app.name")}</span>
          </div>
        </div>

        <div className="profile-hero">
          <div className="profile-avatar">👨‍🌾</div>

          <div className="profile-step">
            {t("profile.step")}
          </div>

          <h1>{t("profile.title")}</h1>

          <p className="sub">{t("profile.subtitle")}</p>
        </div>

        <div className="profile-form">
          <div className="field">
            <label htmlFor="fname">
              {t("profile.nameLabel")}
            </label>

            <input
              id="fname"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("profile.defaultName")}
            />
          </div>

          <div className="field">
            <label htmlFor="village">
              {t("profile.villageLabel")}
            </label>

            <input
              id="village"
              type="text"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="mobile">
              {t("login.mobileLabel")}
            </label>

            <div className="phone-input">
              <span className="country-code">+91</span>

              <input
                id="mobile"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={phone}
                onChange={(e) =>
                  setLocalPhone(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                placeholder="98765 43210"
              />
            </div>

            <span className="field-hint">
              {t("profile.otpHint")}
            </span>
          </div>

          <div className="field">
            <label>{t("profile.cropLabel")}</label>

            <div className="crop-grid profile-crop-grid">
              {Object.entries(CROP_KEYS).map(([key, meta]) => (
                <button
                  key={key}
                  type="button"
                  className={`crop-pill ${
                    crop === key ? "selected" : ""
                  }`}
                  onClick={() => setCrop(key)}
                >
                  <span className="profile-crop-icon">
                    {meta.icon}
                  </span>

                  <span>{t(meta.labelKey)}</span>
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="form-error profile-error">
              {error}
            </div>
          )}

          <button
            className="btn profile-submit"
            onClick={handleSendOtp}
          >
            {t("login.otpButton")}
            <span>→</span>
          </button>
        </div>

        <div className="profile-security">
          {t("profile.security")}
        </div>
      </div>
    </div>
  );
}