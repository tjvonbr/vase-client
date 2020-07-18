import React, { useReducer } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from './userContext';
import UserReducer from './userReducer';
import {
  GET_ISSUES,
  GET_USER,
  LOGIN_USER,
  SET_LOADING
} from '../types';

function UserState(props) {
  const history = useHistory();

  const initialState = {
    user: {},
    issues: [],
    loading: false
  }

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Stores user data in Context
  async function loginUser(response) {
    setLoading();

    dispatch({
      type: LOGIN_USER,
      payload: response.data
    })
  }

  // Fetch user
  async function fetchUser() {
    const id = initialState.user.id;
    setLoading();
    const response = await axios
      .get(`http://localhost:4000/users/${id}/issues`)
    
    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }

  // Get issues

  // Set loading
  function setLoading() {
    dispatch({ type: SET_LOADING })
  } 

  return <UserContext.Provider
    value={{
      user: state.user,
      issues: state.issues,
      loading: state.loading,
      loginUser,
      fetchUser
    }}
  >
    {props.children}
  </UserContext.Provider>  
}

export default UserState;
