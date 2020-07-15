/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import { SocialIcon } from 'react-social-icons';

function SocialBar() {
  return (
    <div 
      css={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight: '20px'
      }}
    >
      {/* Github */}
      <SocialIcon 
        network='github'
        url='https://github.com/tjvonbr'
        bgColor='#fff'
        fgColor='white'
        style={{ height: 45, width: 45 }}
      />
    </div>
  )
};

export default SocialBar;
