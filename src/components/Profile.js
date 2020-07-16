/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import IssuesList from './IssuesList';
import profile_placeholder from '../assets/profile_placeholder.png';
import NewProfileCard from './NewProfileCard';

function Profile(props) {
    const [user, setUser] = useState("");
    const [issues, setIssues] = useState([]);
    let token = window.localStorage.getItem('token')
    let id = window.localStorage.getItem('id')

    useEffect(() => {
      fetchUser();
      fetchIssues();
    }, [])

    function fetchIssues() {
      axios
        .get(`http://localhost:4000/users/${id}/issues`, {
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

  // Fetches user data to populate profile card with proper information
  // Already wrote this in Profile component
  function fetchUser() {
    axios
      .get(`http://localhost:4000/users/${id}`, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  };

    return (
      <div className='profile-main-wrapper'>
        <NavBar user={user} />
          <section className='profile-card-wrapper'>
            <NewProfileCard user={user} />
            <div className='profile-card-btn-wrapper'>
              <button 
                className='profile-card-btn--addIssue'
                onClick={() => props.history.push({
                  pathname: '/addissue',
                  data: user
                })}
              >
                Add Issue
              </button>
            </div>
          </section>
          <section className='profile-user-issues-wrapper'>
            <IssuesList issues={issues} fetch={fetchIssues} />
          </section>
      </div>
    )
  }

  export default Profile;

