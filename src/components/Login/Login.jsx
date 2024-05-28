import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import './Login.scss'


const Login = () => {
    const {login} = useContext(UserContext)
    // const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  
  const navigate = useNavigate()
    const onSubmit = (values) => {
      login(values)
      navigate("/profile")
      notification.success({
        message: 'Welcome'
      });
    };

  return (
    <div className='container-div'>
    <div className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <label name="email">Email
          <input name="email" id="email" type="text" placeholder='Insert your email' required/>
          </label>
        </div>
        <div className="form-group">
          <label name="textarea">Password
          <input type="password" name='password' id='password' placeholder='Insert your password' required/>
          </label>
        </div>
        <button>Login</button>
        {/* <h4 className='validation-msg'>{message}</h4> */}
      </form>
    </div>
    </div>
  )
  
}

export default Login