import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { accountGrid } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getUserName from "../../utils/getUserName";
import "./Account.css";

export default function Account({ isAuthenticated, setIsAuthenticated }) {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getUserName(setUserName, navigate);
  }, [navigate]);

  return (
    <div>
      <Header
        showPropertyOptions={false}
        showSearch={false}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <section className="account-container">
        <section className="account-title">
          <h1>Account</h1>
          <p>
            Welcome back,<span> {userName}</span>. Manage your account settings,
            bookings, and more from here.
          </p>
        </section>
        <section className="account-grid-container">
          <div className="account-settings-grid">
            {accountGrid.map((item) => {
              return (
                <div key={item.id} className="account-card">
                  <Link to={item.link}>
                    <div className="account-card-top">
                      <item.icon />
                    </div>
                    <div className="account-card-bottom">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
