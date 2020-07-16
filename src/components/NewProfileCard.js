import React from 'react';
import placeholder from '../assets/profile_placeholder.png'

function NewProfileCard({user}) {
  return (
    <div className='card-main-wrapper'>
      <div className='card-profile-img-wrapper'>
        <img src={placeholder} alt="User's profile picture" />
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
