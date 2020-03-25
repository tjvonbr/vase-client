/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import axios from 'axios';
import { Button, Card } from 'semantic-ui-react'

function IssueCard({ issue }) {
  const [currentIssue, setCurrentIssue] =  useState(issue);
  const [editedIssue, setEditedIssue] = useState(currentIssue);

  // Local storage management
  const token = window.localStorage.getItem('token');
  
  // Issue ID to be used as dynamic param
  const id = issue.id;

  console.log("EDITED ISSUE", editedIssue);

  // Once chevron is clicked, the # of upvotes increases by 1
  function upvoteIssue() {
    // Change state to +1 for upvote
    setEditedIssue({ upvotes: editedIssue.upvotes + 1 });

    axios
      .put(`http://localhost:3000/issues/${id}`, editedIssue, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        // When I log the response, the first click doesn't increase upvote, but the second click does
        console.log("RESPONSE", response.data)
        setCurrentIssue(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{ issue.title }</Card.Header>
          <Card.Meta>{ issue.zipcode }</Card.Meta>
          <Card.Description>
            { issue.description }
          </Card.Description>
        </Card.Content>
        <div
         css={{
           marginLeft: '12px',
           marginBottom: '10px'
         }}
        >
          <Button
            size='huge'
            icon='heart'
            label={{ as: 'p', basic: true, content: editedIssue.upvotes }}
            labelPosition='right'
            onClick={upvoteIssue}
          />
        </div>
      </Card>
    </>
  )
};

export default IssueCard;
