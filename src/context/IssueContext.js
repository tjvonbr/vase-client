import React, { createContext, useState } from 'react';

const IssueContext = createContext();
const { Provider } = IssueContext;

function IssueProvider({ children }) {
  const issues = localStorage.getItem('issues');

  const [issueState, setIssueState] = useState(
    issues ? [JSON.parse(issues)] : []);

  localStorage.setItem('issues', JSON.stringify(issueState));

  function setIssueInfo({ issues }) {
    setIssueState(...issueState, issues);
  }

  return (
    <Provider
      value={{
        issueState,
        setIssueInfo
      }}
    >
      {children}
    </Provider>
  )
}

export { IssueContext, IssueProvider };
