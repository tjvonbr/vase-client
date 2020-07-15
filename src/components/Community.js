/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { jsx } from '@emotion/core';
import axios from 'axios';
import CommunityIssues from './CommunityIssues';
import MostPopular from './MostPopular';
import NavBar from './NavBar';
import NoIssues from './NoIssues';

function Community() {
  const [communityIssues, setCommunityIssues] = useState([]);
  const [userVotes, setUserVotes] = useState([])
  const [mostPopular, setMostPopular] = useState({});

  useEffect(() => {
    fetchUserVotes();
    fetchCommunityIssues();
  }, [userVotes]);

  const token = window.localStorage.getItem('token');
  const zip = window.localStorage.getItem('zipcode');
  const id = window.localStorage.getItem('id')

  function fetchCommunityIssues() {
    axios
      .get(`http://localhost:4000/issues/zip/${zip}`, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        setCommunityIssues(response.data);
        setMostPopular(response.data.reduce((prev, current) => {
          return (prev.upvotes > current.upvotes) ? prev : current
        }));
      })
      .catch(error => {
        console.log(error);
      })
  };

  function fetchUserVotes() {
    axios
      .get(`http://localhost:4000/users/${id}/upvotes`, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        setUserVotes(response.data)
      })
      .catch(error => console.log(error))
  }

  if (communityIssues < 1) {
    return <NoIssues />
  } else {
    return (
      <div>
        <NavBar /> 
        <div
          css={{
            margin: '20px 0px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3>Top concern in {zip}:</h3>
          <MostPopular issue={mostPopular} />
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3>All community concerns posted in {zip}:</h3>
          <CommunityIssues issues={communityIssues} upvotes={userVotes} />
        </div>
      </div>
    )
  }
};

export default Community;
