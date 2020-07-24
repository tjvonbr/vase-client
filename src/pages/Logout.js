/** @jsx jsx */

import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { jsx } from '@emotion/core';
import { 
  Button, 
  Grid, 
  Header, 
  Image }
from 'semantic-ui-react'
import NavBar from '../components/NavBar';
import comeback from '../assets/bermuda/bermuda-come-back-later.png';

function Logout() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <NavBar />
      <Grid 
        textAlign='center' 
        style={{ height: '100vh' }} 
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src={comeback} centered size='medium' />
          <Header as='h2' color='teal' textAlign='center'>
            Are you sure you want to leave?
          </Header>
          <Button 
            color='facebook' 
            size='huge'
            onClick={auth.logout}  
          >
            Yes, log me out!
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  )
};

export default Logout;
