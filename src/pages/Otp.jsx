import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Otp({ phone }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    const nextOtp = [...otp];
    nextOtp[index] = digit;
    setOtp(nextOtp);

    if (digit && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) return;

    navigate("/dashboard");
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <div className="brand-mark">
          <span className="dot" />
          <span className="brand-name">{t("app.name")}</span>
        </div>

        <h1>{t("otp.title")}</h1>

        <p className="sub">
          {t("otp.subtitle", {
            phone: phone ? `+91 ${phone}` : t("otp.subtitleDefault"),
          })}
        </p>

        <div className="otp-boxes">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              autoComplete="one-time-code"
              aria-label={`OTP digit ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="btn"
          onClick={handleVerify}
          disabled={!isComplete}
          style={{
            opacity: isComplete ? 1 : 0.55,
            cursor: isComplete ? "pointer" : "not-allowed",
          }}
        >
          {t("otp.verifyButton")}
        </button>

        <p className="hint">
          <button onClick={() => navigate("/profile")}>
            {t("otp.back")}
          </button>
        </p>
      </div>
    </div>
  );
}