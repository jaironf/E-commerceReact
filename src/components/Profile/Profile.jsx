import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin } from "antd";
import './Profile.scss'

const Profile = () => {
  const { getLoggedUserInfo, user, token } = useContext(UserContext);
  
  useEffect(() => {
    getLoggedUserInfo();
  }, [token]);

  if (!user) {
    return <Spin size="large" />;
  }
  return (
    <div className="profile-container">
    <div className="profile-card">
        <h2>Welcome</h2>
        <img className='profile-avatar' src="src/assets/AvatarPerfil.png" alt="" />
        <p className="heading-profile">{user.name}</p>
        <p>{user.email}</p>
        <p>SkullGaming</p>
    </div>
  </div>
  );
};

export default Profile;