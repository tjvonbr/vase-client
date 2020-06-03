/** @jsx jsx */

import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { jsx } from '@emotion/core';
import MemberProfileP from './MemberProfileP';
import placeholder from '../images/profile_placeholder.png';

function MostPopular(props) {
  return (
    <Card
      style={{
        width: '500px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Card.Header
        css={{
          width: '100%',
          height: '35%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          css={{
            width: '25%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image 
            src={placeholder}
            size='tiny'
            circular
            style={{ marginTop: '10px', marginLeft: '10px', border: '1px solid lightgray' }}  
          />
        </div>

        <div
          css={{
            width: '75%',
            padding: '10px 10px',
          }}
        >
          <h3 css={{ margin: '0px' }}>Member Profile</h3>
          <MemberProfileP>Posted by: </MemberProfileP>
          <MemberProfileP>Issues posted: </MemberProfileP>
          <MemberProfileP>Member since: </MemberProfileP>
        </div>
      </Card.Header>
      <div
        css={{
          borderTop: '1px solid lightgray',
          width: '100%',
          height: '65%',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        <h3>{props.issue.title}</h3>
        <MemberProfileP><strong>Description: </strong>{props.issue.description}</MemberProfileP>
        <MemberProfileP><strong>Upvotes: </strong>{props.issue.upvotes}</MemberProfileP>
        <MemberProfileP><strong>Resolved: </strong>{props.issue.resolved ? 'Yes' : 'No'}</MemberProfileP>
      </div>

    </Card>
  )
};

export default MostPopular;