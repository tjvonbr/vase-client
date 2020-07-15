import React from 'react';
import { NavLink } from 'react-router-dom';

function Banner() {
  return (
    <nav className='nav-wrapper'>
      <h1 className='nav-vase-logo white'>Vase</h1>
      <NavLink className='nav-link' to="/login">
        Sign In
      </NavLink>
    </nav>
  )
};

export default Banner;
