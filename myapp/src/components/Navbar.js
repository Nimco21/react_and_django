import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
  };

  return (
    <div>
      <nav
        className={`navbar mt-2 navbar-expand-lg ${
          darkMode ? 'navbar-dark bg-warning' : 'navbar-dark bg-warning'
        }`}
      >
        <div className=" container mt-2">
          <Link to="/" className="navbar-brand">
          <img src="log-removebg-preview.png" alt="" width="70px" height="70px"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-white me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CreateProduct" className="nav-link">
                  Add Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
               Contact
                </Link>
              </li>
              
              
          
            </ul>
            <button
              className="btn btn-outline-light"
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
