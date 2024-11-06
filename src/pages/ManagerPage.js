import React, { useState, useEffect } from "react";
import "./ManagerPage.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function ManagerPage() {
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
      <div className="manager-page">
        <div className="manager-content">
          <img src="/images/manager-icon.png" alt="manager icon" />
          <h1 className="manager-welcome-text">MANAGER</h1>

          {username ? (
            <>
              {/* Display the welcome message with the username */}
              <h2 className="manager-welcome-text">Welcome {username} to the console</h2>
              <div className="manager-buttons">
                <button>
                  <Link to="/oppForm" className="link-text">
                    ADD OPPORTUNITY
                  </Link>
                </button>
                <button>
                  <Link to="/custForm" className="link-text">
                    ADD CUSTOMER
                  </Link>
                </button>
                <button>
                  <Link to="/interactionForm" className="link-text">
                    ADD INTERACTION
                  </Link>
                </button>
                <button>
                  <Link to="/taskForm" className="link-text">
                    ADD TASK
                  </Link>
                </button>
                <button>
                  <Link to="/userForm" className="link-text">
                    ADD USER
                  </Link>
                </button>
                <button>
                  <Link to="/teamForm" className="link-text">
                    ADD TEAM
                  </Link>
                </button>
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

export default ManagerPage;
