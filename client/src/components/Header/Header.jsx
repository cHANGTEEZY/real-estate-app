// Header.jsx
import "./Header.css";
import ProjectLogo from "../../assets/images/Logo/StayNest.png";
import { CircleUserRound, AlignJustify } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../search/Search";
import PropertyOptions from "../Body/PropertyOptions";
import { toast } from "react-toastify";

export default function Header({
  showSearch = true,
  showPropertyOptions = true,
  isAuthenticated,
  setIsAuthenticated,
}) {
  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropDownRef = useRef(null);

  const navigate = useNavigate();

  function handleNavigate(link) {
    navigate(`/${link}`);
  }

  function handleToggle() {
    setClicked((prevVal) => !prevVal);
  }

  function handleClickOutside(event) {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setClicked(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const dropdownBottom = isAuthenticated ? "-200%" : "-170%";

  const logoutNavigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    logoutNavigate("/login");
    toast.info("Logged out");
    setIsAuthenticated(false);
  };

  return (
    <header className={`${isScrolled ? "scrolled" : ""}`}>
      <div className="header-border">
        <div className="header-container">
          <div className="logo">
            <img
              src={ProjectLogo}
              alt="Logo of the project"
              onClick={() => handleNavigate("")}
            />
          </div>
          {showSearch && <SearchComponent />}
          <div className="nav-account-management">
            <span className="nest-your-home">Nest your home</span>
            <div className="user-profile-menu" onClick={handleToggle}>
              <AlignJustify className="user-profile-burger-logo" />
              <CircleUserRound className="user-logo" />
              <div
                className={`account-management-dropdown ${clicked ? "visible" : ""
                  }`}
                ref={dropDownRef}
                style={{ bottom: dropdownBottom }}
              >
                <div className="account-management-top account-management">
                  {isAuthenticated ? (
                    <>
                      <span className="account-item">Account</span>
                      <span className="account-item">Trips</span>
                      <span className="account-item" onClick={handleLogOut}>
                        Logout
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className="account-item"
                        onClick={() => handleNavigate("signup")}
                      >
                        Sign up
                      </span>
                      <span
                        className="account-item"
                        onClick={() => handleNavigate("login")}
                      >
                        Log in
                      </span>
                    </>
                  )}
                </div>

                <div className="account-management-bottom account-management">
                  <span className="account-item">Gift cards</span>
                  <span className="account-item">Nest your home</span>
                  <span className="account-item">Help Center</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPropertyOptions && (
        <div className="variety-icons">
          <PropertyOptions />
        </div>
      )}
    </header>
  );
}
