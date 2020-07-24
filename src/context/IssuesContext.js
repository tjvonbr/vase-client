import React, { createContext, useState } from 'react';

const IssuesContext = createContext();
const { Provider } = IssuesContext;

function IssuesProvider({ children }) {
  const issues = JSON.parse(localStorage.getItem('issues'));

  const [issuesState, setIssuesState] = useState(issues);

  function setIssuesInfo({ issues }) {
    localStorage.setItem('issues', JSON.stringify(issues));
    setIssuesState(issues);
  }

  return (
    <Provider
      value={{
        issuesState,
        setIssuesState: issues => setIssuesInfo(issues)
      }}
    >
      {children}
    </Provider>
  )
}

export { IssuesContext, IssuesProvider };
