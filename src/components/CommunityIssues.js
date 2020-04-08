/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import CommIssueCard from './CommIssueCard';

function CommunityIssues({ issues }) {
  const theme = useTheme();

  return (
    <div
      css={{
        paddingTop: '20px',
        paddingBottom: '40px',
        marginBottom: '100px',
        width: '700px',
        display: 'grid',
        gridTemplateColumns: '48% 48%',
        gridColumnGap: '4%',
        gridRowGap: '4%',
        justifyItems: 'center',
        }}
    >  
      {issues.map(issue => <CommIssueCard issue={issue} key={issue.id} />)}
    </div>
  )
}

export default CommunityIssues;