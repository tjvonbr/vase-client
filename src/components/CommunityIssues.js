/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import IssueCard from './IssueCard';

function CommunityIssues({ issues }) {

  return (
    <div
      css={{
        marginTop: '20px',
        width: '700px',
        display: 'grid',
        gridTemplateColumns: '49% 49%',
        gridColumnGap: '2%',
        gridRowGap: '2%',
        alignItems: 'center',
        justifyItems: 'center',
        }}
    >  
      {issues.map(issue => <IssueCard issue={issue} key={issue.id} />)}
    </div>
  )
}

export default CommunityIssues;