// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import './App.css';

function App() {
  return (
    <Router>
      <UserDetails />
    </Router>
  );
}

export default App;
