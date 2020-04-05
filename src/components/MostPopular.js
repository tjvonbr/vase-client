/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react';
import { jsx } from '@emotion/core';
import placeholder from '../images/profile_placeholder.png';

const MostPopular = props => {
  console.log("MOST POPULAR CARD", props)
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
          border: '1px solid red',
          width: '100%',
          height: '35%',
        }}
      >
        <Image 
          src={placeholder} 
          size='tiny' 
          circular 
          style={{ marginTop: '10px', marginLeft: '10px', border: '1px solid black' }}  
        />
      </Card.Header>
      <div
        css={{
          border: '1px solid blue',
          width: '100%',
          height: '65%',
        }}
      >

      </div>

    </Card>
  )
};

export default MostPopular;