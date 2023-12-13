import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';  
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="mb-4">NASA Asteroids Explorer</h1>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/asteroids/:asteroidId" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
