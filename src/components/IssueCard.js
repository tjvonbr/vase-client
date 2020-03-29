/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import axios from 'axios';
import { Button, Card, Icon, Label } from 'semantic-ui-react';

function IssueCard({ issue }) {
  const [currentIssue, setCurrentIssue] =  useState(issue);
  const [editedIssue, setEditedIssue] = useState(currentIssue);
  const [voted, setVoted] = useState(null);

  // Local storage management
  const token = window.localStorage.getItem('token');
  
  // Issue ID to be used as dynamic param
  const id = issue.id;

  console.log("EDITED ISSUE", editedIssue);

  // Once chevron is clicked, the # of upvotes increases by 1
  function upvoteIssue() {
    // Change state to +1 for upvote
    setEditedIssue({ upvotes: editedIssue.upvotes + 1 });
   
    // Request to increment upvote by +1
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


    // if (!voted) {
    //   setVoted(true);
    // } else {
    //   return voted
    // }

  };

  return (
    <>
      <Card raised style={{
        height: '250px',
        width: '300px',
      }}>
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
          <Button as='div' labelPosition='right' disabled={false} >
            <Button 
            color={ voted ? 'gray' : 'facebook' }
            size='large' 
            onClick={upvoteIssue}>
              <Icon name='thumbs up outline' />
              Upvote
            </Button>
            <Label as='p' basic color={ voted ? 'gray' : 'blue' } pointing='left'>
              {currentIssue.upvotes}
            </Label>
          </Button>
        </div>
      </Card>
    </>
  )
};

export default IssueCard;
