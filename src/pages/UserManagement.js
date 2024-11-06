// frontend/src/pages/ManageUser.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './UserManagement.css'; // Import the CSS file

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);

  useEffect(() => {
    // Fetch users from the backend when the component mounts
    fetch('http://localhost:5000/api/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received from backend:', data);
        setUsers(data);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const removeUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setUsers(users.filter((user) => user.UserID !== userId)); // Update the local state
      } else {
        alert('Error removing user:', data.message);
      }
    } catch (error) {
      console.error('Error removing user:', error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="user-management">
        <h1>User Management</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.Username}</td>
                  <td>{user.Email}</td>
                  <td>{user.Password}</td>
                  <td>
                    <button className="remove-user" onClick={() => removeUser(user._id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
