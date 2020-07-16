import React, { useState } from 'react';
import axios from 'axios';
import { 
  Button, 
  Form, 
  Grid, 
  Header, 
  Image, 
  Message, 
  Segment, 
  Dimmer, 
  Loader } 
from 'semantic-ui-react';
import NavBar from './NavBar';
import Logo from '../assets/bermuda/waiting-4.png';

// Send current user via props below
function ProfileEdit(props) {
  console.log("PROPS", props)
  const [editProfile, setEditProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    bio: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  let token = window.localStorage.getItem('token')
  let id = window.localStorage.getItem('id')

  // Handle submit
  function handleSubmit() {
    axios
      .put(`http://localhost:4000/users/${id}`, editProfile, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log(response.data);
        props.history.push(`/profile/${id}`)
      })
      .catch(error => {
        console.log(error);
      })
  };

  // Handle input
  function handleInput(e) {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavBar />
      <Dimmer active={ isLoading ? true : false }>
          <Loader>Loading</Loader>
        </Dimmer>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Image src={Logo} centered size="medium" />
          <Header as='h2' textAlign='center'>
            Edit your profile!
          </Header>
          <Form size='large' onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon='address card'
                iconPosition='left'
                type='text'
                name="first_name"
                value={editProfile.first_name}
                onChange={handleInput}
                placeholder="First Name"
              />
              <Form.Input
                fluid
                icon='address card outline'
                iconPosition='left'
                type='text'
                name="last_name"
                placeholder="Last Name"
                value={editProfile.last_name}
                onChange={handleInput}
              />
              {/* Check in to icon */}
              <Form.TextArea
                icon='mail'
                type='text'
                name="bio"
                placeholder='Bio -- please limit to 255 characters!'
                value={editProfile.bio}
                onChange={handleInput}
              />
              <Button type="submit" color='facebook' fluid size='large'>
                Save Changes
              </Button>
            </Segment>
          </Form>
          <Message>
              Cancel?
              <Button className="register-button"
              onClick={()=> props.history.goBack()}
              content='Go Back'
              positive
              size='medium' />
            </Message>
        </Grid.Column>
      </Grid>
    </>
  )
};

export default ProfileEdit;
