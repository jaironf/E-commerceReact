import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import './Login.scss'
import { notification } from 'antd';


const Login = () => {
  const { login } = useContext(UserContext)
  // const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

  const [data, setdata] = useState({
    email: "",
    password: ""
  })

  const getData = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    })

  }

  const navigate = useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login(data)
      if (res.data) {
        navigate("/profile")
      }
    } catch (error) {
      console.error(error)
    }
  };

//MIRAR COMO HACER QUE FUNCIONE ESTAS NOTIFICACIONES

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//   if(!email || !password){
//     notification.error({
//       message: 'Login failed',
//       description: 'Invalid email or password'
//     });
//   }else{
//     try {
//       notification.success({
//         message: 'Successfully logged in',
//         description: 'Welcome back'
//       })
//     } catch (error) {
//       notification.error({
//         message: 'Login failed',
//         description: 'Invalid email or password'
//       })
//     }
//   }
// }

  return (
    <div className='container-div'>
      <div className="form-container">
        <h2>Login</h2>
        <form className="form">
          <div className="form-group">
            <label name="email">Email
              <input name="email" id="email" type="text" placeholder='Insert your email' onChange={getData} required />
            </label>
          </div>
          <div className="form-group">
            <label name="textarea">Password
              <input type="password" name='password' id='password' placeholder='Insert your password' onChange={getData} required />
            </label>
          </div>
          <button onClick={onSubmit}>Login</button>
          {/* <h4 className='validation-msg'>{message}</h4> */}
        </form>
      </div>
    </div>
  )

}

export default Login