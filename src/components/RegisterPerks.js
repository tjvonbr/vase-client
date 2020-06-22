/** @jsx jsx */

import React from "react";
import { css, jsx } from '@emotion/core';
import { Icon } from 'semantic-ui-react'

function RegisterPerks() {
  return (
    <div css={perksContainer}>
      <h2 css={containerh2}>Vase</h2>
      <div>
        <div>
          <Icon color="blue" name="check circle" />
          <span css={perkHeader}>Quick and easy signup</span>
        </div>
        <p css={perkParagraph}>You only need to provide an email to begin making a change in your community.</p>
        <div>
          <Icon color="blue" name="check circle" />
          <span css={perkHeader}>Post and vote with one click</span>
        </div>
        <p css={perkParagraph}>Upon successfully registering, you only need to click once to upvote your first community issue.</p>
        <div>
          <Icon color="blue" name="check circle" />
          <span css={perkHeader}>Become a leader in your community</span>
        </div>
        <p css={perkParagraph}>Become an advocate for the type of community you'd like to live in.</p>
      </div>
    </div>
  )
}

// Component Styles
const perksContainer = css`
  position: absolute;
  top: 100px;
  left: 30%;
  width: 300px;
  height: 200px;
  z-index: 1
`

const containerh2 = css`
  margin-left: 30px;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -2px;
  color: #2892f0;
  text-transform: lowercase;
`

const perkHeader = css`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  color: black;
`

const perkParagraph = css`
  margin-left: 30px;
  line-height: 20px;
`

export default RegisterPerks;
