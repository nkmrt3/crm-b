import React, { useState } from "react";
import { Users } from "./Mongo.js";
import "./LoginPage.css";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = Users.find((user) => user.Username === uname.value);

    if (userData) {
      // Compare plain text passwords (for testing purposes only)
      if (userData.Password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // Set login state to true
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
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
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? (
          <div>User is successfully logged in</div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default App;
