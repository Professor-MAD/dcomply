import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';
import UserInfoButton from '../subcomponents/UserInfoButton';

function Header({ isMobile, toggleMobileMenu }) {
  const [isUserDropDownDisplayed, setIsUserDropDownDisplayed] = useState(false);
  const [isUserInfoActive, setIsUserInfoActive] = useState(false);
  const userInfoRef = useRef(null);

  const toggleUserInfo = () => {
    setIsUserInfoActive((prev) => !prev);
    setIsUserDropDownDisplayed((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userInfoRef.current && !userInfoRef.current.contains(event.target)) {
        setIsUserInfoActive(false);
        setIsUserDropDownDisplayed(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header-container">
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
          <UserInfoButton
            toggleUserInfo={toggleUserInfo}
            userInfoRef={userInfoRef}
            isUserInfoActive={isUserInfoActive}
            isUserDropDownDisplayed={isUserDropDownDisplayed}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
