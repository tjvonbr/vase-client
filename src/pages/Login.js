import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
import LoginGrid from '../components/LoginGrid';
import { AuthContext } from '../context/AuthContext';

function Login(props) {
  const authContext = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  // Handle input
  function handleInput(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  // Login user
  async function loginHandler(event) {
    try {
      event.preventDefault();
      setLoading(true);
      // Handles the login and storage of auth credentials
      const { data } = await axios
        .post('http://localhost:4000/auth/login', credentials)
      authContext.setAuthInfo(data);
      const { id } = data.userInfo;
      setLoading(false);
      props.history.push(`profile/${id}`);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login-main-container'>
      <Dimmer active={ loading ? true : false }>
        <Loader>Loading...</Loader>
      </Dimmer>
      <LoginGrid />
      <div className='login-form-wrapper'>
        <a 
          href="/"
          className='login-form-wrapper-header'
        >
          Vase
        </a>
        <div className='login-form-content-wrapper'>
          <div className='login-form-content'>
            <form onSubmit={loginHandler}>
              <h3 className='login-form-header'>
                Please sign in to your account
              </h3>
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

export default Login;
