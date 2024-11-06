import React, { useState } from "react";
import "./TaskForm.css"; // Create a CSS file for styling
import Navbar from "../components/Navbar";

function TaskForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        assignee: "",
        status: "",
        createdDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData); // You can replace this with your logic
    };

    return (
        <div className="full">
            <Navbar></Navbar>
            <h1>
                TASK FORM
            </h1>
            <div className="task-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate">Due Date:</label>
                        <input
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="assignee">Assignee:</label>
                        <input
                            type="text"
                            id="assignee"
                            name="assignee"
                            value={formData.assignee}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <input
                            type="text"
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="createdDate">Created Date:</label>
                        <input
                            type="date"
                            id="createdDate"
                            name="createdDate"
                            value={formData.createdDate}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
