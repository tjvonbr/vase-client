/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import IssueCard from './IssueCard';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';

function IssuesList(props) {
  const [issues, setIssues] = useState([]);

  // Local storage management
  let token = window.localStorage.getItem('token')
  let id = window.localStorage.getItem('id')

  useEffect(() => {
    fetchIssues();
  }, []);

  // Fetches the issues created by the logged user
  function fetchIssues() {
    axios
      .get(`http://localhost:3000/users/${id}/issues`, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        setIssues(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  };

  return (
    <div
      css={{
        marginTop: '20px',
        display: 'grid',
        gridTemplateColumns: '45% 45%',
        gridGap: '20px',
        placeContent: 'center',


      }}
    >
      {issues.map(issue => <IssueCard issue={issue} key={issue.id} /> )}
    </div>
  )
};

export default IssuesList;