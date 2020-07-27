import React from 'react';
import ProfIssueCard from './ProfIssueCard';

function IssuesList({ issues }, ...props) {
  if (issues.length < 1) {
    return (
      <div>
        <h3>You haven't posted any community concerns yet!</h3>
      </div>  
    )
  } return (
    <section className='list-section-wrapper'>
      <div className='list-wrapper'>
          {issues.map(issue => (
            <ProfIssueCard issue={issue} key={issue.id} 
          />))}
        </div>
    </section>
    )
  }

export default IssuesList;
