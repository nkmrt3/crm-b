import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src="/images/company-logo.png" alt="Company Logo" />
        </div>
        <div className="login-container">
          <button><Link to="/login" className="link-text">LOGIN</Link></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
