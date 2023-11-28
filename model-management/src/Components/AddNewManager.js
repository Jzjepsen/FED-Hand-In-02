import React, { useState } from 'react';
import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { NavBar } from './Components/NavBar';

export function AddNewManager(){
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log({firstName, lastName, email, password });
            const response = await axios.post('https://localhost:7181/api/Managers', {firstName, lastName, email, password });
            localStorage.setItem('token', response.data.token);
            console.log("Manager added")
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Submit fejlede. Tjek at du har udfyldt alle de påkrævede felter.');
        }
    };
    return (
        <div className="container"> 
            <h2>Add a new manager</h2>
            <p>Enter manager-information in the following text-boxes:</p>
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
            />
                <button type="submit" className="form-button"> {/* Apply button styling */}
                    Add manager
                </button>
                {error && <p className="error-message">{error}</p>}
        </form>
        </div>
    );
}

