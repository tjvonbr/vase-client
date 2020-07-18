import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
import LoginGrid from './LoginGrid';
import UserContext from '../context/user/userContext';

function NewLogin(props) {
  const userContext = useContext(UserContext);
  console.log(userContext)

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  // Handle input
  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  // Login user
  async function onSubmit(e) {
    e.preventDefault();
    const response = await axios
      .post("http://localhost:4000/auth/login", credentials);
    let { id } = await response.data;
    userContext.loginUser(response)
    props.history.push(`/profile/${id}`);
  }

  return (
    <div className='login-main-container'>
      <Dimmer active={ userContext.loading ? true : false }>
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
