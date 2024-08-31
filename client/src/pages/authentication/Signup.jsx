import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
import "./Authenticate.css";
import logo from "../../assets/images/Logo/n.png";
import { Link } from "react-router-dom";

export default function SignUp({ isAuthenticated, setIsAuthenticated }) {
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
    let errorMessage = [];

    // Username validation
    if (!formData.username) {
      errorMessage.push("Enter a username.");
    } else if (formData.username.length > 20) {
      errorMessage.push("Username must be less than 20 characters long.");
    }

    // Email validation
    if (!formData.email) {
      errorMessage.push("Enter an email.");
    }

    // Password validation
    // const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!formData.password) {
      errorMessage.push("Password is required.");
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      errorMessage.push("Passwords do not match.");
    }

    if (errorMessage.length > 0) {
      return toast.error(errorMessage.join("\n"));
    }

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const responseText = await response.json();
        toast.error(responseText);
      } else {
        const result = await response.json();
        toast.success(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <Header showPropertyOptions={false} showSearch={false} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
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
                  Already a user? <Link to={"/login"}>Login</Link>
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
