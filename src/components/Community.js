/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import axios from 'axios';
import CommunityIssues from './CommunityIssues';
import IssueCard from './IssueCard';
import NavBar from './NavBar';

function Community() {
  const [commIssues, setCommIssues] = useState([]);
  const [mostPopular, setMostPopular] = useState({});
  useEffect(() => {
    fetchCommIssues();
  }, []);

  const token = window.localStorage.getItem('token');
  const zip = window.localStorage.getItem('zipcode');

  function fetchCommIssues() {
    axios
      .get(`http://localhost:3000/issues/zip/${zip}`, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log("FETCH ISSUES RESPONSE", response.data);
        setCommIssues(response.data);
        setMostPopular(response.data.reduce((prev, current) => {
          return (prev.upvotes > current.upvotes) ? prev : current
        }));
      })
      .catch(error => {
        console.log(error);
      })
  };

  console.log(mostPopular);

  return (
    <>
    <NavBar />
    <div
      css={{
        margin: '20px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

      }}
    >
      <h3>Top concern in {zip}:</h3>
      <IssueCard issue={mostPopular} />
    </div>
    <div
      css={{
        marginBottom: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h3>All community concerns posted in {zip}:</h3>
      <CommunityIssues issues={commIssues} />
    </div>
    </>
  )
};

export default Community;
