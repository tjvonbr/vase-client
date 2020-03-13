import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import AddIssue from './components/AddIssue';
import Landing from './components/Landing';

// Theme colors
const theme = {
  colors: {
    white: '#FBFAFB',
    lightBlue: '#5D91BS',
    green: '#8BDDA1',
    turquoise: '#5D9B87',
    blue: '#21316C'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/addIssue" component={AddIssue} />
      </div>
    </ThemeProvider>
  );
}

export default App;
