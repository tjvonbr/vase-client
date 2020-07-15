/** @jsx jsx */

import React, { useState } from "react";
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import { Formik } from 'formik';
import { Dimmer, Loader } from 'semantic-ui-react';
import RegisterGrid from './RegisterGrid';
import RegisterPerks from "./RegisterPerks";

function NewRegister(props) {
  // Check to see if there is an easier way to initialize this
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "", 
    password : "", 
    username: "", 
    zipcode: ""
  });
  const [isLoading, setIsLoading] = useState(false)

  // Handle input
  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  function submitHandler(e) {
    e.preventDefault()
    setIsLoading(true)
      axios
        .post('http://localhost:4000/auth/register', credentials)
        .then(response => {
          const { id } = response.data 
          window.localStorage.setItem('token', response.data.token);
          window.localStorage.setItem('id', response.data.id);
          window.localStorage.setItem('zipcode', response.data.zipcode);
          setIsLoading(false);
          props.history.push(`/profile/${id}`);
        })
        .catch(err => {
          console.log(err);;
        });
  }

  return (
    <div>
      <Dimmer active={ isLoading ? true : false }>
        <Loader>Loading...</Loader>
      </Dimmer>
      <RegisterGrid>
        <RegisterPerks />
      </RegisterGrid>
      <div className='register-form-outerWrapper'>
        <div className='register-form-innerWrapper'>
          <form onSubmit={submitHandler}>
            <h1 className='register-form-header'>
              Create your Vase account
            </h1>
            {/* First Name */}
            <label className='register-form-label'>
              First Name
              <input
                className='register-form-input'
                type="text"
                name="first_name"
                onChange={handleInput}
                value={credentials.first_name}
              />
            </label>
            {/* Last Name */}
            <label className='register-form-label'>Last Name
              <input
                className='register-form-input'
                type="text"
                name="last_name"
                onChange={handleInput}
                value={credentials.last_name}
              />
            </label>
            {/* Email */}
            <label className='register-form-label'>
              Email
              <input
                className='register-form-input'
                type="email"
                name="email"
                onChange={handleInput}
                value={credentials.email}
              />
            </label>
            {/* Username */}
            <label className='register-form-label'>
              Username
              <input
                className='register-form-input'
                type="text"
                name="username"
                onChange={handleInput}
                value={credentials.username}
              />
            </label>
            {/* Zipcode */}
            <label className='register-form-label'>Zipcode
              <input
                className='register-form-input'
                type="text"
                name="zipcode"
                onChange={handleInput}
                value={credentials.zipcode}
              />
            </label>
            {/* Password */}
            <label className='register-form-label'>
              Password
              <input
                className='register-form-input'
                type="password"
                name="password"
                onChange={handleInput}
                value={credentials.password}
              />
            </label>
            <button className='register-form-submit-btn'>Submit</button>
          </form>
            <p className='register-form-link-p'>
              Have an account?<a className='register-form-link-a' href='/login'> Sign In</a>
            </p>

        </div>
      </div>
    </div>
  )
}

// MQ BREAKPOINTS
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
	bp => `@media (max-width: ${bp}px)`
);

const signInLink = css`
  margin: 20px 0;
  text-align: center;
  &:hover {
    color: black;
  }
`
export default NewRegister;
