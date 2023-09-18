import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import RegistryPage from './components/RegistryPage';
import UserProfilePage from './components/UserProfilePage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/registry" component={RegistryPage} />
          <Route path="/profile" component={UserProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;