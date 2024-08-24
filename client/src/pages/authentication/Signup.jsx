import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
import "./Signup.css";
import logo from "../../assets/images/Logo/n.png";

export default function SignUp() {
  const [formData, setFormData] = useState({
    usename: "",
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
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    try {
      const response = await fetch("https://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`errror ${response.status}`);
      }
      const result = await response.json();
      toast.success(result || "Account created successfully");
    } catch (error) {
      console.error(error.message);
      toast.error("An error occured during sign-up");
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
              <div className="form-group form-padding">
                <label htmlFor="password">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassowrd}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-footer form-padding">
                <button type="submit" className="submit-button">
                  Submit
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
