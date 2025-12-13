import React from 'react';
import { getInitials } from '../../utils/helper';
import Navbar from '../Navbar/Navbar';
import './ProfileInfo.css';

const ProfileInfo = ({ userInfo, onLogout }) => {


  
  return (
    <div className="profile-info-container">
      <div className="profile-initials">
        {getInitials(userInfo?.fullName || "")}
      </div>
      <div>
        {userInfo ? (
          <>
            <p className="profile-name">{userInfo.fullName}</p>
            <button className="logout-button" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <p className="profile-name">Welcome</p> // Handle the case when `userInfo` is null
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
