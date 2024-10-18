import { FaHome, FaCog, FaHistory } from 'react-icons/fa'; // Importing icons
import "./SideNav.css"
import { FaCartShopping } from 'react-icons/fa6';

function SideNav() {
    return (
        <div className="side-nav-wrapper">
            <div className="logo-container">
                <img className='dcomply-image-styles' src='/images/DComply-logo.png' alt='Dcomply logo' />
                DComply
            </div>
            <div className="side-nav-option">
                <FaCog className='icon-styles'/>
                 My Modules
            </div>
            <div className="side-nav-option">
                <FaHome className='icon-styles'/>
                 My Workshops
            </div>
            <div className="side-nav-option">
                <FaHistory className='icon-styles'/>
                My History
            </div>
            <div className="side-nav-option">
                <FaCartShopping className='icon-styles'/>
                Shop Modules
            </div>
        </div>
    );
}

export default SideNav;