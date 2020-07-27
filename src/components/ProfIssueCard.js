import React from 'react';
import { Card } from 'semantic-ui-react';
import ResolvedStatus from './ResolvedStatus';

function ProfIssueCard({ issue }) {
  return (
    <div className='issue-card-wrapper'>
      <Card raised className='issue-card'>
        <Card.Content>
          <Card.Header>{ issue.title }</Card.Header>
          <Card.Meta>{ issue.zipcode }</Card.Meta>
          <Card.Description>
            { issue.description }
          </Card.Description>
        </Card.Content>
        <div className='issue-card-status-wrapper'>
          <p><strong>Upvotes: </strong>{issue.upvotes}</p>
          <ResolvedStatus issue={issue} />  
        </div>
      </Card>
    </div>
  )
};

export default ProfIssueCard;
