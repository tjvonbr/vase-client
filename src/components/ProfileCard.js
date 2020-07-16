import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import '../styles/ProfileStyles.css';

function ProfileCard({user}) {
  return (
    <Card className='cardstyle' raised='true'>
      <Image src={user.picture} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{user.username}</Card.Header>
        <Card.Meta>
          <span className='date'><i class="map pin icon"></i>{user.zipCode}</span>
        </Card.Meta>
        <Card.Description>
          {user.email}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          <i class="pencil alternate icon" onClick={props.dog}></i>
        </a>
      </Card.Content>
    </Card> 
  )
};

export default ProfileCard;
