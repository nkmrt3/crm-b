// frontend/src/components/UserForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserForm.css";
import Navbar from "../components/Navbar";

function UserForm() {
    const [formData, setFormData] = useState({
      Username: "", // <-- Update field names to match the MongoDB schema
      Password: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        console.log('User added successfully');
        navigate('/thanks');
      } else {
        console.error('Error adding user:', data.message);
      }
    } catch (error) {
      console.error('Error during user addition:', error);
    }
  };

  return (
    <div className="full">
      <Navbar />
      <h1>USER FORM</h1>
      <div className="user-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="Username"
              name="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="Password"
              name="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title:</label>
            <input
              type="text"
              id="JobTitle"
              name="JobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="Department"
              name="Department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="Phone"
              name="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hireDate">Hire Date:</label>
            <input
              type="date"
              id="HireDate"
              name="HireDate"
              value={formData.hireDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              id="Role"
              name="Role"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
