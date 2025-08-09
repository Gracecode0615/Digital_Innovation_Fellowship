import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Test from './pages/Test';
import Homepage from './pages/Homepage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Homepage />} />

         <Route path="/" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
