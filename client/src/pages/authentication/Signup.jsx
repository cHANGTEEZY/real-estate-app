import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
import "./Signup.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    usename: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
    } else {
      toast.success("Form submitted");
      console.log("Form submitted");
    }
  }

  return (
    <div className="signup-container">
      <Header showPropertyOptions={false} showSearch={false} />
      <div className="signup-content">
        <form onSubmit={handleSubmit} className="form">
          <h1 className="form-header">Signup</h1>
          {/* {error && <div className="form-error">{error}</div>} */}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassowrd}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-footer">
            <button type="submit">Submit</button>
            <span>
              Already a user? <a href={"/login"}>Login</a>
            </span>
          </div>
        </form>
      </div>
      <div className="footer-position">
        <Footer />
      </div>
    </div>
  );
}
