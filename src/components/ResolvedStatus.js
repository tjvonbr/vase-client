/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import { Icon } from 'semantic-ui-react';

function ResolvedStatus({ issue }) {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        height: '29px',
        width: '100px',
        borderRadius: '3px',
        padding: '5px'
      }}
    >
      <Icon 
        name={issue.resolved ? 'check' : 'x'} 
        color={issue.resolved ? 'green': 'red'}
      />
      <p
        css={{
          fontWeight: '600',
          color: issue.resolved ? 'green' : 'red'
        }}
      >
        { issue.resolved ? 'Resolved' : 'Unresolved' }
      </p>
    </div>
  )
};

export default ResolvedStatus;
