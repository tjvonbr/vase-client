/** @jsx jsx */

import React, { useState } from "react";
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import { Formik } from 'formik';
import { Dimmer, Loader } from 'semantic-ui-react';
import Button from './Button';
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
          const id = response.data.id;
          
          // Set items three items to local storage
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
    <div css={mainWrapper}>
      <Dimmer active={ isLoading ? true : false }>
        <Loader>Loading...</Loader>
      </Dimmer>
      <RegisterGrid>
        <RegisterPerks />
      </RegisterGrid>
      <div css={formOuterWrapper}>
        <div css={formInnerWrapper}>
          <form onSubmit={submitHandler}>
            <h1 css={formHeader}>Create your Vase account</h1>
            {/* First Name */}
            <label htmlFor="firstNameInput" css={labelStyles}>First Name</label>
              <input
                id="firstNameInput"
                css={inputStyles}
                type="text"
                name="first_name"
                onChange={handleInput}
                value={credentials.first_name}
              />
            {/* Last Name */}
            <label htmlFor="lastNameInput" css={labelStyles}>Last name</label>
              <input
                id="lastNameInput"
                css={inputStyles}
                type="text"
                name="last_name"
                onChange={handleInput}
                value={credentials.last_name}
              />
            {/* Email */}
            <label htmlFor="emailInput" css={labelStyles}>Email</label>
              <input
                id="emailInput"
                css={inputStyles}
                type="email"
                name="email"
                onChange={handleInput}
                value={credentials.email}
              />
            {/* Username */}
            <label htmlFor="usernameInput" css={labelStyles}>Username</label>
              <input
                id="usernameInput"
                css={inputStyles}
                type="text"
                name="username"
                onChange={handleInput}
                value={credentials.username}
              />
            {/* Zipcode */}
            <label htmlFor="zipcodeInput" css={labelStyles}>Zipcode</label>
              <input
                id="zipcodeInput"
                css={inputStyles}
                type="text"
                name="zipcode"
                onChange={handleInput}
                value={credentials.zipcode}
              />
            {/* Password */}
            <label htmlFor="passwordInput" css={labelStyles}>Password</label>
              <input
                id="passwordInput"
                css={inputStyles}
                type="password"
                name="password"
                onChange={handleInput}
                value={credentials.password}
              />
            <Button css={buttonStyles}>Submit</Button>
          </form>
          <p css={signInLink}>Have an account? <a href="/login">Sign In</a></p>
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

const buttonStyles = css`

`

const inputStyles = css`
  width: 100%;
  height: 30px;
  margin-bottom: 30px;
  border: 1px solid lightgray;
  border-radius: 4px;
  background: #fff;
  &:focus {
    outline-color: #2892f0;
  }
`

const labelStyles = css`
  font-weight: 600;
`

const formHeader = css`
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: 400;
`

const formInnerWrapper = css`
  position: absolute;
  top: 100px;
  left: 10%;
  width: 50%;
  ${mq[2]} {
    width: 60%;
  }
  ${mq[1]} {
    width: 75%;
  }
`

const formOuterWrapper = css`
  position: absolute;
  top: 0;
  left: 50%;
  ${mq[1]} {
    left: 0px;
  }
  height: 100vh;
  width: 60%;
  ${mq[1]} {
    width: 100%;
  }
  background: #fff;
  border-left: 1px solid #f6f9fc;
`

const mainWrapper = css`
  display: flex;
`

const signInLink = css`
  margin-top: 20px;
  text-align: center;
`
export default NewRegister;
