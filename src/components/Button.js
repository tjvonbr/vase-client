/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

function Button(props) {
  return (
    <button css={buttonStyles}>
      {props.children}
    </button>
  )
};

const buttonStyles = css`
  height: 40px;
  width: 100%;
  border: none;
  background: #3ecf8e;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(36, 180, 126, .4);
  border-radius: 4px;
  padding: 0 14px;
  box-shadow: 0 10px 6px rgba(50, 50, 93, .11);
  &:hover {
    cursor: pointer;
    transform: translateY(1px)
  }
`

export default Button;