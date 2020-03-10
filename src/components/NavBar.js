/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import NavBarLink from './NavBarLink';

function NavBar() {
  const theme = useTheme();

  return (
    <>
      <nav
        css={{
          display: 'flex',
          height: '5vh',
          backgroundColor: theme.colors.blue
        }}
      >
        <NavBarLink 
          path={'/login'} 
          page={'Login'}  
        />
      </nav>
    </>
  )
};

export default NavBar;
