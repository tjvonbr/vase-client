import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import placeholder from '../assets/profile_placeholder.png'

function ProfileCard() {
  const auth = useContext(AuthContext);
  const { authState } = auth;

  return (
    <div className='card-main-wrapper'>
      <Link to={`/profile/26/edit`}>
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
          {authState.userInfo.firstName} {authState.userInfo.lastName}
        </h1>
        <p className='profile-card-username'>@{authState.userInfo.username}</p>
        <p><strong>Issues Created: </strong>{authState.userInfo.postedIssues}</p>
        <p><strong>Bio: </strong>{authState.userInfo.bio}</p>
      </div>
    </div>
  )
}

export default ProfileCard;
