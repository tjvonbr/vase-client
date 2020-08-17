import React, { createContext, useContext, useState } from 'react';
import { IssueContext } from './IssueContext';
import { useHistory } from 'react-router-dom';

// setAuthState: authInfo => setAuthInfo(authInfo),

const AuthContext = createContext();
const { Provider } = AuthContext;

function AuthProvider({ children }) {
  const history = useHistory();
  const issueContext = useContext(IssueContext);

  const token = localStorage.getItem('token');
  const userInfo = localStorage.getItem('userInfo');
  const expiresAt = localStorage.getItem('expiresAt');

  const [authState, setAuthState] = useState({
    token,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  })
  
  function setAuthInfo({ expiresAt, token, userInfo }) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresAt', expiresAt);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setAuthState({
      token,
      userInfo,
      expiresAt
    })
  }

  function isAuthenticated() {
    if (!authState.token || !authState.expiresAt) {
      return false
    }
    return new Date().getTime() / 1000 < authState.expiresAt
  }

  function logout() {
    window.localStorage.clear()
    setAuthState({
      token: null,
      expiresAt: null,
      userInfo: {}
    });
    history.push('/login');
  }

  return (
    <Provider
      value={{
        authState,
        setAuthInfo,
        isAuthenticated,
        logout
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
