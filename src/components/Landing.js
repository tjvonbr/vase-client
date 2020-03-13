/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import Banner from './Banner';

function Landing() {
  const theme = useTheme();
  const size = '2.1rem';

  return (
    <div>
      <Banner />
      <div
        css={{
          width: '60%',
          margin: '10px auto',
        }}
      >
        <h1>Welcome to Co-Make!</h1>

        <p css={{fontSize: `${size}`}}>At Co-Make, we grew tired of having our tax dollars being spent in ways that weren't aligned with the interests of the taxbase and wanted to create an accountability measure for local governments.</p>

        <p css={{fontSize: `${size}`}}>We understand there are various ways of engaging in local politics, but very few, if any, harnessed technology like other industries have in the past few decades.</p>

        <p css={{fontSize: `${size}`}}>In response, we decided to create an app that gives taxpayers the ability to air out their concerns and opinions about how their tax dollars should be allocated at the local level.</p>

        <h2>How it Works</h2>

        <p css={{fontSize: `${size}`}}>Upon registration, we'll prompt you to enter your zip code, and once you do, you'll have access to the previously posted concerns and issues within your local community.  You'll even be able to post concerns of your own.</p>

        <p css={{fontSize: `${size}`}}>As you're looking through the list of concerns, you'll have the ability to 'upvote' any of the projects that you think should receive more attention or immediate action from your local government.  By upvoting a project, you're essentially emphasizing the issue's importance relative to others' within your community.</p>

        <h2>Get Started</h2>
        <p css={{fontSize: `${size}`}}>If you haven't registered with us before, registration is simple!  You'll only need to provide us with your name, email address, and zipcode!  No more than that!</p>

        <p css={{fontSize: `${size}`}}>If you're a returning visitor, we'd like to welcome you back! You can click the 'Login' button in the top-right corner of your screen!</p>

        {/* Link to login page */}
        <Link to='/register'>
          <Button
            size='massive'
            color='blue'>
              Register
          </Button>
        </Link>
      </div>
    </div>
  )
};

export default Landing;