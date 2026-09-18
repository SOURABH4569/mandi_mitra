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
      setError("Please enter a valid 10-digit mobile number.");
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
    <div className="auth-screen">
      <div className="auth-card" style={{ maxWidth: 480 }}>
        <div className="brand-mark">
          <span className="dot" />
          <span className="brand-name">{t("app.name")}</span>
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
            placeholder={t("profile.defaultName")}
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
          <label htmlFor="mobile">{t("login.mobileLabel")}</label>
          <input
            id="mobile"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={phone}
            onChange={(e) =>
              setLocalPhone(e.target.value.replace(/\D/g, ""))
            }
            placeholder="98765 43210"
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

        {error && <p className="form-error">{error}</p>}

        <button className="btn" onClick={handleSendOtp}>
          {t("login.otpButton")}
        </button>
      </div>
    </div>
  );
}