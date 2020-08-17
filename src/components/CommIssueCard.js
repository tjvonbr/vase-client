/** @jsx jsx */

import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { jsx } from '@emotion/core';
import axios from 'axios';
import { Button, Card, Icon, Label } from 'semantic-ui-react';
import ResolvedStatus from './ResolvedStatus';

function CommIssueCard({ issue, upvotes }) {
  const auth = useContext(AuthContext);
  const { token } = auth.authState;
  const { id } = auth.authState.userInfo;

  const [currentIssue, setCurrentIssue] =  useState(issue);
  const [alreadyVoted, setAlreadyVoted] = useState(false)

  useEffect(() => {
    upvotes.forEach(vote => {
      if (vote.issue_id === issue.id) {
        setAlreadyVoted(true)
      }
    })
  })

  // Upvote data to be passed with the addUpvote request
  const upvoteData = {
    user_id: id,
    issue_id: issue.id
  }

  // Once chevron is clicked, the # of upvotes increases by 1
  function increaseUpvoteBy1() {
    // Request to increment upvote by +1
    axios
      .put(`http://localhost:4000/issues/${issue.id}`, {upvotes: issue.upvotes + 1}, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        // Overwrites the issue data coming in from props
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
      .then(() => increaseUpvoteBy1())
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
          <Card.Header>{ currentIssue.title }</Card.Header>
          <Card.Meta>{ currentIssue.zipcode }</Card.Meta>
          <Card.Description>
            { currentIssue.description }
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
            disabled={currentIssue.user_id === id ? true : false || alreadyVoted ? true : false}
          >
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
          <ResolvedStatus issue={issue} />
        </div>
      </Card>
    </div>
  )
};

export default CommIssueCard;
