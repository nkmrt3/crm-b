// frontend/src/components/LoginPage.js

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";
import Navbar from "../components/Navbar";

function LoginPage() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password",
    internal: "Internal server error",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { uname, pass } = event.target.elements;

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: uname.value,
          password: pass.value,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Set a cookie with the username
        document.cookie = `username=${data.userData.Username}; path=/`;

        setIsSubmitted(true);
        setUserData(data.userData);

        // Redirect based on the user's role
        switch (data.role) {
          case 'admin':
            navigate('/adminpage');
            break;
          case 'manager':
            navigate('/managerpage');
            break;
          case 'user':
            navigate('/userpage');
            break;
          default:
            console.error('Unknown role:', data.role);
        }
      } else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessages({ name: "uname", message: errors.internal });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderUserData = userData && Object.keys(userData).length > 0 && (
    <div className="user-data">
      <h2>User Data</h2>
      {Object.entries(userData).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
      <hr />
    </div>
  );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? (
            <>
              <div>User is successfully logged in</div>
              {renderUserData}
            </>
          ) : (
            renderForm
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
