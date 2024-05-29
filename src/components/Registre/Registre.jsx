import React, { useContext } from 'react'
import './Registre.scss'
import { UserContext } from '../../context/UserContext/UserState'
import { useNavigate } from 'react-router-dom'
import {notification} from 'antd'


const Registre = () => {
    const {userRegistre} = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        if(!name || !email || !password){
        notification.error({
            message: 'Something happened',
            description: 'Please make sure that you have filled in all the fields'
        })
        }else{
            try {
                await userRegistre({name, email, password})
                notification.success({
                    message: 'User created successfully',
                    description: 'Please sign in'
                })
                setTimeout(() =>{
                    navigate('/login');
                }, 3000);
            } catch (error) {
                notification.error({
                    message: 'Something happened',
                    notification: 'Please make sure that you have entered the data correctly'
                })
            }
        }

    }

  return (
    <div className='container-div'>
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className='form-group'>
            <label name="name">Username
                <input name='name' id='name' type="text" placeholder='Insert your name' required />
            </label>
        </div>
        <div className="form-group">
          <label name="email">Email
          <input name="email" id="email" type="text" placeholder='Insert your email'  required/>
          </label>
        </div>
        <div className="form-group">
          <label name="textarea">Password
          <input type="password" name='password' id='password' placeholder='Insert your password' required/>
          </label>
        </div>
        <button>Register</button>
        {/* <h4 className='validation-msg'>{message}</h4> */}
      </form>
    </div>
    </div>
  )
}

export default Registre