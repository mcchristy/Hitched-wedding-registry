import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import RegistryPage from './components/RegistryPage';
import UserProfilePage from './components/UserProfilePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup"  element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registry" element={<RegistryPage/>} />
          <Route path="/profile" element={<UserProfilePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;