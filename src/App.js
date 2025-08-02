import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Faculty from './components/Faculty';
import Department from './components/Department';
import Login from './components/Login';
import All from './components/All';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navbar setSearchTerm={setSearchTerm} />
      <All searchTerm={searchTerm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Faculty" element={<Faculty />} />
        <Route path="/dept" element={<Department />} />
      </Routes>
    </Router>
  );
}

export default App;
