/** @jsx jsx */

import React from 'react';
import { jsx, keyframes } from '@emotion/core';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import Banner from './Banner';

function Landing() {
  return (
    <header
      css={{
        display: 'block',
        overflow: 'hidden'
      }}
    >
      <Banner />
      <div 
        css={{
          width: '100%',
          height: '700px',
          background: 'linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%)',
          transform: 'skewY(-10deg)',
          transformOrigin: '0',
          zIndex: 0
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
        }}
      >
        <h1
          css={{
            letterSpacing: '2px'
          }}
        >A new way to engage</h1>
        <p
          css={{
            color: 'rgb(217, 252, 255)',
            fontSize: '17px',
            lineHeight: '1.8'
          }}
        >
          Vase is the smart approach to engaging with your neighbors.  See what others are up to on your block.  Check in to see what issues within your community need to be addressed.  Give your local officials an idea of what concerns you most.  Vase turns the web into a virtual town hall.  How will you help build your community?
        </p>
        <button
          css={{
            height: '40px',
            border: 'none',
            background: '#3ecf8e',
            color: '#fff',
            fontSize: '15px',
            fontWeight: '600',
            textShadow: '0 1px 3px rgba(36, 180, 126, .4)',
            borderRadius: '4px',
            padding: '0 14px',
            boxShadow: '0 10px 6px rgba(50, 50, 93, .11)',
            textTransform: 'uppercase',
            '&:hover': {
              cursor: 'pointer',
              transform: 'translateY(1px)'
            }
          }}
        >
          Get Started
        </button>
      </section>

    </header>
  )
};

export default Landing;