import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sair from './Sair'; 
import Salas from './Salas'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Sair />} /> 
          <Route path="/salas" element={<Salas />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
