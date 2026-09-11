import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Login({ setPhone }) {
  const { t } = useLanguage();

  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    setPhone(value);
    navigate("/otp");
  };

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <div className="brand-mark">
          <span className="dot" />
          <span className="brand-name">Kisan Mandi Sahayak</span>
        </div>

        <h1>{t("login.heading")}</h1>

        <p className="sub">
          {t("login.subtitle")}
        </p>

        <div className="field">
          <label htmlFor="phone">
            {t("login.mobileLabel")}
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="98765 43210"
            maxLength={10}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button className="btn" onClick={handleContinue}>
          {t("login.otpButton")}
        </button>

        <p className="hint">
          {t("login.newAccount")}{" "}
          <button onClick={handleContinue}>
            {t("login.startHere")}
          </button>
        </p>
      </div>
    </div>
  );
}