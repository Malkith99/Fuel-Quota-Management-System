import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'; // Add CSS as needed

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');  // Clear previous error
        try {
            const response = await axios.post('http://localhost:8080/api/v1/login', {
                email,
                password,
            });
            
            // If login is successful, save user data to local storage
            localStorage.setItem('user', JSON.stringify(response.data));
            
            // Redirect to /home page after successful login
            navigate('/profile', { state: { nic: response.data.nic } });
        } catch (error) {
            console.error('Login failed:', error);
            setError('Invalid Email or Password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
