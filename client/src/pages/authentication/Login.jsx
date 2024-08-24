import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import { toast } from "react-toastify";
import "./Authenticate.css";
import logo from "../../assets/images/Logo/n.png";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="signup-container">
      <Header showPropertyOptions={false} showSearch={false} />
      <div className="signup-content">
        <div className="form-wrapper">
          <form className="form">
            <div>
              <div className="form-logo">
                <img src={logo} />
              </div>
              <div className="form-header">
                <h1>Welcome Back</h1>
                <span>Welcome to Nestify - Please sign in to your account</span>
              </div>
              <div className="form-group form-padding">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group form-padding">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group form-padding">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-footer form-padding">
                <button type="submit" className="submit-button">
                  Login
                </button>
                <span className="form-footer-span">
                  Don&apos;t have an account? <a href={"/signup"}>SignUp</a>
                </span>
              </div>
            </div>
          </form>
          <div className="form-side "></div>
        </div>
      </div>
      <div className="footer-position">
        <Footer />
      </div>
    </div>
  );
}
