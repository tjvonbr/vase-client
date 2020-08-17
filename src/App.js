import React, { useContext } from 'react';
import AddIssue from './pages/AddIssue';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Community from './pages/Community';
import { FetchProvider } from './context/FetchContext';
import { IssueProvider } from './context/IssueContext';
import Landing from './pages/Landing';
import Logout from './pages/Logout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import '../src/styles/index.scss';

function AuthenticatedRoute({ children, ...rest }) {
  const authContext = useContext(AuthContext);
  

  return (
    <Route {...rest} render={() => 
      authContext.isAuthenticated() ? (
        children
      ) : (
        <Redirect to='/' />
      )
    } 
    />
  )
}

function App() {
  return (
    <Router>
      <IssueProvider>
        <AuthProvider>
          <FetchProvider>
            <div className="App">
              {/* Public Routes */}
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {/* Private Routes */}
              <AuthenticatedRoute exact path='/profile/:id'>
                <Profile />
              </AuthenticatedRoute>
              <AuthenticatedRoute path='/profile/:id/edit'>
                <EditProfile />
              </AuthenticatedRoute>
              <AuthenticatedRoute path='/addissue'>
                <AddIssue />
              </AuthenticatedRoute>
              <AuthenticatedRoute path='/community/:zipcode'>
                <Community />
              </AuthenticatedRoute>
              <AuthenticatedRoute path='/logout'>
                <Logout />
              </AuthenticatedRoute>
            </div>
          </FetchProvider>
        </AuthProvider>
      </IssueProvider>
    </Router>
  );
}

export default App;
