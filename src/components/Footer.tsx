import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">◆</span>
            <span>Dev Stack</span>
          </div>

          <p>
            Build your ideal technology stack with the tools
            and technologies you love.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-links">
          <h3>Product</h3>

          <a href="#technologies">Technologies</a>
          <a href="#stack">Your Stack</a>
          <a href="#projects">Projects</a>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h3>Company</h3>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#careers">Careers</a>
        </div>

        {/* Legal */}
        <div className="footer-links">
          <h3>Legal</h3>

          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;