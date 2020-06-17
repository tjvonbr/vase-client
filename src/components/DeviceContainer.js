/** @jsx jsx */

import React from "react";
import { css, jsx } from '@emotion/core';
import PhoneIcon from './PhoneIcon';
import TabletIcon from './TabletIcon';

function DeviceContainer() {
  return (
    <div css={css`
      position: absolute;
      left: 45%;
      top: 175px;
      display: flex;
      transform: rotate(-10deg);
    `}>
      <PhoneIcon />
      <TabletIcon />
    </div>
  )
}

export default DeviceContainer;
