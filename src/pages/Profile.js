import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import NavBar from '../components/NavBar';
import IssuesList from '../components/IssuesList';
import ProfileCard from '../components/ProfileCard';
import { useHistory } from 'react-router-dom';

function Profile() {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { token } = auth.authState;
  const { id } = auth.authState.userInfo;

  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${id}/issues`,
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(response => {
        setIssues(response.data.issues);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className='profile-main-wrapper'>
      <NavBar />
      <section className='profile-card-wrapper'>
          <ProfileCard />
          <div className='profile-card-btn-wrapper'>
            <button 
              className='profile-card-btn--addIssue'
              onClick={() => history.push('/addissue')}  
            >
              Add Issue
            </button>
          </div>
        </section>
        <section className='profile-user-issues-wrapper'>
          <IssuesList issues={issues} />
        </section>
    </div>
  )
}

export default Profile;
