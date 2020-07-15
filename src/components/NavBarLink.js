/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';

function NavBarLink(props) {

  return (
    <NavLink 
      to={props.path}
      css={{
        color: '#000000',
        padding: '10px',
        fontSize: '16px',
        fontWeight: 600,
        '&:hover': {
          textDecoration: 'underline',
          color: '#fff'
        }
      }}
    >
      {props.page}
    </NavLink>
  )
};

export default NavBarLink;
