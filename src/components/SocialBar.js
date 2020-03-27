/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { SocialIcon } from 'react-social-icons';

function SocialBar() {
  const theme = useTheme();

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
        bgColor={theme.colors.blue}
        fgColor='white'
        style={{ height: 45, width: 45 }}
      />
    </div>
  )
};

export default SocialBar;
