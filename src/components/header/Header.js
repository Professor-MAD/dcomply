import { MdArrowDropDown } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import './Header.css';

function Header({ isMobile, toggleMobileMenu }) {
  return (
    <div className="header-container">
      {/*Desktop JSX here*/}
      <div className='left-side-header'>
        <img 
          className='dcomply-image-styles' 
          src='/images/DComply-logo.png' 
          alt='Dcomply logo' 
        />
        <div className='dcomply-logo-text'>
          DComply
        </div>
      </div>
      <div className="header-elements">
        {/*If the isMobile state is true, then display hamburger icon */}
        {/*If the user clicks on the hamburger, we call toggleMobileMenu function */}
        {isMobile && (
          <FaBars className="hamburger-icon" onClick={toggleMobileMenu} />
        )}
        {/*If we're not in mobile mode, then we display the user info section in the header */}
        {!isMobile && (
          <>
            <div className='user-info-container'>
              <img
                className="user-place-holder-image"
                src="/images/user-place-holder.png"
                alt="place-holder"
              />
              <div className="user-name">Michael Dioguardi</div>
              <MdArrowDropDown className="arrow-drop-down" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
