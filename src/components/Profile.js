/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import IssueCard from './IssueCard';
import profile_placeholder from '../images/profile_placeholder.png';

function Profile(props) {
    const [currentUser, setCurrentUser] = useState("");
    const [issues, setIssues] = useState([]);
    const [isEditingUser, setIsEditingUser] = useState(false);
    const [isEditingIssue, setIsEditingIssue] = useState(false);
    const [issueToUpdate, setIssueToUpdate] = useState({})
    let token = window.localStorage.getItem('token')
    let id = window.localStorage.getItem('id')

    // Importing theme colors
    const theme = useTheme();

    useEffect(() => {
      fetchUser();
      fetchIssues();
    }, [])

    // Fetches user data to populate profile card with proper information
    function fetchUser() {
      axios
        .get(`http://localhost:3000/users/${id}`, {
          headers: {
            Authorization: token
          }
        })
        .then(response => {
          setCurrentUser(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    };

    // Fetches the issues created by the logged user
    function fetchIssues() {
      axios
        .get(`http://localhost:3000/users/${id}/issues`, {
          headers: {
            Authorization: token
          }
        })
        .then(response => {
          setIssues(response.data);
        })
        .catch(err => {
          console.log(err)
        })
    };

    return (
      <>
        <NavBar />
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '50px'
          }}
        >
          <div
            css={{
              display: 'flex',
              marginTop: '50px'
            }}
          >
            <Card>
              <Image src={profile_placeholder} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{ currentUser.username }</Card.Header>
                <Card.Meta>{ currentUser.email }</Card.Meta>
                <Card.Description>
                  { currentUser.biography }
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                    Posted Issues: {currentUser.posted_issues}
                </a>
              </Card.Content>
            </Card>
          </div>

          <div
            css={{
              display: 'flex',
              marginTop: '20px'
            }}
          >
            <Link to="/addIssue">
              <Button 
                icon 
                labelPosition="left"
                color="facebook"
                size="huge"
              >
                <Icon name="add" />
                Add Issue
              </Button>
            </Link>

            <Button 
              icon 
              labelPosition="left"
              color="facebook"
              size="huge"
              >
              <Icon name="redo" />
              Edit Profile
            </Button>
          </div>

          <div
            css={{
              marginTop: '20px',
              backgroundColor: theme.colors.turquoise,
              width: '50%'
            }}
          >
            <h3
              css={{
                margin: '0px 10px',
                color: theme.colors.white
              }}
            >Issues created by { currentUser.username }:</h3>
          </div>
          {issues.map(issue => <IssueCard issue={issue} key={issue.id} /> )}
        </div>
      </>
    )
  }

  export default Profile;

