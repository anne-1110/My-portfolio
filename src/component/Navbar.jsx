import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="navbar">
      <div className="logo">
        My Logo
      </div>

      <button 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="nav-links">
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>

        <a href="#email" className="email-icon">
          ✉
        </a>
      </div>

       {/* Mobile fullscreen menu overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul>
            <li>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;