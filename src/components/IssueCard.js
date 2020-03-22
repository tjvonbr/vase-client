/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import axios from 'axios';
import { Button, Card } from 'semantic-ui-react'

function IssueCard({ issue }) {
  const [currentIssue, setCurrentIssue] =  useState(issue);
  const [editedIssue, setEditedIssue] = useState(issue);

  // Local storage management
  const token = window.localStorage.getItem('token');
  
  // Issue ID to be used as dynamic param
  const issueId = issue.id;

  // Once chevron is clicked, the # of upvotes increases by 1
  function upvoteIssue() {
    // Change state to +1 for upvote
    setEditedIssue({ ...editedIssue, upvotes: currentIssue.upvotes + 1 });

    axios
      .put(`https://comake-be.herokuapp.com/issues/${issueId}`, editedIssue, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        setCurrentIssue(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  console.log(editedIssue);

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
            label={{ as: 'a', basic: true, content: currentIssue.upvotes }}
            labelPosition='right'
            onClick={upvoteIssue}
          />
        </div>
      </Card>
    </>
  )
};

export default IssueCard;
