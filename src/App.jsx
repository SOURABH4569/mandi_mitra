import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Profile from "./pages/Profile";
import RoleLogin from "./pages/RoleLogin";

import DashboardLayout from "./pages/DashboardLayout";
import MandiPricePage from "./pages/MandiPricePage";
import ComingSoonPage from "./pages/ComingSoonPage";
import LotPage from "./pages/LotPage";
import OffersPage from "./pages/OffersPage";

import { useLanguage } from "./i18n/LanguageContext";

import "./styles/global.css";
import "./styles/auth.css";
import "./styles/dashboard.css";

export default function App() {
  const { t } = useLanguage();

  const [phone, setPhone] = useState(
    () => sessionStorage.getItem("kms_phone") || ""
  );

  const [farmer, setFarmer] = useState(() => {
    try {
      const saved = sessionStorage.getItem("kms_farmer");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem("kms_authenticated") === "true"
  );

  const handleSetPhone = (value) => {
    setPhone(value);
    sessionStorage.setItem("kms_phone", value);
  };

  const handleSetFarmer = (value) => {
    setFarmer(value);
    sessionStorage.setItem("kms_farmer", JSON.stringify(value));
  };

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("kms_authenticated", "true");
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Role selection */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Farmer profile */}
        <Route
          path="/profile"
          element={
            <Profile
              setFarmer={handleSetFarmer}
              setPhone={handleSetPhone}
            />
          }
        />

        {/* Buyer / Admin login */}
        <Route
          path="/role-login/:role"
          element={
            <RoleLogin
              setPhone={handleSetPhone}
            />
          }
        />

        {/* OTP */}
        <Route
          path="/otp"
          element={
            <Otp
              phone={phone}
              onVerified={handleAuthenticated}
            />
          }
        />

        {/* Protected dashboard */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated && farmer ? (
              <DashboardLayout farmer={farmer} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        >
          <Route
            index
            element={
              <Navigate
                to="mandi-bhaav"
                replace
              />
            }
          />

          <Route
            path="mandi-bhaav"
            element={<MandiPricePage />}
          />

          <Route
            path="lot"
            element={<LotPage />}
          />

          <Route
            path="offers"
            element={<OffersPage />}
          />

          <Route
            path="transactions"
            element={
              <ComingSoonPage
                title={t("tabs.transactions")}
                description={t("comingSoon.transactionsDesc")}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}