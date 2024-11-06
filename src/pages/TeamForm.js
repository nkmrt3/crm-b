import React, { useState } from "react";
import "./TeamForm.css";
import Navbar from "../components/Navbar";

function TeamForm() {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLead: "",
    teamMembers: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://3.111.36.54:5000/api/create-team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Team created successfully');
        // You can add logic to redirect or show a success message
      } else {
        console.error('Error creating team:', data.message);
        // You can add logic to show an error message
      }
    } catch (error) {
      console.error('Error during team creation:', error);
      // You can add logic to show an error message
    }
  };

  return (
    <div className="full">
      <Navbar />
      <h1>TEAM FORM</h1>
      <div className="team-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="teamName">Team Name:</label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="teamLead">Team Lead:</label>
            <input
              type="text"
              id="teamLead"
              name="teamLead"
              value={formData.teamLead}
              onChange={handleChange}
              required // Ensure teamLead is required
            />
          </div>
          <div className="form-group">
            <label htmlFor="teamMembers">Team Members:</label>
            <input
              type="text"
              id="teamMembers"
              name="teamMembers"
              value={formData.teamMembers}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TeamForm;
