import React from 'react';
import { Icon } from 'semantic-ui-react';

function ResolvedStatus({ issue }) {
  return (
    <div className='resolved-status-wrapper'>
      <Icon 
        name={issue.resolved ? 'check' : 'x'} 
        color={issue.resolved ? 'green': 'red'}
      />
      <p 
        className=
        {`resolved-status${issue.resolved ? "--resolved" : "--rejected"}`}
      >
        {issue.resolved ? 'Resolved' : 'Unresolved'}
      </p>
    </div>
  )
}

export default ResolvedStatus;
