/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import axios from 'axios';
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
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <NavBar />
  )
};

export default Community;