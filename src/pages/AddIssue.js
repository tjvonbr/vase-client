import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { postIssue } from '../utils/postIssue';
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
import NavBar from '../components/NavBar';
import Upgrade from '../assets/bermuda/bermuda-upgrade.png';
import { useHistory } from 'react-router-dom';


function AddIssue() {
  const auth = useContext(AuthContext);

  const history = useHistory();

  const { authState } = auth;
  const { token } = authState;
  const { id, postedIssues, zipcode} = authState.userInfo;

  const [newIssue, setNewIssue] = useState({ 
    zipcode: zipcode,
    user_id: id,
    title: '',
    description: '' 
  });
  const [loading, setLoading] = useState(false)

  // Functionality for increasing users # of posted issues +1
  function addIssuesPosted() {
    axios
      .put(`http://localhost:4000/users/${id}`, { postedIssues: postedIssues + 1 },{
        headers: {
          Authorization: token
        }
      })
      .catch(error => console.log(error))
  };

  function handleChange(event) {
    setNewIssue({...newIssue, [event.target.name]: event.target.value});
  };

  function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      postIssue(newIssue);
        // axios.post('http://localhost:4000/issues', newIssue, {
        //   headers: {
        //     Authorization: token
        //   }
        // })
      addIssuesPosted();
      setLoading(false);
      history.push(`/profile/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <NavBar />
    <Dimmer active={ loading ? true : false }>
        <Loader>Loading</Loader>
      </Dimmer>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
          <Image src={Upgrade} centered size="small" />
        <Header as='h2' textAlign='center'>
          Add a new issue!
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
            fluid
            icon='flag'
            iconPosition='left'
            type='text'
            name="title"
            value={newIssue.title}
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
              value={newIssue.description}
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
            onClick={() => history.push(`/profile/${id}`)}
            content='Go Back'
            positive
            size='medium' />
          </Message>
      </Grid.Column>
    </Grid>
</>
  )
}

export { AddIssue };