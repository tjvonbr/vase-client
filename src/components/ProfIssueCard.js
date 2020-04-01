/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { jsx } from '@emotion/core';
import axios from 'axios';
import { Button, Card, Icon, Label } from 'semantic-ui-react';
import ResolvedStatus from './ResolvedStatus';

const ProfIssueCard = ({ issue }) => {
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
          <div
            css={{
              display: 'flex',
              height: '29px',
              width: '100px',
              borderRadius: '3px',
              padding: '5px 0px'
            }}
          >
            <p><strong>Upvotes: </strong>{issue.upvotes} </p>
          </div>
          <ResolvedStatus issue={issue} />
        </div>
      </Card>
    </div>
  )
};

export default ProfIssueCard;
