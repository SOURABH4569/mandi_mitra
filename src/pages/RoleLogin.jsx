import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function RoleLogin({ setPhone }) {
  const { t } = useLanguage();
  const { role } = useParams();
  const navigate = useNavigate();

  const [phone, setLocalPhone] = useState("");
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isBuyer = role === "buyer";
  const isAdmin = role === "admin";

  const handleBuyerLogin = () => {
    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 10) {
      setError(t("profile.invalidPhone"));
      return;
    }

    setError("");
    setPhone(cleanPhone);
    navigate("/otp?role=buyer");
  };

  const handleAdminLogin = () => {
    if (!adminId.trim() || !password.trim()) {
      setError(t("role.adminFieldsRequired"));
      return;
    }

    setError("");

    // Admin authentication will be connected later.
    // For now this is only the prototype UI flow.
    navigate("/");
  };

  if (!isBuyer && !isAdmin) {
    return (
      <div className="auth-screen">
        <div className="auth-card">
          <h1>{t("role.invalid")}</h1>

          <button
            className="btn"
            type="button"
            onClick={() => navigate("/")}
          >
            {t("role.backHome")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-screen role-login-screen">
      <div className="auth-card role-login-card">
        <button
          type="button"
          className="profile-back"
          onClick={() => navigate("/")}
        >
          ←
        </button>

        <div className="role-login-icon">
          {isBuyer ? "🛒" : "🛠️"}
        </div>

        <div className="brand-mark role-login-brand">
          <span className="dot" />
          <span className="brand-name">{t("app.name")}</span>
        </div>

        <h1>
          {isBuyer
            ? t("role.buyerLogin")
            : t("role.adminLogin")}
        </h1>

        <p className="sub">
          {isBuyer
            ? t("role.buyerLoginSubtitle")
            : t("role.adminLoginSubtitle")}
        </p>

        {isBuyer ? (
          <div className="field">
            <label htmlFor="buyer-phone">
              {t("login.mobileLabel")}
            </label>

            <div className="phone-input">
              <span className="country-code">+91</span>

              <input
                id="buyer-phone"
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
          </div>
        ) : (
          <>
            <div className="field">
              <label htmlFor="admin-id">
                {t("role.adminId")}
              </label>

              <input
                id="admin-id"
                type="text"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                placeholder="Admin ID"
              />
            </div>

            <div className="field">
              <label htmlFor="admin-password">
                {t("role.adminPassword")}
              </label>

              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </>
        )}

        {error && (
          <div className="form-error">
            {error}
          </div>
        )}

        <button
          className="btn"
          type="button"
          onClick={isBuyer ? handleBuyerLogin : handleAdminLogin}
        >
          {isBuyer
            ? t("login.otpButton")
            : t("role.adminLoginButton")}
        </button>

        <p className="hint">
          {t("role.switchRole")}{" "}
          <button
            type="button"
            onClick={() => navigate("/")}
          >
            {t("role.backHome")}
          </button>
        </p>
      </div>
    </div>
  );
}