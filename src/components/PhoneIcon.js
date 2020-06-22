/** @jsx jsx */

import React from "react";
import { css, jsx } from '@emotion/core';
import iphoneIcon from '../images/iphone.svg';

// Base class for the Apple device styling
const phoneTemplate = css`
  width: 200px;
  height: 400px;
  background: #fff;
  border: 1px solid gray;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function PhoneIcon() {
  return (
    <div css={css`
      ${phoneTemplate}
      margin-right: 50px;
      `}>
      <div
        css={css`
          ${phoneTemplate}
          width: 98%;
          height: 99%;
        `}
      >
        <div
          css={css`
            ${phoneTemplate}
            width: 93%;
            height: 95%;
            overflow: hidden;
            position: relative;
          `}
        >
          <embed src={iphoneIcon} alt="iphone icon" />
        </div>
      </div>
    </div>
  )
}

export default PhoneIcon;
