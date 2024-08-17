import SearchComponent from "../search/Search";
import "./Header.css";
import ProjectLogo from "../../assets/images/Logo/StayNest.png";
import { CircleUserRound, AlignJustify } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [clicked, setClicked] = useState(null);

  function handleToggle() {
    setClicked((prevVal) => !prevVal);
  }

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={ProjectLogo} alt="Logo of the project" />
        </div>
        <SearchComponent />
        <div className="nav-account-management">
          <span className="nest-your-home">Nest your home</span>
          <div className="user-profile-menu" onClick={handleToggle}>
            <AlignJustify className="user-profile-burger-logo" />
            <CircleUserRound className="user-logo" />
            <div
              className={`account-management-dropdown ${
                clicked ? "visible" : ""
              }`}
            >
              <div className="account-management-top account-management">
                <span className="account-item"> Sign up</span>
                <span className="account-item">Log in</span>
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
    </header>
  );
}
