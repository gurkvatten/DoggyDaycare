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
          <Link to="/">Go to Dogs Page</Link>
        </nav>
        {}
        <Routes>
          <Route path="/" element={<DogsPage />} /> {}
          <Route path="/dog/:name" element={<DetailPage />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;