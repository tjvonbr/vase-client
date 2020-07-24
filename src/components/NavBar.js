import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function NavBar() {
  const authContext = useContext(AuthContext);
  const { id, zipcode } = authContext.authState.userInfo;

  return (
    <div className='navbar-wrapper'>
      <nav>
        <a href="/">
          <h1 className='nav-vase-logo blue'>Vase</h1>
        </a>
      </nav>
      <nav className='navbar-items-wrapper'>
        <a className='navbar-item' href={`/profile/${id}`}>
          Profile
        </a>
        <a className='navbar-item' href={`/community/${zipcode}`}>
          Community
        </a>
      </nav>
      <nav>
        <a className='navbar-auth' href='/logout'>
          Sign Out
        </a>
      </nav>
    </div>
  )
};

export default NavBar;
