// frontend/src/components/EditUserPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditUserPage.css";
import Navbar from "../components/Navbar";

function EditUserPage() {
  const [username, setUsername] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [userData, setUserData] = useState({
    Username: "",
    Email: "",
    FirstName: "",
    LastName: "",
    JobTitle: "",
    Department: "",
    Phone: "",
    HireDate: "",
    Role: "",
  });

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCheckUsername = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/check-username/${username}`);
      const data = await response.json();

      console.log(data); // Log the response for debugging

      if (data.exists) {
        setUserExists(true);
        setUserData(data.userData);
      } else {
        setUserExists(false);
        setUserData({
          Username: "",
          Email: "",
          FirstName: "",
          LastName: "",
          JobTitle: "",
          Department: "",
          Phone: "",
          HireDate: "",
          Role: "",
        });
      }
    } catch (error) {
      console.error('Error checking username:', error);
    }
  };

  const handleEditUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/edit-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.success) {
        console.log('User information updated successfully');
        navigate('/login'); // Redirect to a thank you page or any other page after editing
      } else {
        console.error('Error updating user information:', data.message);
      }
    } catch (error) {
      console.error('Error during user information update:', error);
    }
  };

  return (
    <div className="full">
      <Navbar />
      <h1>EDIT USER</h1>
      <div className="edit-user-form">
        <form onSubmit={handleCheckUsername}>
          <div className="form-group">
            <label htmlFor="username">Enter Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <button type="submit">Check Username</button>
        </form>

        {userExists && (
          <form onSubmit={handleEditUser}>
            {/* Display user information for editing */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.Email}
                onChange={(e) => setUserData({ ...userData, Email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userData.FirstName}
                onChange={(e) => setUserData({ ...userData, FirstName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userData.LastName}
                onChange={(e) => setUserData({ ...userData, LastName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title:</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={userData.JobTitle}
                onChange={(e) => setUserData({ ...userData, JobTitle: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={userData.Department}
                onChange={(e) => setUserData({ ...userData, Department: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={userData.Phone}
                onChange={(e) => setUserData({ ...userData, Phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="hireDate">Hire Date:</label>
              <input
                type="date"
                id="hireDate"
                name="hireDate"
                value={userData.HireDate}
                onChange={(e) => setUserData({ ...userData, HireDate: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <input
                type="text"
                id="role"
                name="role"
                value={userData.Role}
                onChange={(e) => setUserData({ ...userData, Role: e.target.value })}
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        )}

        {!userExists && username && (
          <p>User not found. Please enter a valid username.</p>
        )}
      </div>
    </div>
  );
}

export default EditUserPage;
