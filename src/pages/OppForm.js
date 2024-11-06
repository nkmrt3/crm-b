import React, { useState } from "react";
import "./OppForm.css"; // Create a CSS file for styling
import Navbar from "../components/Navbar";

function OppForm() {
    const [formData, setFormData] = useState({
        opportunityName: "",
        contactName: "",
        stage: "",
        value: "",
        closeDate: "",
        createdDate: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = "http://3.111.36.54:5000/api/opportunity"; // Updated endpoint

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
                console.log('Opportunity added successfully:', data);
            } else {
                console.error('Failed to add opportunity:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="full">
            <Navbar></Navbar>
            <h1>
                OPPORTUNITY FORM
            </h1>
            <div className="opportunity-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="opportunityName">Opportunity Name:</label>
                        <input
                            type="text"
                            id="opportunityName"
                            name="opportunityName"
                            value={formData.opportunityName}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                        <label htmlFor="stage">Stage:</label>
                        <input
                            type="text"
                            id="stage"
                            name="stage"
                            value={formData.stage}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="value">Value:</label>
                        <input
                            type="text"
                            id="value"
                            name="value"
                            value={formData.value}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="closeDate">Close Date:</label>
                        <input
                            type="date"
                            id="closeDate"
                            name="closeDate"
                            value={formData.closeDate}
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

export default OppForm;
