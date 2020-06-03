/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import logo from '../images/logo.png';

function Banner() {
  const theme = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '7vh',
        backgroundColor: theme.colors.blue
      }}
    >
      <img src={logo} alt="Co-Make Logo"/>
    </div>
  )
};

export default Banner;
