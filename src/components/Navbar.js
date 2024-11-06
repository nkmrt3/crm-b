// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import './Navbar.css'; // Create a CSS file for styling

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/images/company-logo.png" alt="Company Logo" />
      </div>

      <p className="navbar-text">
        InteractCRM Company - Customer Relations Management Solutions
      </p>

      <div className="navbar-right">
        <div className="profile-icon">
          <img src="/images/profile-icon.png" alt="Profile Icon" />
        </div>
        
        {/* Include the LogoutButton component */}
        <LogoutButton />
      </div>
    </div>
  );
}

export default Navbar;
