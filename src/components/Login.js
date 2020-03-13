import React, {useState} from 'react'
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
from 'semantic-ui-react'
import axios from 'axios';
import Welcome from '../images/bermuda/sign-in-4.png'

function Login(props) {
  const [inputData, setInputData] = useState({username: "", password: ""});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Still would like to checkout React Router's Redirect API to
  // use in place of props.history.push()

  // Input handler
  const handleInput = e => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  // Submission handler
  const loginHandler = e => {
    setIsLoading(true);
    e.preventDefault();
      axios
        .post("https://comake-be.herokuapp.com/auth/login", inputData)
        .then(response => {
          const { id, token } = response.data;
          window.localStorage.setItem('id', id);
          window.localStorage.setItem('token', token);
          setIsLoading(false);
          props.history.push(`/profile/${id}`)
        })
        .catch(err => {
          setErrorMessage("Uh Oh, Looks like that didn't work. Try Again!")
          setIsLoading(false)
        });
  }

  return (
    <>
      <Dimmer active={ isLoading ? true : false }>
        <Loader>Loading</Loader>
      </Dimmer>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src={Welcome} centered size='medium' />
          <Header as='h2' color='teal' textAlign='center'>
            Log in to your account
          </Header>
          <Header as="h4" color='green' textAlign='center'>{props.message}</Header>
          <Header as="h4" color='red' textAlign='center'>{errorMessage}</Header>
          <Form size='large' onSubmit={loginHandler}>
            <Segment stacked>
              <Form.Input
                fluid icon='user'
                name="username"
                value={inputData.username}
                onChange={handleInput}
                iconPosition='left'
                placeholder='Username'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name="password"
                value={inputData.password}
                onChange={handleInput}
              />
              <Button type="submit" color='facebook' fluid size='large'>
                Log in
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us?
            <Button className="register-button"
            onClick={()=> props.history.push('/register')}
            content='Sign Up'
            positive
            size='mini' />
          </Message>
        </Grid.Column>
      </Grid>
    </>
  )
};

export default Login
