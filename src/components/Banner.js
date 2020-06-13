/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';

function Banner() {
  return (
    <div
      css={{
        width: '100%',
        height: '7vh',
        display: 'flex',
        justifyContent: 'center',
        background: 'none',
        position: 'absolute',
        top: '0',
        zIndex: '1'
      }}
    >
      <p
        css={{
          fontSize: '32px',
          fontWeight: '600',
          letterSpacing: '2px',
          color: '#fff',
          textTransform: 'lowercase'
        }}
      >
        Vase
      </p>
    </div>
  )
};

export default Banner;
