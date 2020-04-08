/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';

function MemberProfileP(props) {
  return (
    <p
      css={{
        margin: '0px'
      }}
    >
      {props.children}
    </p>
  )
};

export default MemberProfileP;
