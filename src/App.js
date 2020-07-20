import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import AddIssue from './components/AddIssue';
import Community from './components/Community';
import Landing from './components/Landing';
import Logout from './components/Logout';
import NewLogin from './components/NewLogin';
import NewRegister from './components/NewRegister';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import '../src/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import UserState from './context/user/UserState';

function App() {
  return (
    <UserState>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route path="/profile/:id/edit" component={ProfileEdit} />
          <Route path="/login" component={NewLogin} />
          <Route path="/register" component={NewRegister} />
          <Route path="/addissue" component={AddIssue} />
          <Route path="/community/:zipcode" component={Community} />
          <Route path="/logout" component={Logout} />
        </div>
      </BrowserRouter>
    </UserState>
  );
}

export default App;
