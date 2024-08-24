import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
import "./Authenticate.css";
import logo from "../../assets/images/Logo/n.png";

export default function SignUp() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorMessage = "";
    if (!formData.username) errorMessage += "Enter a username. ";
    if (!formData.email) errorMessage += "Enter an email. ";
    if (!formData.password) errorMessage += "Password is required. ";
    if (formData.password !== formData.confirmPassword)
      errorMessage += "Passwords do not match. ";

    if (errorMessage) {
      toast.error(errorMessage);
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const responseText = await response.text();
        toast.error(responseText);
      } else {
        const result = await response.text();
        toast.success(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <Header showPropertyOptions={false} showSearch={false} />
      <div className="signup-content">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="form">
            <div>
              <div className="form-logo">
                <img src={logo} />
              </div>
              <div className="form-header">
                <h1>Get Started</h1>
                <span>Welcome to Nestify - Let&apos;s create your account</span>
              </div>
              <div className="form-group form-padding">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group form-padding">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group form-padding">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group form-padding">
                <label htmlFor="password">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassowrd}
                  onChange={handleChange}
                />
              </div>
              <div className="form-footer form-padding">
                <button type="submit" className="submit-button">
                  Sign up
                </button>
                <span className="form-footer-span">
                  Already a user? <a href={"/login"}>Login</a>
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
