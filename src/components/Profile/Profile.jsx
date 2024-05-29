import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import './Profile.scss'

const Profile = () => {
  const { getLoggedUserInfo, user, token } = useContext(UserContext);

  useEffect(() => {
    getLoggedUserInfo();
  }, [token]);

  if (!user) {
    return (
      <div className="loader">
        <div className="container">
          <div className="carousel">
            <div className="love"></div>
            <div className="love"></div>
            <div className="love"></div>
            <div className="love"></div>
            <div className="love"></div>
            <div className="love"></div>
            <div className="love"></div>
          </div>
        </div>
        <div className="container">
          <div className="carousel">
            <div className="death"></div>
            <div className="death"></div>
            <div className="death"></div>
            <div className="death"></div>
            <div className="death"></div>
            <div className="death"></div>
            <div className="death"></div>
          </div>
        </div>
        <div className="container">
          <div className="carousel">
            <div className="robots"></div>
            <div className="robots"></div>
            <div className="robots"></div>
            <div className="robots"></div>
            <div className="robots"></div>
            <div className="robots"></div>
            <div className="robots"></div>
          </div>
        </div>
      </div>


    )
  }
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Enjoy</h2>
        <img className='profile-avatar' src="src/assets/AvatarPerfil.png" alt="" />
        <p className="heading-profile">{user.name}</p>
        <p>{user.email}</p>
        <p>SkullGaming</p>
      </div>
    </div>
  );
};

export default Profile;