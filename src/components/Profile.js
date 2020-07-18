

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import IssuesList from './IssuesList';
import NewProfileCard from './NewProfileCard';
import UserContext from '../context/user/userContext';

function Profile(props) {
  const userContext = useContext(UserContext);

  const [issues, setIssues] = useState([]);
  let token = window.localStorage.getItem('token')
  let id = window.localStorage.getItem('id')

    useEffect(() => {
      userContext.fetchUser()
      // fetchIssues();
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
        console.log("DATA FROM FETCHUSER", response.data)
      })
      .catch(error => {
        console.log(error);
      })
  };

    return (
      <div className='profile-main-wrapper'>
        <NavBar />
          <section className='profile-card-wrapper'>
            <NewProfileCard />
            <div className='profile-card-btn-wrapper'>
              <button 
                className='profile-card-btn--addIssue'
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

