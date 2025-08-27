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
      <Routes>
        <Route path="/" element={<All searchTerm={searchTerm} />} />
        <Route path="/all" element={<All searchTerm={searchTerm} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faculty" element={<All searchTerm={searchTerm} />} />
        <Route path="/dept" element={<Department />} />
      </Routes>
    </Router>
  );
}

export default App;
