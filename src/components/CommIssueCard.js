/** @jsx jsx */

import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import axios from 'axios';
import { Button, Card, Icon, Label } from 'semantic-ui-react';
import ResolvedStatus from './ResolvedStatus';

function CommIssueCard({ issue, upvotes }) {
  const [currentIssue, setCurrentIssue] =  useState(issue);
  const [alreadyVoted, setAlreadyVoted] = useState(false)

  useEffect(() => {
    upvotes.forEach(vote => {
      if (vote.issue_id === issue.id) {
        setAlreadyVoted(true)
      }
    })
  }, [upvotes])

  // Local storage management
  const token = window.localStorage.getItem('token');
  const user_id = JSON.parse(window.localStorage.getItem('id'));

  // Issue ID to be used as dynamic param
  const id = issue.id;

  // Upvote data to be passed with the addUpvote request
  const upvoteData = {
    user_id: JSON.parse(window.localStorage.getItem('id')),
    issue_id: id
  }

  // Once chevron is clicked, the # of upvotes increases by 1
  function increaseUpvoteBy1() {
    // Request to increment upvote by +1
    axios
      .put(`http://localhost:4000/issues/${id}`, {upvotes: currentIssue.upvotes + 1}, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        // When I log the response, the first click doesn't increase upvote, but the second click does
        setCurrentIssue(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  };

  // Function that actually creates the upvote
  function addUpvote() {
    axios
      .post(`http://localhost:4000/issues/${id}/upvotes`, upvoteData)
      .then(() => {
        increaseUpvoteBy1()
      })
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <div>
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
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            margin: '10px 12px',
          }}
        >
          <Button 
            as='div' 
            labelPosition='right' 
            disabled={issue.user_id === user_id ? true : false || alreadyVoted ? true : false}>
            <Button 
              color='facebook'
              size='large' 
              onClick={addUpvote}>
              <Icon name='thumbs up outline' />
              Upvote
            </Button>
            <Label as='p' basic color='blue' pointing='left'>
              {currentIssue.upvotes}
            </Label>
          </Button>
          <ResolvedStatus issue={currentIssue} />
        </div>
      </Card>
    </div>
  )
};

export default CommIssueCard;
