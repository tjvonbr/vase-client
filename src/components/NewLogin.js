/** @jsx jsx */

import React, { useState } from "react";
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
import Button from './Button';
import LoginGrid from './LoginGrid';

function NewLogin(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  // Handle input
  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

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
    <div css={mainWrapper}>
      <Dimmer active={ isLoading ? true : false }>
        <Loader>Loading...</Loader>
      </Dimmer>
      <LoginGrid />
      <div css={outerWrapper}>
        <h2 css={containerh2}>Vase</h2>
        <div css={formOuterWrapper}>
          <div css={formInnerWrapper}>
            <form onSubmit={loginHandler}>
              <h3 css={formHeader}>Please sign in to your account</h3>
              <label htmlFor="username" css={labelStyles}>Username</label>
              <input
                id="usernameInput"
                css={inputStyles}
                type="text"
                name="username"
                onChange={handleInput}
                value={credentials.username}
              />
              <label htmlFor="password" css={labelStyles}>Password</label>
              <input
                id="passwordInput"
                css={inputStyles}
                type="password"
                name="password"
                onChange={handleInput}
                value={credentials.password}
              />
              <Button bgColor={"#9f84a3"}>
                Login
              </Button>
            </form>
            <p css={registerLink}>Still need an account? <a href="/register">Register</a>
            </p>
          </div>
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

// ELEMENT STYLES
const containerh2 = css`
  padding-bottom: 10px;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -2px;
  color: #2892f0;
  text-transform: lowercase;
  z-index: 2;
`

const formHeader = css`
  margin: 20px 0;
  margin-bottom: 40px;
  font-weight: 400;
`

const formInnerWrapper = css`
  width: 80%;
  height: 80%;
  margin-top: 20px;
`

const formOuterWrapper = css`
  width: 90%;
  height: 90%;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq[0]} {
    height: 100%;
    box-shadow: none;
  }
`

const inputStyles = css`
  display: block;
  font-size: 17px;
  width: 100%;
  height: 44px;
  margin-top: 5px;
  margin-bottom: 50px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  background: #fff;
  &:focus {
    outline-color: #2892f0;
  }
`

const labelStyles = css`
  font-size: 14px;
  font-weight: 600;
`

const mainWrapper = css`
  height: 100%;
  width: 100%;
`

const outerWrapper = css`
  width: 600px;
  height: 475px;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -10%);
  top: 200px;
  ${mq[0]} {
    top: 0;
    height: 100vh;
    transform: translate(-50%)
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`
const registerLink = css`
  margin-top: 20px;
  text-align: center;
  &:hover {
    color: black;
  }
`
export default NewLogin;
