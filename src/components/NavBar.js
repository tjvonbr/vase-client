import React from 'react';

function NavBar() {
  const id = window.localStorage.getItem('id');
  const zipcode = window.localStorage.getItem('zipcode');

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
        <a className='navbar-signout' href='/logout'>
          Sign out
        </a>
      </nav>
    </div>
  )
};

export default NavBar;
