/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import Banner from './Banner';

function Landing() {
  const theme = useTheme();
  const size = '2.1rem';

  return (
    <header>
      <div 
        css={{
          width: '100%',
          height: '700px',
          background: 'linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%)',
          transform: 'skewY(-10deg)',
          transformOrigin: '0',
        }}
      >
      </div>
      <section
        css={{
          width: '500px',
          height: '700px',
          position: 'absolute',
          top: '200px',
          left: '200px',
          color: '#fff',
          border: '1px solid #fff'
        }}
      >
        <h1>A new way to engage</h1>
      </section>

    </header>
  )
};

export default Landing;