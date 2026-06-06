import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-title">Recipe Finder</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add" className="nav-add-btn">+ Add Recipe</Link>
      </div>
    </nav>
  );
}

export default Navbar;