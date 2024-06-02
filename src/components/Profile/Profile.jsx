import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import './Profile.scss'
import { Collapse } from "antd";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const { getLoggedUserInfo, user, token} = useContext(UserContext);
  const navigate = useNavigate()
  useEffect(() => {
    getLoggedUserInfo();
  }, [token]);

  const orderInfo = user?.Orders?.map((order) => ({
    key: order.id,
    label: (
      <div className="label-container">
        <span>Order id: {order.id}</span>
        <span>Items: {order.items.length}</span>
        <span>Price: {order.totalPrice.toFixed(2)} €</span>
      </div>
    ),
    content: (
      <div className="order-details">
        {order.items.map(item => (
          <div key={item.id} className="order-item">
            <span>{item.name} - {item.quantity} x {item.price.toFixed(2)} €</span>
          </div>
        ))}
      </div>
    )
  })) || [];


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
    <>
    <div className="profile-container">
      <div className="profile-card">
       <h2>Enjoy</h2>
        <img className='profile-avatar' src="src/assets/AvatarPerfil.png" alt="" />
        <p className="heading-profile">{user.name}</p>
        <p>{user.email}</p>
        <p>SkullGaming</p>
      </div>
    </div>
    <div className="order-container">
        <h2>Your Orders</h2>
        <Collapse>
          {orderInfo.map(order => (
            <Panel header={order.label} key={order.key}>
              {order.content}
            </Panel>
          ))}
        </Collapse>
      </div>
    </>
  );
};

export default Profile;