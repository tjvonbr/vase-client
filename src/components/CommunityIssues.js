import React from 'react';
import CommIssueCard from './CommIssueCard';

function CommunityIssues({ issues, upvotes }) {
  return (
    <div className='community-list-wrapper'>  
      {issues.map(issue => (
        <CommIssueCard 
          issue={issue}
          upvotes={upvotes}
          key={issue.id}
        />
      ))}
    </div>
  )
}

export default CommunityIssues;
