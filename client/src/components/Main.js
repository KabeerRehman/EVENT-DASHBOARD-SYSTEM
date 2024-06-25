import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Update from './Update';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
};

export default Main;

