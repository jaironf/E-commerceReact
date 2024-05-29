import axios from "axios";
import UserReducer from './UserReducer'
import { createContext, useReducer } from "react";


const token = localStorage.getItem('token') || '';

const initialState = {
    token: '',
    user: ''
}

const API_URL = 'http://localhost:3001/users';

export const UserContext = createContext(initialState);


export const UserProvider = ({children}) =>{
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const userRegistre = async () => {
      try {
        const res = await axios.post(API_URL, user)
        dispatch({
          type:'REGISTRE',
          payload: res.data,
        })
        if(res.data){
          localStorage.setItem('user', res.data.user)
        }
      } catch (error) {
        console.error(error);
      }
    }


    const login = async (user) => {
      console.log(user);
        try {
            const res = await axios.post(API_URL + '/login', user);
            dispatch({
                type: 'LOGIN',
                payload: res.data,
            });
           if(res.data){
            localStorage.setItem('token', res.data.token)
           } 
        } catch (error) {
            console.error(error);
        }
    };

    const getLoggedUserInfo = async () => {
        let token = localStorage.getItem("token");
        try {
          const res = await axios.get(API_URL + "/user", {
            headers: {
              Authorization: token,
            },
          });
          dispatch({
            type:"GET_USER_INFO",
            payload:res.data
          })
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <UserContext.Provider
          value={{
            token: state.token,
            user: state.user,
            userRegistre,
            login,
            getLoggedUserInfo,
          }}
        >
          {children}
        </UserContext.Provider>
      );
}