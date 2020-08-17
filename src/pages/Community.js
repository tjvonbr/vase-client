import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';
import CommunityIssues from '../components/CommunityIssues';
import NavBar from '../components/NavBar';
import NoIssues from '../components/NoIssues';

function Community() {
  const auth = useContext(AuthContext);
  const { token } = auth.authState;
  const { id, zipcode } = auth.authState.userInfo;
  
  const [communityIssues, setCommunityIssues] = useState([]);
  const [userVotes, setUserVotes] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect handling fetching community issues for provided zipcode
  useEffect(() => {
    async function fetchIssues() {
      try {
        const { data } = await axios
        .get(`http://localhost:4000/issues/zip/${zipcode}`, {
          headers: {
            Authorization: token
          }
        })
      console.log(data)
      setCommunityIssues(data);
      setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchIssues()
  }, []);


  // Need to create second useEffect for fetching userVotes
  useEffect(() => {
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

    fetchUserVotes()
  }, []);


  return (
    <div>
      <Dimmer active={ loading ? true : false }>
        <Loader>Loading...</Loader>
      </Dimmer>
      <NavBar /> 
      <div className='community-wrapper'>
        <h3>All community concerns posted in {zipcode}:</h3>
        <CommunityIssues issues={communityIssues} upvotes={userVotes} />
      </div>
    </div>
  )
}

export default Community;
