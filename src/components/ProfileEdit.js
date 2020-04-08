import React, { useEffect, useState } from 'react';
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
import '../styles/addIssue.css';
import NavBar from './NavBar';
import Logo from '../images/bermuda/waiting-4.png';


// Send current user via props below
const ProfileEdit = props => {
  const [editProfile, setEditProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  let token = window.localStorage.getItem('token')
  let id = window.localStorage.getItem('id')

  // Handle submit
  const handleSubmit = () => {
    axios
      .put(`http://localhost:3000/users/${id}`, editProfile, {
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
            name="firstName"
            value={editProfile.firstName}
            onChange={handleInput}
            placeholder={props.location.state.user.first_name}
          />
          <Form.Input
            fluid
            icon='address card outline'
            iconPosition='left'
            type='text'
            name="lastName"
            placeholder={props.location.state.user.last_name}
            value={editProfile.lastName}
            onChange={handleInput}
          />
          {/* Check in to icon */}
          <Form.TextArea
            icon='mail'
            type='text'
            name="bio"
            placeholder={props.location.state.user.bio ? 
              props.location.state.user.bio : 
              'Bio -- please limit to 255 characters!'}
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
