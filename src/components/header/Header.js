import React, { useState, useEffect, useRef } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import './Header.css';
import { CgClose } from 'react-icons/cg';

function Header({ isMobile, toggleMobileMenu }) {
  const [isUserDropDownDisplayed, setIsUserDropDownDisplayed] = useState(false);
  const [isUserInfoActive, setIsUserInfoActive] = useState(false);
  const userInfoRef = useRef(null);

  // Toggles the user-info-container active state and shows dropdown
  const toggleUserInfo = () => {
    setIsUserInfoActive((prev) => !prev);
    setIsUserDropDownDisplayed((prev) => !prev);
  };

  // Handle clicks outside the user-info-container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userInfoRef.current && !userInfoRef.current.contains(event.target)) {
        setIsUserInfoActive(false);
        setIsUserDropDownDisplayed(false);
      }
    };

    //Handle clicks anywhere outside of div
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header-container">
      {/*Desktop JSX here*/}
      <div className='left-side-header'>
        <img 
          className='dcomply-image-styles' 
          src='/images/DComply-logo.png' 
          alt='DComply logo' 
        />
        <div className='dcomply-logo-text'>
          DComply
        </div>
      </div>
      <div className="header-elements">
        {isMobile && (
          <FaBars className="hamburger-icon" onClick={toggleMobileMenu} />
        )}
        {!isMobile && (
          <>
            <div
              ref={userInfoRef}
              className={`user-info-container ${isUserInfoActive ? 'active' : ''}`}
              onClick={toggleUserInfo}
            >
              <img
                className="user-place-holder-image"
                src="/images/user-place-holder.png"
                alt="place-holder"
              />
              <div className="user-name">Michael Dioguardi</div>
              <MdArrowDropDown className="arrow-drop-down" />
            </div>
            {isUserDropDownDisplayed && (
              <div className='drop-down-user-options'>
                <CgClose /> Log out
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
