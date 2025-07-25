import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-title">Faculty Web Portal</h2>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search..." className="navbar-search" />
        <a href="#allfaculty" className="navbar-link">All Faculty</a>
        <a href="#departments" className="navbar-link">Departments</a>
        <a href="#login" className="navbar-link">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
