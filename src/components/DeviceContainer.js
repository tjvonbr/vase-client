/** @jsx jsx */

import React from "react";
import { css, jsx } from '@emotion/core';
import PhoneIcon from './PhoneIcon';
import TabletIcon from './TabletIcon';

// MQ Breakpoints
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
	bp => `@media (max-width: ${bp}px)`
);

function DeviceContainer() {
  return (
    <div css={css`
      overflow: hidden;
      position: absolute;
      top: 150px;
      left: 45%;
      display: flex;
      transform: rotate(-10deg);
      z-index: 1;
      ${mq[2]} {
        left: 55%;
      }
      ${mq[1]} {
        left: 65%;
      }
      ${mq[1]} {
        display: none;
      }
    `}>
      <PhoneIcon />
      <TabletIcon />
    </div>
  )
}

export default DeviceContainer;
