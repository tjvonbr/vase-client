import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
import RegisterGrid from '../components/RegisterGrid';
import RegisterPerks from '../components/RegisterPerks';
import { AuthContext } from '../context/AuthContext';

function Register(props) {
  const authContext = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '', 
    password : '', 
    username: '', 
    zipcode: ''
  });
  const [loading, setLoading] = useState(false)

  // Handle input
  function handleInput(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  async function registerHandler(event) {
    try {
      event.preventDefault()
      setLoading(true)
      const { data } = await axios
        .post('http://localhost:4000/auth/register', credentials)
      authContext.setAuthInfo(data)
      setLoading(false);
      const { id } = data.userInfo;
      props.history.push(`profile/${id}`);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Dimmer active={ loading ? true : false }>
        <Loader>Loading...</Loader>
      </Dimmer>
      <RegisterGrid>
        <RegisterPerks />
      </RegisterGrid>
      <div className='register-form-outerWrapper'>
        <div className='register-form-innerWrapper'>
          <form onSubmit={registerHandler}>
            <h1 className='register-form-header'>
              Create your Vase account
            </h1>
            {/* First Name */}
            <label className='register-form-label'>
              First Name
              <input
                className='register-form-input'
                type="text"
                name="firstName"
                onChange={handleInput}
                value={credentials.firstName}
              />
            </label>
            {/* Last Name */}
            <label className='register-form-label'>Last Name
              <input
                className='register-form-input'
                type="text"
                name="lastName"
                onChange={handleInput}
                value={credentials.lastName}
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

export default Register;
