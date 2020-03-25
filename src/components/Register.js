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
import Banner from './Banner';
import axios from 'axios';
import Success from '../images/bermuda/bermuda-success.png'


function Register(props) {
  const [credentials, setCredentials] = useState({
    email: "", 
    password : "", 
    username: "", 
    zipCode: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle input
  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Submission handler
  const loginHandler = e => {
    e.preventDefault()
    setIsLoading(true)
      axios
        .post("http://localhost:3000/auth/register", credentials)
        .then(response => {
          console.log(response);
          props.history.push("/");
          setIsLoading(false);
        })

        .catch(err => {
          throw new Error("Oh no!  There was an issue registering you!  Please try again!", err);
        });
  }

  return (
    <div>
      <Banner />
      <Dimmer active={ isLoading ? true : false }>
          <Loader>Loading</Loader>
      </Dimmer>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Image src={Success} centered size='small' />
          <Header as='h2' color='teal' textAlign='center'>
            Create a new account
          </Header>
          <Header as="h4" color='green' textAlign='center'>{props.message}</Header>
          <Form size='massive' onSubmit={loginHandler}>
            <Segment stacked>
              <Form.Input
              fluid icon='mail'
              name="email"
              value={credentials.email}
              onChange={handleInput}
              iconPosition='left'
              placeholder='E-mail address'
              />

              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
                type='username'
                name="username"
                value={credentials.username}
                onChange={handleInput}
              />
              <Form.Input
                fluid
                icon='map'
                iconPosition='left'
                placeholder='Zipcode'
                type='zipCode'
                name="zipCode"
                value={credentials.zipCode}
                onChange={handleInput}
              />

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name="password"
                value={credentials.password}
                onChange={handleInput}
              />

              <Button type="submit" color='facebook' fluid size='large'>
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            Return to Login?
            <Button className="register-button"
            onClick={()=> props.history.push('/login')}
            content='Back'
            positive
            size='mini' />
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
};

export default Register
