import React from 'react';
import { Icon } from 'semantic-ui-react'

function RegisterPerks() {
  return (
    <div className='perks-container'>
      <a 
        href="/"
        className='containerh2'
      >
        Vase
      </a>
      <div>
        <div>
          <Icon color="blue" name="check circle" />
          <span className='perk-header'>Quick and easy signup</span>
        </div>
        <p className='perk-paragraph'>You only need to provide an email to begin making a change in your community.</p>
        <div>
          <Icon color="blue" name="check circle" />
          <span className='perk-header'>Post and vote with one click</span>
        </div>
        <p className='perk-paragraph'>Upon successfully registering, you only need to click once to upvote your first community issue.</p>
        <div>
          <Icon color="blue" name="check circle" />
          <span className='perk-header'>Become a leader in your community</span>
        </div>
        <p className='perk-paragraph'>Become an advocate for the type of community you'd like to live in.</p>
      </div>
    </div>
  )
}

export default RegisterPerks;
