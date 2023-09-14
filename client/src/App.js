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
        {/* Add a navigation bar or header component here if needed */}
        <Switch>
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/registry" component={RegistryPage} />
          <Route path="/profile" component={UserProfilePage} />
          {/* Add more routes for other pages */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;