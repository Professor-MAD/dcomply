import React from 'react';
import { CgClose } from 'react-icons/cg';
import { MdArrowDropDown } from 'react-icons/md'; // Make sure you import MdArrowDropDown properly
import './UserInfoButton.css'; // Import your CSS for styling

function UserInfoButton({ userInfoRef, isUserInfoActive, isUserDropDownDisplayed, toggleUserInfo }) {
    return (
        <>
            <div
                ref={userInfoRef}
                className={`user-info-container ${isUserInfoActive ? 'active' : ''}`}
                onClick={toggleUserInfo} // Use the function as the onClick handler
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
    );
}

export default UserInfoButton;
