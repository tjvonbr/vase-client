import React, { useReducer } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from './userContext';
import UserReducer from './userReducer';
import {
  EDIT_USER,
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

  // Edit user
  function editUser(response) {
    setLoading();
    console.log('IN STATE', response.data);

    dispatch({
      type: EDIT_USER,
      payload: response.data
    })
  }

  // Fetch issues
  async function fetchIssues(issues) {
    dispatch({
      type: GET_ISSUES,
      payload: issues.data
    })
  }

  // Set loading
  function setLoading() {
    dispatch({ type: SET_LOADING })
  } 

  return <UserContext.Provider
    value={{
      user: state.user,
      issues: state.issues,
      loading: state.loading,
      editUser,
      fetchIssues,
      loginUser
    }}
  >
    {props.children}
  </UserContext.Provider>  
}

export default UserState;
