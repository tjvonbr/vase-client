import React, { useContext } from 'react';
import NavBar from './NavBar';
import IssuesList from './IssuesList';
import NewProfileCard from './NewProfileCard';
import UserContext from '../context/user/userContext';

function Profile() {
  const userContext = useContext(UserContext);
  const { user, issues } = userContext;

  return (
    <div className='profile-main-wrapper'>
      <NavBar />
      <section className='profile-card-wrapper'>
          <NewProfileCard user={user} />
          <div className='profile-card-btn-wrapper'>
            <button className='profile-card-btn--addIssue'>
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
