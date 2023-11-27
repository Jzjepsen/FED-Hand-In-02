import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { type } from '@testing-library/user-event/dist/type';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // instantiate router      

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
    
        try {
            const response = await axios.post(
                'http://localhost:7181/api/Account/login', 
                { email, password }
            );
            
            const { jwt } = response.data; // Get jwt from response      
            localStorage.setItem('token', jwt); // Store the JWT token
            const decodedToken = jwtDecode(jwt);  // Decode token using the 'jwt' variable

            let role = ''; 
    
            if(decodedToken){
            role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']; // Get role from decoded token
            }
            if(role==''){
                throw new Error('Invalid Token');
            }
            switch (role) {
                case 'Manager':
                    navigate('/Manager');
                    break;
                case 'Model':
                    navigate('/Model');
                    break;
                default:
                    navigate('/'); // Default case if role is not matched
                    break;
            }  
        } catch (error) {
            setError(error.message);
        } finally{
            setLoading(false);
        }
    }    

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



