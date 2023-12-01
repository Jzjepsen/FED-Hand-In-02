import React, { useState } from 'react';
import axios from 'axios';

export function AddNewManager() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // New state for success message

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log({ firstName, lastName, email, password });

            const token = localStorage.getItem('token'); 

            const response = await axios.post(
                'http://localhost:7181/api/Managers',
                { firstName, lastName, email, password },
                { headers: { 'Authorization': `Bearer ${token}` } }
            );

            console.log("Manager added");
            setSuccessMessage('Manager successfully added!'); // Set success message
            setError(''); // Reset any previous errors

        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Submit failed. Check that you have filled out all the required fields.');
            setSuccessMessage(''); // Reset any previous success messages
        }
    };

    return (
        <div className="container"> 
            <h2>Add a new manager</h2>
            <p>Enter manager information in the following text-boxes:</p>
            <form onSubmit={handleSubmit} className="form-shared">
            <input
                    className="form-input" 
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                />
            <input
            className="form-input" 
            type="text"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Last Name"
            required
            />
            <input
            className="form-input" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            />
            <input
            className="form-input" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            />                <button type="submit" className="form-button">Add manager</button>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
            </form>
        </div>
    );
}
