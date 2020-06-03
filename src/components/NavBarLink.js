/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { NavLink } from 'react-router-dom';

function NavBarLink(props) {
  const theme = useTheme();

  return (
    <NavLink 
      to={props.path}
      css={{
        color: theme.colors.white,
        padding: '10px',
        fontSize: '16px',
        fontWeight: 600,
        '&:hover': {
          textDecoration: 'underline',
          color: theme.colors.white
        }
      }}
    >
      {props.page}
    </NavLink>
  )
};

export default NavBarLink;
