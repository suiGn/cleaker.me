import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';
import Contacts from './views/Contacts';
import Wallet from './views/Wallet';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/wallet">Wallet</Link>
      </nav>
      <Routes>
        <Route path="/wallet">
          <Wallet />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
