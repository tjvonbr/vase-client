/** @jsx jsx */

import React from "react";
import { css, jsx } from '@emotion/core';

const gridContainer = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px;
  transform: skewY(-10deg);
  transform-origin: 0;
`

const gridRow = css`
  border: 1px solid black;
  background: #f6f9fc;
`

function NewRegister(props) {
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
          height: 600px;
          background: #f6f9fc;
          transform: skewY(-10deg);
          transform-origin: 0;
        `}
      >
      </div>
      <div css={css`${gridContainer}`}>
        <div css={css`${gridRow}`}></div>
        <div css={css`${gridRow}`}></div>
        <div css={css`${gridRow}`}></div>
        <div css={css`${gridRow}`}></div>
        <div css={css`${gridRow}`}></div>
      </div>
      <div
        css={css`
          ${gridContainer}
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <div css={css`${gridRow}`}></div>
        <div css={css`${gridRow}`}></div>
        <div css={css`${gridRow}`}></div>
      </div>
      <div css={css`${gridContainer}`}>
        <div css={css`
          ${gridRow}
          background: red;
        `} />
        <div 
          css={css`${gridRow}`}
        />
        <div css={css`${gridRow}`}></div>
        <div css={css`${gridRow}`}></div>
        <div css={css`${gridRow}`}></div>
      </div>
    </div>  
  )
}

export default NewRegister;
