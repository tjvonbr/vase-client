/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { NavLink } from 'react-router-dom';

// MQ Breakpoints
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
	bp => `@media (max-width: ${bp}px)`
);

function Banner() {
  return (
    <div
      css={css`
        width: 100%;
        height: 5vh;
        display: flex;
        justify-content: space-around;
        background: none;
        position: absolute;
        top: 0;
        z-index: 1;
      `}
    >
      <p
        css={css`
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -2px;
          color: #fff;
          text-transform: lowercase;
        `}
      >
        Vase
      </p>
      <nav>
        <NavLink 
          to="/login"
          css={css`
            display: flex;
            align-items: center;
            height: 100%;
            border: none;
            background: none;
            color: #fff;
            font-size: 17px;
            font-weight: 600;
            &:hover {
              cursor: pointer;
            }
          `}  
        >
          Sign In
        </NavLink>
      </nav>
    </div>
  )
};

export default Banner;
