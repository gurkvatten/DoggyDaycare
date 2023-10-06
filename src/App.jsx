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
          <Link to="/"> To Dogs Page</Link>
        </nav>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <Routes>
          <Route path="/" element={<DogsPage />} /> 
          <Route path="/dog/:name" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;