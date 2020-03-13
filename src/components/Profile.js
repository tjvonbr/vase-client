import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Banner from './Banner';
import { Card, Icon, Image } from 'semantic-ui-react'
import profile_placeholder from '../images/profile_placeholder.png';

function Profile(props) {
    const [currentUser, setCurrentUser] = useState("")
    const [isEditingUser, setIsEditingUser] = useState(false);
    const [isEditingIssue, setIsEditingIssue] = useState(false);
    const [issueToUpdate, setIssueToUpdate] = useState({})
    let token = window.localStorage.getItem('token')
    let userId = window.localStorage.getItem('id')

    function fetchIssues() {
      axios
        .get(`https://comake-be.herokuapp.com/users/${userId}/issues`, {
          headers: {
            Authorization: token
          }
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err)
        })
    };

    const handleEdit = e => {
      setIsEditingUser(!isEditingUser);
    };

    const handleEditIssue = id => {
      let thisIssue = currentUser.issues.filter( issue => issue.id === id);
      setIssueToUpdate(...thisIssue)
      setIsEditingIssue(!isEditingIssue)
    };

    return (
      <>
        <Banner />
        <Card>
          <Image src={profile_placeholder} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </>
    )
  }

  export default Profile;

