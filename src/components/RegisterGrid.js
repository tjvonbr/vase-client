/** @jsx jsx */

import React from "react";
import { css, jsx } from '@emotion/core';

const gridContainer = css`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
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

function RegisterGrid() {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        background: #fff;
      `}
    >
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
      <div css={css`${gridContainer}`}>
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span 
          css={css`
            ${gridRow}
            background: #9dc1eb;
          `}
        />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
      </div>

      {/* Row 2 */}
      <div
        css={css`
          ${gridContainer}
          grid-template-columns: repeat(10, 1fr);
        `}
      >
        <span css={css`${gridRow}`} />
        <span 
          css={css`
            ${gridRow}
            background: #62bfed;
          `}
        />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
        <span css={css`${gridRow}`} />
      </div>

      {/* Row 3 */}
      <div css={css`${gridContainer}`}>
        <span css={gridRowWhite} />
        <span css={gridRowWhite} />
        <span gridRowWhite
          css={css`gridRowWhite
            ${gridRowWhite}
            background: #2892f0;
          `}gridRowWhite
        />
        <span css={gridRowWhite} />
        <span css={gridRowWhite} />
        <span css={gridRowWhite} />
        <span css={gridRowWhite} />
        <span css={gridRowWhite} />
        <span css={gridRowWhite} />
        <span css={gridRowWhite} />
      </div>
    </div>  
  )
}

export default RegisterGrid;
