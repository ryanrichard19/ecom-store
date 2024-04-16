import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/shop" className="footer-link">Shop</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </div>
        <div className="newsletter">
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copy-right">
        &copy; {new Date().getFullYear()} React DataViz Hub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
