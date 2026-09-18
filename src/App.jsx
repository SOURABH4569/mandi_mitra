import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Profile from "./pages/Profile";
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

  const [phone, setPhone] = useState("");
  const [farmer, setFarmer] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        {/* Role selection */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Farmer details */}
        <Route
          path="/profile"
          element={
            <Profile
              setFarmer={setFarmer}
              setPhone={setPhone}
            />
          }
        />

        {/* OTP verification */}
        <Route
          path="/otp"
          element={
            <Otp
              phone={phone}
              farmer={farmer}
            />
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<DashboardLayout farmer={farmer} />}
        >
          <Route
            index
            element={<Navigate to="mandi-bhaav" replace />}
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