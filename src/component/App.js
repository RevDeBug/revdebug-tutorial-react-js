import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Invoices from './Invoices';

function App() {
  return (
    <Router>
      <Header />
      <div className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoices" element={<Invoices />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
