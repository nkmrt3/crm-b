import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import Navbar from "../components/Navbar";

function AdminPage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Function to extract the value of a cookie by its name
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };

    // Retrieve the username from the cookie
    const storedUsername = getCookie("username");

    // Update the state with the retrieved username
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="admin-page">
        <div className="admin-content">
          <img src="/images/admin-logo.png" alt="admin Logo" />
          <h1 className="admin-welcome-text">ADMIN</h1>

          {username ? (
            <>
              {/* Display the welcome message with the username */}
              <p className="admin-welcome-message">Welcome {username}!</p>
              <div className="admin-buttons">
                <button>MANAGE USERS</button>
                <button>MAKE TEAM</button>
              </div>
            </>
          ) : (
            <p>Please login first</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
