// components/LogoutButton.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Destroy the username cookie by setting its expiration to a past date
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to the home page ("/")
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className="link-text">
      Logout
    </button>
  );
};

export default LogoutButton;
