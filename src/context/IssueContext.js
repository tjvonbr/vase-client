import React, { createContext, useState } from 'react';

const IssueContext = createContext();
const { Provider } = IssueContext;

function IssueProvider({ children }) {
  const issues = localStorage.getItem('issues');

  const [issueState, setIssueState] = useState(issues);

  function setIssueInfo({ issues }) {
    localStorage.setItem('issues', JSON.stringify(issues));
    setIssueState(issues);
  }

  return (
    <Provider
      value={{
        issueState,
        setIssueState: issueInfo => setIssueInfo(issueInfo)
      }}
    >
      {children}
    </Provider>
  )
}

export { IssueContext, IssueProvider };
