import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import { useEffect, useState } from "react";
import getUserName from "../../utils/getUserName";
import "./Hosting.css";

export default function Hosting({ isAuthenticated, setIsAuthenticated }) {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getUserName(setUserName, navigate);
  }, [navigate]);

  return (
    <>
      <Header
        showPropertyOptions={false}
        showSearch={false}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        className="hosting-header"
      />
      <div className="hosting-component-container">
        <Breadcrumb />
        <div className="hosting-component-container-header">
          <h1>Welcome, {userName}!</h1>
        </div>
        
      </div>
    </>
  );
}
