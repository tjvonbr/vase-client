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
  Loader,
  TextArea } 
from 'semantic-ui-react';
import '../styles/addIssue.css';
import NavBar from './NavBar';
import Logo from '../images/bermuda/waiting-4.png';

const ProfileEdit = props => {
  const [editProfile, setEditProfile] = useState({
    firstName: "",
    lastName: "",
    bio: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    console.log("SUBMITTED");
  }

  const handleChange = event => {
    const updated = { ...editProfile, [event.target.name]: event.target.value };
    setEditProfile(updated);
    console.log(updated)
  }

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
            onChange={handleChange}
            placeholder='First name'
          />
          <Form.Input
            fluid
            icon='address card outline'
            iconPosition='left'
            type='text'
            name="lastName"
            placeholder='Last Name'
            value={editProfile.lastName}
            onChange={handleChange}
          />
          <Form.TextArea
            fluid
            icon='mail'
            iconPosition='left'
            type='text'
            name="bio"
            placeholder='Bio -- please limit to 255 characters!'
            value={editProfile.bio}
            onChange={handleChange}
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
