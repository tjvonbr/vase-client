import React from 'react';
import NavBar from '../components/NavBar';
import IssuesList from '../components/IssuesList';
import ProfileCard from '../components/ProfileCard';
import { useHistory } from 'react-router-dom';

function Profile(props) {
  const history = useHistory();

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
          <IssuesList />
        </section>
    </div>
  )
}

export default Profile;
