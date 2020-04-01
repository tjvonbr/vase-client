/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/core';
import ProfIssueCard from './ProfIssueCard';

function IssuesList({ issues, fetch }) {
  // Local storage management
  let token = window.localStorage.getItem('token')
  let id = window.localStorage.getItem('id')

  if (issues.length < 1) {
    // If user hasn't posted yet, render this:
    return (
      <div css={{ marginTop: '20px' }}>
        <h3>You haven't posted any community concerns yet!</h3>
      </div>  
    )
  } else {
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
        }}
      >
        {issues.map(issue => (
          <ProfIssueCard 
            issue={issue}
            fetch={fetch} 
            key={issue.id} 
          /> ))}
      </div>
    )
  }
  

};

export default IssuesList;