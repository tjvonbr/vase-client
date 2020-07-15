/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
import LoginGrid from './LoginGrid';

function NewLogin(props) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle input
  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  // Submission handler
  function loginHandler(e) {
    e.preventDefault();
    setIsLoading(true);
      axios
        .post("http://localhost:4000/auth/login", credentials)
        .then(response => {
          const { id, token, zipcode } = response.data;
          window.localStorage.setItem('id', id);
          window.localStorage.setItem('token', token);
          window.localStorage.setItem('zipcode', zipcode)
          setIsLoading(false);
          props.history.push(`/profile/${id}`)
        })
        .catch(err => {
          setIsLoading(false)
        });
  }

  return (
    <div className='login-main-container'>
      <Dimmer active={ isLoading ? true : false }>
        <Loader>Loading...</Loader>
      </Dimmer>
      <LoginGrid />
      <div className='login-form-wrapper'>
        <h2 className='login-form-wrapper-header'>Vase</h2>
        <div className='login-form-content-wrapper'>
          <div className='login-form-content'>
            <form onSubmit={loginHandler}>
              <h3 className='login-form-header'>Please sign in to your account</h3>
              <label htmlFor="username" className='login-form-label'>Username</label>
              <input
                id="usernameInput"
                className='login-form-input'
                type="text"
                name="username"
                onChange={handleInput}
                value={credentials.username}
              />
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
