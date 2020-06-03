/** @jsx jsx */

import { jsx } from '@emotion/core';
import CommIssueCard from './CommIssueCard';

function CommunityIssues({ issues, upvotes }) {
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
      {issues.map(issue => <CommIssueCard issue={issue} upvotes={upvotes} key={issue.id} />)}
    </div>
  )
}

export default CommunityIssues;
