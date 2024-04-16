import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.scss'; // Make sure to create a Header.scss file with your styles
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        LOGO
        {/* If you have a logo image, use <img src="path-to-logo.png" alt="Logo" /> */}
      </div>
      <nav className="navigation">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
