import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import DogsPage from './Components/DogsPage'; // Importera din katalogsida
import DetailPage from './Components/DetailPage'; // Importera din detaljsida

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Doggy Daycare</h1>

        {/* Lägg till en knapp för att navigera till DogsPage */}
        <Link to="/">Go to Dogs Page</Link>

        {/* Router för att hantera vägarna */}
        <Routes>
          <Route path="/" element={<DogsPage />} /> {/* Katalogsidan */}
          <Route path="/dog/:name" element={<DetailPage />} /> {/* Detaljsidan */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;