import { MdArrowDropDown } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import './Header.css';

function Header({ isMobile, toggleMobileMenu }) {
  return (
    <div className="header-container">
      <img 
        className='dcomply-image-styles' 
        src='/images/DComply-logo.png' 
        alt='Dcomply logo' 
      />
      <div className='dcomply-logo-text'>
          DComply
      </div>
      <div className="header-elements">
        {isMobile && (
          <FaBars className="hamburger-icon" onClick={toggleMobileMenu} />
        )}
        {!isMobile && (
          <>
            <img
              className="user-place-holder-image"
              src="/images/user-place-holder.png"
              alt="place-holder"
            />
            <div className="user-name">Michael Dioguardi</div>
            <MdArrowDropDown className="arrow-drop-down" />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
