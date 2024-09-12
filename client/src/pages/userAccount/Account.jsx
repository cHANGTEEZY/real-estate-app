import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {
  IdCard,
  ShieldHalf,
  House,
  Eye,
  TicketPlus,
  CreditCard,
} from "lucide-react";
import { accountGrid } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Account.css";

export default function Account({ isAuthenticated, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const getUserName = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized");
        toast.error("Redirect to Login page");
        navigate("/login");
      }
      const response = await fetch("http://localhost:3000/account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUsername(data.username);
      } else {
        const data = await response.json();
        console.log(data.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUserName();
  }, []);

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
            Welcome back,<span> {username}</span>. Manage your account settings,
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
