import axios from "axios";
import UserReducer from './UserReducer'
import { createContext, useReducer } from "react";


const token = localStorage.getItem('token') || '';

const initialState = {
    token: token,
    user: null
}

const API_URL = 'http://localhost:3001/users';

export const UserContext = createContext(initialState, UserReducer);


export const UserProvider = ({children}) =>{
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const userRegistre = async (user) => {
        const res = await axios.post(API_URL, user)     
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
           return res
        } catch (error) {
            console.error(error);
        }
    };


    const getLoggedUserInfo = async () => {
        let token = localStorage.getItem("token");
        try {
          const res = await axios.get(API_URL + '/user', {
            headers: {
              Authorization: token,
            },
          });
          dispatch({
            type:"GET_USER_INFO",
            payload: res.data
          })
        } catch (error) {
          console.error(error);
        }
      };

      const logout = async () => {
        try {
          let token = localStorage.getItem('token');
          const res = await axios.delete(API_URL + '/logout', {
            headers: {
              Authorization: token,
            },
          });
          dispatch({ 
            type: 'LOGOUT',
            payload: res.data
          });
          localStorage.clear();
        } catch (error) {
          console.error('Error during logout:', error);
        }
      };

      // const logout = async () =>{
      //   let token = localStorage.getItem('token');
      //   const res = await axios.delete(API_URL + '/logout', {
      //     headers: {
      //       Authorization: token,
      //     }
      //   });
      //   dispatch({
      //     type: 'LOGOUT',
      //     // payload: res.data,
      //   });
      //   if(res.data){
      //     localStorage.clear()
      //   }
      // };


    return (
        <UserContext.Provider
          value={{
            token: state.token,
            user: state.user,
            userRegistre,
            login,
            getLoggedUserInfo,
            logout,
          }}
        >
          {children}
        </UserContext.Provider>
      );
}