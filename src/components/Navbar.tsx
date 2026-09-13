import { useState } from "react";
import Logo from "../assets/logo-text.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    
      <div className="logo">
        <img src={Logo} alt="Dev Stack Logo" />
      </div>

    
      <div className="nav-links">
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#technologies" onClick={closeMenu}>
          Technologies
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>

      
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#" onClick={closeMenu}>
            Home
          </a>

          <a href="#technologies" onClick={closeMenu}>
            Technologies
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      )}

      
      <div className="nav-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>

    </nav>
  );
}

export default Navbar;