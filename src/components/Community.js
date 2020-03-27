/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import axios from 'axios';
import CommunityIssues from './CommunityIssues';
import NavBar from './NavBar';

function Community() {
  const [commIssues, setCommIssues] = useState([]);

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
        setCommIssues(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <>
    <NavBar />

    <div
      css={{
        marginTop: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h3 
        css={{ borderBottom: '2px solid black' }}>Community concerns posted for {zip}:
      </h3>
      <CommunityIssues issues={commIssues} />
    </div>
    </>
  )
};

export default Community;
