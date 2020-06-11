/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import logo from '../images/logo.png';

function Banner() {


  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '7vh',
        backgroundColor: '#21316C'
      }}
    >
      <img src={logo} alt="Co-Make Logo"/>
    </div>
  )
};

export default Banner;
