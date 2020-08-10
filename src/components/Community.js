/** @jsx jsx */

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Dimmer, Loader } from 'semantic-ui-react';
import { jsx } from '@emotion/core';
import axios from 'axios';
import CommunityIssues from './CommunityIssues';
import NavBar from './NavBar';
import NoIssues from './NoIssues';

function Community() {
  const auth = useContext(AuthContext);
  const { token } = auth.authState;
  const { id, zipcode } = auth.authState.userInfo;
  
  const [communityIssues, setCommunityIssues] = useState([]);
  const [userVotes, setUserVotes] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommunityIssues();
    fetchUserVotes();
  }, []);

  async function fetchCommunityIssues() {
    try {
    const { data } = await axios
      .get(`http://localhost:4000/issues/zip/${zipcode}`, {
        headers: {
          Authorization: token
        }
      })
      setCommunityIssues(data);
      setLoading(false);
      } catch (error) {
        console.log(error)
      }
  };

  async function fetchUserVotes() {
    try {
      const { data } = await axios
      .get(`http://localhost:4000/users/${id}/upvotes`, {
        headers: {
          Authorization: token
        }
      })
      setUserVotes(data)
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Dimmer active={ loading ? true : false }>
        <Loader>Loading...</Loader>
      </Dimmer>
      <NavBar /> 
      <div
        css={{
          margin: '50px 0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3>All community concerns posted in {zipcode}:</h3>
        <CommunityIssues issues={communityIssues} upvotes={userVotes} />
      </div>
    </div>
  )
}

export default Community;
