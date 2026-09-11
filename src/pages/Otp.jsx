import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Otp({ phone }) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const phoneText = phone
    ? `+91 ${phone}`
    : t("otp.subtitleDefault");

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <div className="brand-mark">
          <span className="dot" />
          <span className="brand-name">Kisan Mandi Sahayak</span>
        </div>

        <h1>{t("otp.title")}</h1>

        <p className="sub">
          {t("otp.subtitle", { phone: phoneText })}
        </p>

        <div className="otp-boxes">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
            />
          ))}
        </div>

        <button
          className="btn"
          onClick={() => navigate("/profile")}
        >
          {t("otp.verifyButton")}
        </button>

        <p className="hint">
          <button onClick={() => navigate("/")}>
            {t("otp.back")}
          </button>
        </p>
      </div>
    </div>
  );
}