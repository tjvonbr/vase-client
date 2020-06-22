/** @jsx jsx */

import React, { useState } from "react";
import { css, jsx } from '@emotion/core';
import axios from 'axios';
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
            <p>
              First Name
            </p>
            <input 
                type="text"
                name="first_name"
                onChange={handleInput}
                value={credentials.first_name}
              />
              <p>
              Last Name
              </p>
              <input 
                type="text"
                name="last_name"
                onChange={handleInput}
                value={credentials.last_name}
              />
          </form>
        </div>
      </div>
    </div>
  )
}

const formHeader = css`
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: 400;
`

const formInnerWrapper = css`
  position: absolute;
  top: 100px;
  left: 10%;
`

const formOuterWrapper = css`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100vh;
  width: 50vw;
  z-index: 2;
  background: #fff;
  border-left: 1px solid #f6f9fc;
`
export default NewRegister;
