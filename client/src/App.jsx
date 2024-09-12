import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/Signup";
import "./styles.css";
import { useEffect, useState } from "react";
import Account from "./pages/userAccount/Account";
import Booking from "./pages/userAccount/Booking";
import PrivacyAndSharing from "./pages/userAccount/PrivacyAndSharing";
import Hosting from "./pages/userAccount/Hosting";
import Payments from "./pages/userAccount/Payments";
import PersonalInfo from "./pages/userAccount/PersonalInfo";
import LoginAndSecurity from "./pages/userAccount/LoginAndSecurity";
import PropertyDetails from "./pages/RealEstateDetail/PropertyDetails";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/property-detail"
          element={
            <PropertyDetails
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/account-settings"
          element={
            <Account
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/account-settings/personal-info"
          element={
            <PersonalInfo
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/account-settings/login-and-security"
          element={
            <LoginAndSecurity
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/account-settings/payments"
          element={
            <Payments
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/account-settings/booking"
          element={
            <Booking
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/account-settings/nestify"
          element={
            <Hosting
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/account-settings/privacy-and-sharing"
          element={<PrivacyAndSharing />}
        />
      </Routes>
    </Router>
  );
}
