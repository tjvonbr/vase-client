import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import AddIssue from './components/AddIssue';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">
      {/* ROUTES  */}

      <Route exact path="/" component={Landing} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/addIssue" component={AddIssue} />
    </div>
  );
}

export default App;
