import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import DogsPage from './Components/DogsPage'; 
import DetailPage from './Components/DetailPage'; 

import './App.css';

function App() {
  return (
    <Router>
      <div className="container"> 
        <h1>Doggy Daycare</h1>

        <nav>
          <Link to="/dogs/"> To Dogs Page</Link>
          <Link to="/home/">back to home</Link>
        </nav>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        
        <Routes>
          <Route path="/dogs/" element={<DogsPage />} /> 
          <Route path="/dogs/:name" element={<DetailPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;