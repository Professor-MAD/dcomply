import { FaBars } from "react-icons/fa";
import "./Header.css";
import UserInfoButton from "../subcomponents/UserInfoButton";

function Header({ isMobile, toggleMobileMenu }) {
  return (
    <div className="header-container">
      <div className="left-side-header">
        <img
          className="dcomply-image-styles"
          src="/images/DComply-logo.png"
          alt="DComply logo"
        />
        <div className="dcomply-logo-text">DComply</div>
      </div>
      <div className="header-elements">
        {isMobile ? (
          <FaBars className="hamburger-icon" onClick={toggleMobileMenu} />
        ) : (
          <UserInfoButton />
        )}
      </div>
    </div>
  );
}

export default Header;
