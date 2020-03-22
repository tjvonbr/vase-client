/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

function Button(props) {
  const theme = useTheme();

  return (
    <button
      css={{
        backgroundColor: props.backgroundColor,
        borderRadius: '5px',
        padding: '15px',
        color: props.color
      }}
    >
      {props.name}
    </button>
  )
};

export default Button;