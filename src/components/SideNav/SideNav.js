import { FaHome, FaCog, FaHistory } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./SideNav.css";

function SideNav() {
  return (
    <div className="side-nav-wrapper">
      <div className="side-nav-option">
        <FaCog className="icon-styles" />
        My Modules
      </div>
      <div className="side-nav-option">
        <FaHome className="icon-styles" />
        My Workshops
      </div>
      <div className="side-nav-option">
        <FaHistory className="icon-styles" />
        My History
      </div>
      <div className="side-nav-option">
        <FaCartShopping className="icon-styles" />
        Shop Modules
      </div>
    </div>
  );
}

export default SideNav;
