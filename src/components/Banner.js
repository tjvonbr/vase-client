import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

function Banner() {
  const authContext = useContext(AuthContext)

  return (
    <nav className='nav-wrapper'>
      <h1 className='nav-vase-logo white'>Vase</h1>
      {authContext.isAuthenticated() ? 
        <NavLink className='nav-link' to="/logout">
          Sign Out
        </NavLink> :
        <NavLink className='nav-link' to="/login">
          Sign In
        </NavLink>
      }
    </nav>
  )
};

export default Banner;
