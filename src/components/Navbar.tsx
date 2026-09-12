import Logo from "../assets/logo-text.png";
import "./Navbar.css";



function Navbar() {
    return (
        <nav className="navbar">
          
       <img src={Logo} alt="Logo" />
        
        <div className="nav-links">
         
        <a href="#">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
    );
};

export default Navbar;