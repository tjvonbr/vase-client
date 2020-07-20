import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
import LoginGrid from './LoginGrid';
import UserContext from '../context/user/userContext';

function NewLogin(props) {
  const userContext = useContext(UserContext);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(userContext.loading);

  // Handle input
  function handleInput(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  // Login user
  async function onSubmit(event) {
    event.preventDefault();
    // Wait for request to authenticate user
    const user = await axios
      .post("http://localhost:4000/auth/login", credentials);
    // Store user's creds in Context
    userContext.loginUser(user)
    // Destructure user's ID so we can redirect upon login
    let { id, token } = await user.data;
    // Wait for request to fetch issues
    const issues = await axios
      .get(`http://localhost:4000/users/${id}/issues`,
        {
          headers: {
            Authorization: token
          }
        })
    // Store user's issues in Context
    userContext.fetchIssues(issues)
    // Direct to user's profile
    props.history.push(`/profile/${id}`);
  }

  return (
    <div className='login-main-container'>
      <Dimmer active={ loading ? true : false }>
        <Loader>Loading...</Loader>
      </Dimmer>
      <LoginGrid />
      <div className='login-form-wrapper'>
        <h2 className='login-form-wrapper-header'>Vase</h2>
        <div className='login-form-content-wrapper'>
          <div className='login-form-content'>
            <form onSubmit={onSubmit}>
              <h3 className='login-form-header'>Please sign in to your account</h3>
              <label className='login-form-label'>
                Username
                <input
                  id="usernameInput"
                  className='login-form-input'
                  type="text"
                  name="username"
                  onChange={handleInput}
                  value={credentials.username}
                />
              </label>
              <label htmlFor="password" className='login-form-label'>Password</label>
              <input
                id="passwordInput"
                className='login-form-input'
                type="password"
                name="password"
                onChange={handleInput}
                value={credentials.password} />
              <button id="btn-login">
                Login
              </button>
            </form>
            <p 
              className='login-form-register-link'>
                Still need an account? 
              <a href="/register"> Register </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLogin;
