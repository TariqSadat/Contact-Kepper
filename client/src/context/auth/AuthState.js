import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED ,
  AUTH_ERROR,
  LOGIN_SUCCESS ,
  LOGOUT ,
  CLEAR_ERRORS
} from '../types';

const AuthtState = props =>{
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load user

  //register user

  //login user
  //logout
  //clear errors


  return (
    <AuthContext.Provider value={{ 
      token: state.token,
      isAuthenticated:state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error
     }}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthtState;