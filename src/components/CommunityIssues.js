/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import IssueCard from './IssueCard';

function CommunityIssues({ issues }) {

  return (
    <>  
      {issues.map(issue => <IssueCard issue={issue} key={issue.id} />)}
    </>
  )
}

export default CommunityIssues;