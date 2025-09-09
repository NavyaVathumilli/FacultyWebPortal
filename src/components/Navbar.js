import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () =>{
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-title">
          <Link to="/" className="navbar-title">Faculty Web Portal</Link>
        </h2>
      </div>
      <div className="navbar-center">
        <Link to="/Faculty" className="navbar-link">FacultyList</Link>
        <Link to="/dept" className="navbar-link">Departments</Link>
        <Link to="/login" className="navbar-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
