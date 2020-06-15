/** @jsx jsx */

import React from "react";
import { css, jsx } from '@emotion/core';
import iphoneIcon from '../images/iphone.svg';

function PhoneIcon() {
  return (
    <div
      css={css`
        margin: 0 auto;
        width: 200px;
        height: 400px;
        border: 1px solid gray;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={{
          width: '98%',
          height: '99%',
          border: '1px solid gray',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center'
        }}
      >
        <div
          css={{
            width: '93%',
            height: '95%',
            border: '1px solid gray',
            borderRadius: '20px',
            marginTop: '8px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <embed
            src={iphoneIcon}
            alt="iphone icon"
            css={{
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PhoneIcon;
