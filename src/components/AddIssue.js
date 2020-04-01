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
import '../styles/addIssue.css';
import Banner from './Banner';
import Upgrade from '../images/bermuda/bermuda-upgrade.png';


function AddIssue(props) {
  const [createIssue, setCreateIssue] = useState({ 
    zipcode: localStorage.getItem("zipcode"), 
    user_id: localStorage.getItem("id"), 
    title: "",
    description: "" });
  const [isLoading, setIsLoading] = useState(false)

  let token = window.localStorage.getItem('token')
  let id = window.localStorage.getItem('id')

  const addPostedIssue = () => {
    axios
      .put(`http://localhost:3000/users/${id}`, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  };

  // Functionality for posting an issue
  function addIssue(data) {
    // Fetching token and user ID from local storage
    let token = window.localStorage.getItem('token')
    let id = window.localStorage.getItem('id');

    axios
      .post('http://localhost:3000/issues', data, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        props.history.push(`/profile/${id}`)
        setIsLoading(false);
      })
      .catch( err => console.log("OH NO AN ERROR HAPPENED", err))
  }

  function handleChange(event) {
    const updatedIssues = { ...createIssue, [event.target.name]: event.target.value };
    setCreateIssue(updatedIssues);
  };

  function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    console.log("createIssue", createIssue);
    setCreateIssue({ title: "", description: "", zipCode: localStorage.getItem("zipcode"), user_id: localStorage.getItem("id")});
    addIssue(createIssue);
  };

  return (
    <>
    <Banner />
    <Dimmer active={ isLoading ? true : false }>
        <Loader>Loading</Loader>
      </Dimmer>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
          <Image src={Upgrade} centered size="small" />
        <Header as='h2' textAlign='center'>
          Add a new Issue
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
            fluid
            icon='flag'
            iconPosition='left'
            type='text'
            name="title"
            value={createIssue.title}
            onChange={handleChange}

            placeholder='Issue Title'
            />

            <Form.Input
              fluid
              icon='address card'
              iconPosition='left'
              type='text'
              name="description"
              placeholder='Issue Description'
              value={createIssue.description}
              onChange={handleChange}
            />

            <Button type="submit" color='facebook' fluid size='large'>
              Add
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


}

export default AddIssue;


