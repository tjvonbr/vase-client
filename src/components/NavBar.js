/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import NavBarLink from './NavBarLink';
import SocialBar from './SocialBar';
import logo from '../images/logo.png';

const NavBar = props => {
  const theme = useTheme();

  const id = window.localStorage.getItem('id');

  return (
    <>
      <nav
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '7vh',
          backgroundColor: theme.colors.blue
        }}
      >
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '20px',
          }}
        >
          <img src={logo} alt="Co-Make Logo"/>

          <div css={{ marginLeft: '20px '}}>
            <NavBarLink 
              path={`/profile/${id}`}
              page={'Profile'}
            />
            <NavBarLink 
              path={'/community'}
              page={'Your Community'}
            />
            <NavBarLink 
              path={'/logout'} 
              page={'Logout'}  
            />
          </div>
        </div>

        <SocialBar />
      </nav>
    </>
  )
};

export default NavBar;
