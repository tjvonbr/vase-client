import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import IssuesList from '../components/IssuesList';
import ProfileCard from '../components/ProfileCard';

function Profile(props) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {});
  const [issues, setIssues] = useState(
    JSON.parse(localStorage.getItem('issues')) || []);

  return (
    <div className='profile-main-wrapper'>
      <NavBar />
      <section className='profile-card-wrapper'>
          <ProfileCard />
          <div className='profile-card-btn-wrapper'>
            <button 
              className='profile-card-btn--addIssue'
              onClick={() => props.history.push('/addissue')}  
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
