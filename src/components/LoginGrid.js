/** @jsx jsx */

import React from "react";
import { css, jsx } from '@emotion/core';

function LoginGrid() {
  return (
    <div css={wrapperStyle}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span css={css`background: #d3bfd6;`} />
      <span css={css`background: #d3bfd6;`} />
      <span css={css`background: #d3bfd6;`} />
      <span></span>
      <span></span>
      <span></span>

      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <span css={css`background: #cea9d4`} />
      <span css={css`background: #cea9d4`} />
      <span css={css`background: #cea9d4`} />
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <span></span>
      <span></span>
      <span css={css`background: #9f84a3`} />
      <span css={css`background: #9f84a3`} />
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span css={css`background: #86708a`} />

      <span css={css`background: #615263`} />
      <span css={css`background: #615263`} />
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span css={css`background: #615263`} />
      <span css={css`background: #615263`} />
      <span></span>
      <span></span>
    </div>
  )
}

// MQ BREAKPOINTS
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
	bp => `@media (max-width: ${bp}px)`
);

// ELEMENT STYLES
const wrapperStyle = css`
  height: 60vh;
  width: 100vw;
  transform: skewY(-10deg);
  background: linear-gradient(#fff 50%, #fcfcfc);
  display: grid;
  ${mq[0]} {
    display: none;
  }
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(7, 1fr);
  z-index: 0;
`

export default LoginGrid;
