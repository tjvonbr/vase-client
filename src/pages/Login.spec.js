import React from 'react';
import axios from 'axios';
import Login from './Login'

jest.mock('axios');

describe('LoginHandler', () => {
  it("successfully returns user creds", async () => {
    const loginData = {
      id: 1,
      username: "tjvonbr",
      email: "tjvonbr@gmail.com",
      firstName: "Trevor",
      lastName: "Von Bruenchenhein"
		}
		
    axios.get.mockImplementation(() => Promise.resolve(loginData))
  })

  it("fails to return user creds", async () => {
    const errorMessage = "Network Error";
    axios.get.mockImplementation(() => 
      Promise.reject(new Error(errorMessage))
    )
  })
})

test('logs in user', () => {
	console.log(jest.spyOn(Login, 'loginHandler'));
})