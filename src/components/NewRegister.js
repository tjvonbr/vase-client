/** @jsx jsx */

import React, { useState } from "react";
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import Button from './Button';
import RegisterGrid from './RegisterGrid';
import RegisterPerks from './RegisterPerks';

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
          const token = window.localStorage.setItem('token', response.datatoken);
          const id = window.localStorage.setItem('id', response.data.id);
          const zipcode = window.localStorage.setItem('zipcode', response.data.zipcode);
          setIsLoading(false);
          props.history.push(`/profile/${id}`);
        })
        .catch(err => {
          console.log(err);;
        });
  }

  return (
    <div>
      <RegisterGrid />
      <RegisterPerks />
      <div css={formOuterWrapper}>
        <div css={formInnerWrapper}>
          <form onSubmit={submitHandler}>
            <h1 css={formHeader}>Create your Vase account</h1>

            {/* First Name */}
            <p css={inputLabels}>First Name</p>
            <input
              css={inputStyles}
              type="text"
              name="first_name"
              onChange={handleInput}
              value={credentials.first_name}
            />
            {/* Last Name */}
            <p css={inputLabels}>Last Name</p>
            <input
              css={inputStyles}
              type="text"
              name="last_name"
              onChange={handleInput}
              value={credentials.last_name}
            />
            {/* Email */}
            <p css={inputLabels}>Email</p>
            <input
              css={inputStyles}
              type="email"
              name="email"
              onChange={handleInput}
              value={credentials.email}
            />
            {/* Username */}
            <p css={inputLabels}>Username</p>
            <input
              css={inputStyles}
              type="text"
              name="username"
              onChange={handleInput}
              value={credentials.username}
            />
            {/* Zipcode */}
            <p css={inputLabels}>Zipcode</p>
            <input
              css={inputStyles}
              type="text"
              name="zipcode"
              onChange={handleInput}
              value={credentials.zipcode}
            />
            {/* Password */}
            <p css={inputLabels}>Password</p>
            <input
              css={inputStyles}
              type="password"
              name="password"
              onChange={handleInput}
              value={credentials.password}
            />
          </form>
          <Button>Submit</Button>

          <p>Have an account? Sign in.</p>
        </div>
      </div>
    </div>
  )
}

const buttonStyles = css`
  background: blue;
`

const inputLabels = css`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2px;
`

const inputStyles = css`
  width: 100%;
  height: 30px;
  margin-bottom: 30px;
  border: 1px solid lightgray;
  border-radius: 4px;
  background: #fff;
  &:focus {
    border: 1px solid lightblue;
  }
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
  width: 400px;
`

const formOuterWrapper = css`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100vh;
  width: 50vw;
  background: #fff;
  border-left: 1px solid #f6f9fc;
`
export default NewRegister;
