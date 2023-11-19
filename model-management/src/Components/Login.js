import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let navigate=useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://localhost:7181/api/Account/login', { email, password });
            localStorage.setItem('token', response.data.token);
            // Redirect til en anden side eller opdater UI
            //alert('Login was succeded!')
            navigate("/addNewModel");
            //console.log('Direct to addNewModel');
        
            //<Navigate to="/addNewModel" replace={true}/>
        } catch (error) {
            setError('Login fejlede. Tjek din email og password.');
        }
    };

    return (
        <div>
        <h2>Login page</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Log ind</button>
            {error && <p>{error}</p>}
        </form>
        </div>
    );
}



