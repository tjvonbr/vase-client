/** @jsx jsx */

import React, { useContext } from 'react';
import { IssueContext } from '../context/IssueContext';
import { jsx } from '@emotion/core';
import ProfIssueCard from './ProfIssueCard';

function IssuesList({ fetch }) {
  const issueContext = useContext(IssueContext);
  const { issueState } = issueContext;

  if (issueState.length < 1) {
    // If user hasn't posted yet, render this:
    return (
      <div css={{ marginTop: '20px' }}>
        <h3>You haven't posted any community concerns yet!</h3>
      </div>  
    )
  } return (
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
        {issueState.map(issue => (
          <ProfIssueCard 
            issue={issue}
            fetch={fetch} 
            key={issue.id} 
          /> ))}
      </div>
    )
  }

export default IssuesList;
