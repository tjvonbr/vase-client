import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
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
import { IssueContext } from '../context/IssueContext';
import NavBar from '../components/NavBar';
import Upgrade from '../assets/bermuda/bermuda-upgrade.png';
import { useHistory } from 'react-router-dom';


function AddIssue(props) {
  const authContext = useContext(AuthContext);
  const issueContext = useContext(IssueContext);

  const history = useHistory();

  const { authState } = authContext;
  const { token } = authState;
  const { id, posted_issues, zipcode} = authState.userInfo;

  const [createIssue, setCreateIssue] = useState({ 
    zipcode: zipcode,
    user_id: id,
    title: '',
    description: '' 
  });
  const [isLoading, setIsLoading] = useState(false)

  // Functionality for increasing users # of posted issues +1
  function addIssuesPosted() {
    axios
      .put(`http://localhost:4000/users/${id}`, { posted_issues: posted_issues + 1 },{
        headers: {
          Authorization: token
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  };

  // Functionality for posting an issue
  async function addIssue(issueData) {
    try {
      const { data } = await axios.post('http://localhost:4000/issues',
        issueData, {
        headers: {
          Authorization: token
        }
      })
      issueContext.setIssueState(data)
      console.log(data)
      setIsLoading(false);
      history.push(`/profile/${id}`)
      } catch (error) {
        console.log(error)
      }
  }

  function handleChange(event) {
    const updatedIssues = { ...createIssue, [event.target.name]: event.target.value };
    setCreateIssue(updatedIssues);
  };

  function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    setCreateIssue({ title: "", description: "", zipcode: localStorage.getItem("zipcode"), user_id: localStorage.getItem("id")});
    addIssue(createIssue);
  };

  return (
    <>
    <NavBar />
    <Dimmer active={ isLoading ? true : false }>
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


