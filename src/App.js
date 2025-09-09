import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Department from './components/Department';
import Login from './components/Login';
import Navbar from './components/Navbar';
import FacultyDashboard from './components/FacultyDashboard';
import FacultyList from './components/FacultyList';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext'; // ✅ Import AuthProvider

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AuthProvider>
      <Router>
        <AppContent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Router>
    </AuthProvider>
  );
}

function AppContent({ searchTerm, setSearchTerm }) {
  const location = useLocation();

  // routes where navbar should be hidden
  const hideNavbarRoutes = ["/facultydashboard"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && (
        <Navbar setSearchTerm={setSearchTerm} />
      )}
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/logout" element={<Home searchTerm={searchTerm} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faculty" element={<FacultyList />} />
        <Route path="/dept" element={<Department />} />
        <Route path="/facultydashboard" element={<FacultyDashboard />} />
      </Routes>
    </>
  );
}

export default App;
