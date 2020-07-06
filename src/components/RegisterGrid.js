/** @jsx jsx */

import React from "react";
import { css, jsx } from '@emotion/core';

function RegisterGrid(props) {
  return (
    <div
      css={css`
        height: 100vh;
        width: 50%;
        background: #fff;
        position: absolute;
        ${mq[1]} {
          display: none;
        }
      `}
    >
      {props.children}
      <div
        css={css`
          height: 65%;
          background: #f6f9fc;
          transform: skewY(-10deg);
          transform-origin: 0;
        `}
      >
      </div>

      {/* Row 1 */}
      <div css={gridContainer}>
        <span css={gridRow} />
        <span css={gridRow} />
        <span 
          css={css`
            ${gridRow}
            background: #9dc1eb;
          `}
        />
        <span css={gridRow} />
        <span css={gridRow} />
      </div>

      {/* Row 2 */}
      <div
        css={css`
          ${gridContainer}
          grid-template-columns: repeat(5, 200px);
        `}
      >
        <span css={css`${gridRow}`} />
        <span 
          css={css`
            ${gridRow}
            background: #62bfed;
          `}
        />
        <span css={gridRow} />
        <span css={gridRow} />
        <span css={gridRow} />
      </div>

      {/* Row 3 */}
      <div css={css`${gridContainer}`}>
        <span css={gridRowWhite} />
        <span css={gridRowWhite} />
        <span 
          css={css`
            ${gridRowWhite}
            background: #2892f0;
          `}
        />
        <span css={gridRowWhite} />
        <span css={gridRowWhite} />
      </div>

    </div>  
  )
}

// MQ BREAKPOINTS
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
	bp => `@media (max-width: ${bp}px)`
);

const gridContainer = css`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: 60px;
  transform: skewY(-10deg);
  transform-origin: 0;
  z-index: 0;
` 

const gridRow = css`
  background: #f6f9fc;
`

const gridRowWhite = css`
  ${gridRow}
  background: #fff
`

export default RegisterGrid;
