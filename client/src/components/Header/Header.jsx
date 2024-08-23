import "./Header.css";
import ProjectLogo from "../../assets/images/Logo/StayNest.png";
import { CircleUserRound, AlignJustify } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../search/Search";
import PropertyOptions from "../Body/PropertyOptions";

export default function Header({
  showSearch = true,
  showPropertyOptions = true,
}) {
  const [clicked, setClicked] = useState(false);
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

  return (
    <header>
      <div className="header-border">
        <div className="header-container">
          <div className="logo">
            <img src={ProjectLogo} alt="Logo of the project" />
          </div>
          {showSearch && <SearchComponent />}
          <div className="nav-account-management">
            <span className="nest-your-home">Nest your home</span>
            <div className="user-profile-menu" onClick={handleToggle}>
              <AlignJustify className="user-profile-burger-logo" />
              <CircleUserRound className="user-logo" />
              <div
                className={`account-management-dropdown ${
                  clicked ? "visible" : ""
                }`}
                ref={dropDownRef}
              >
                <div className="account-management-top account-management">
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
