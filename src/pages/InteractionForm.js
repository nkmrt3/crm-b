import React, { useState } from "react";
import "./InteractionForm.css"; // Create a CSS file for styling
import Navbar from "../components/Navbar";

function InteractionForm() {
    const [formData, setFormData] = useState({
        contactName: "",
        type: "",
        interactionDate: "",
        participants: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = "http://localhost:5000/api/interaction"; // Updated endpoint

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Interaction added successfully:', data);
            } else {
                console.error('Failed to add interaction:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="full">
            <Navbar></Navbar>
            <h1>
                INTERACTION FORM
            </h1>
            <div className="interaction-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="contactName">Contact Name:</label>
                        <input
                            type="text"
                            id="contactName"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type:</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="interactionDate">Interaction Date:</label>
                        <input
                            type="date"
                            id="interactionDate"
                            name="interactionDate"
                            value={formData.interactionDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="participants">Participants:</label>
                        <input
                            type="text"
                            id="participants"
                            name="participants"
                            value={formData.participants}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes:</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default InteractionForm;
