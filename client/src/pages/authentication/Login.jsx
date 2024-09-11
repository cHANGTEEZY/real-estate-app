import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
import "./Authenticate.css";
import logo from "../../assets/images/Logo/n.png";
import { useNavigate, Link } from "react-router-dom";
// import { CookiesProvider, useCookies } from "react-cookie";

export default function Login({ isAuthenticated, setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const redirect = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const result = await response.text();
        toast.error(result);
      } else {
        const result = await response.json();
        toast.success(result.message);
        localStorage.setItem("token", result.token);
        setIsAuthenticated(true);
        redirect("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="signup-container">
      <Header
        showPropertyOptions={false}
        showSearch={false}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div className="signup-content">
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <div className="form-logo">
                <img src={logo} />
              </div>
              <div className="form-header">
                <h1>Welcome Back</h1>
                <span> Please sign in to your account</span>
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
                  Don&apos;t have an account? <Link to={"/signup"}>SignUp</Link>
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
