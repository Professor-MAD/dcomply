import { FaHome, FaCog } from 'react-icons/fa'; // Importing icons
import "./SideNav.css"

function SideNav() {
    return (
        <div className="side-nav-wrapper">
            <div className="logo-container">
                DComply
            </div>
            <div className="side-nav-option">
                <FaHome className='icon-styles'/> My Modules
            </div>
            <div className="side-nav-option">
                <FaCog className='icon-styles'/> My Workshops
            </div>
            <div className="side-nav-option">
                My History
            </div>
            <div className="side-nav-option">
                Shop Modules
            </div>
        </div>
    );
}

export default SideNav;
