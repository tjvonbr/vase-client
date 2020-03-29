/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import IssueCard from './IssueCard';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';

function IssuesList({ issues }) {
  // Local storage management
  let token = window.localStorage.getItem('token')
  let id = window.localStorage.getItem('id')
  
  return (
    <div
      css={{
        margin: '0 auto',
        marginTop: '20px',
        width: '700px',
        display: 'grid',
        gridTemplateColumns: '48% 48%',
        gridTemplateRows: '48% 48%',
        gridColumnGap: '4%',
        gridRowGap: '4%',
        justifyItems: 'center',
        /* alignItems: 'center' */
      }}
    >
      {issues.map(issue => <IssueCard issue={issue} key={issue.id} /> )}
    </div>
  )
};

export default IssuesList;