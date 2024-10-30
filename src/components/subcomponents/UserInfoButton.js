import React, { useState, useEffect, useRef } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
import './UserInfoButton.css';

function UserInfoButton() {
  const [isUserDropDownDisplayed, setIsUserDropDownDisplayed] = useState(false);
  const [isUserInfoActive, setIsUserInfoActive] = useState(false);
  const userInfoRef = useRef(null);

  const toggleUserInfo = () => {
    setIsUserInfoActive((prev) => !prev);
    setIsUserDropDownDisplayed((prev) => !prev);
  };

  // Close dropdown if user clicks outside
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
    <div>
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
        <div className="drop-down-user-options">
          <CgClose /> Logout
        </div>
      )}
    </div>
  );
}

export default UserInfoButton;
