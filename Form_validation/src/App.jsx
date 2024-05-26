// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './FormComponent';
import SuccessComponent from './SuccessComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/success" element={<SuccessComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
