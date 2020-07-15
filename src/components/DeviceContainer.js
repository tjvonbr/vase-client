/** @jsx jsx */

import React from "react";
import { css, jsx } from '@emotion/core';
import PhoneIcon from './PhoneIcon';
import TabletIcon from './TabletIcon';

// Styles found in DeviceContainer.scss

// MQ Breakpoints
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
	bp => `@media (max-width: ${bp}px)`
);

function DeviceContainer() {
  return (
    <div id="device-container">
      <PhoneIcon />
      <TabletIcon />
    </div>
  )
}

export default DeviceContainer;
