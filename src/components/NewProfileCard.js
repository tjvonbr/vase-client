import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import placeholder from '../assets/profile_placeholder.png'

function NewProfileCard({ user }) {
  const id = window.localStorage.getItem('id')

  return (
    <div className='card-main-wrapper'>
      <Link to={{
        pathname: `/profile/${id}/edit`,
        user: user
      }}>
        <Icon 
          className='profile-card-btn--edit'
          name='edit' 
          size='large'
        />
      </Link>

      <div className='card-profile-img-wrapper'>
        <img src={placeholder} alt="User's profile card" />
      </div>
      <div className='card-profile-content-wrapper'>
        <h1 className='card-profile-content-name'>
          {user.first_name} {user.last_name}
        </h1>
        <p className='profile-card-username'>{`@${user.username}`}</p>
        <p><strong>Issues Created:</strong> {user.posted_issues}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
    </div>
  )
}

export default NewProfileCard;
