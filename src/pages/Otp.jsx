import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Otp({ phone }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [seconds, setSeconds] = useState(30);

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

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

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);

    if (!pasted) return;

    const nextOtp = ["", "", "", ""];

    pasted.split("").forEach((digit, index) => {
      nextOtp[index] = digit;
    });

    setOtp(nextOtp);

    const focusIndex = Math.min(pasted.length, 3);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) return;

    // Dummy OTP for prototype.
    // Real OTP verification will be connected later.
    navigate("/dashboard");
  };

  const handleResend = () => {
    if (seconds > 0) return;

    setOtp(["", "", "", ""]);
    setSeconds(30);
    inputRefs.current[0]?.focus();
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="auth-screen otp-screen">
      <div className="auth-card otp-card">
        <button
          type="button"
          className="otp-back"
          onClick={() => navigate("/profile")}
        >
          ←
        </button>

        <div className="otp-icon">🔐</div>

        <div className="brand-mark otp-brand">
          <span className="dot" />
          <span className="brand-name">{t("app.name")}</span>
        </div>

        <h1>{t("otp.title")}</h1>

        <p className="sub">
          {t("otp.subtitle", {
            phone: phone
              ? `+91 ${phone}`
              : t("otp.subtitleDefault"),
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
              maxLength={1}
              value={digit}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              aria-label={`OTP digit ${index + 1}`}
              autoComplete={index === 0 ? "one-time-code" : "off"}
            />
          ))}
        </div>

        <button
          type="button"
          className="btn otp-verify-btn"
          onClick={handleVerify}
          disabled={!isComplete}
        >
          {t("otp.verifyButton")}
          <span>→</span>
        </button>

        <div className="otp-resend">
          {seconds > 0 ? (
            <span>
              {t("otp.resend")}
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
            >
              {t("otp.resend")}
            </button>
          )}
        </div>

        <p className="otp-demo-note">
  {t("otp.demoNote")}
</p>
      </div>
    </div>
  );
}