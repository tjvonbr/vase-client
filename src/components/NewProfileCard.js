import React from 'react';
import placeholder from '../assets/profile_placeholder.png'

function NewProfileCard() {
  return (
    <div className='card-main-wrapper'>
      <div className='card-profile-img-wrapper'>
        <img src={placeholder} alt="User's profile picture" />
      </div>
      <div className='card-profile-content-wrapper'>
        <h1 className='card-profile-content-name'>Trevor Von Bruenchenhein</h1>
        <div className='card-profile-content-contact-wrapper'>
          <p>Username: tjvonbr</p>
          <address>Email: tjvonbr@gmail.com</address>
        </div>
        <div className='card-profile-content-bio'>
          <p>Bio: Former educator looking for work as a software engineer!</p>
        </div>

      </div>
    </div>
  )
}

export default NewProfileCard;
