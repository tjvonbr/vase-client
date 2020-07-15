/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { 
  Button, 
  Grid, 
  Header, 
  Image }
from 'semantic-ui-react'
import NavBar from './NavBar';
import comeback from '../assets/bermuda/bermuda-come-back-later.png';

function Logout(props) {
  const [loggedIn, setLoggedIn] = useState(true)


  function authUser() {
    const liveToken = window.localStorage.getItem('token');
    if (!liveToken) {
      setLoggedIn(false)
    }
  }

  function logoutUser() {
    window.localStorage.clear();
    setLoggedIn(false);
    props.history.push('/login')
  }

  return (
    <div>
      <NavBar />
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src={comeback} centered size='medium' />
          <Header as='h2' color='teal' textAlign='center'>
            Are you sure you want to leave?
          </Header>
          <Button 
            color='facebook' 
            size='huge'
            onClick={logoutUser}  
          >
            Yes, log me out!
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  )
};

export default Logout;
