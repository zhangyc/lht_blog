// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Routes from './routes';

function App() {
  return (
      <Router>
        <Navbar />
        <div className="container mt-3">
          <Routes />
        </div>
          <Footer />
      </Router>
  );
}

export default App;