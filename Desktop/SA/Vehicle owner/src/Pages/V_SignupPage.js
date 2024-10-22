import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom'; // Import from react-router-dom v6

import './V_SignupPage.css';

function V_SignupPage() {
    const navigate = useNavigate(); // Hook for navigation
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle form submission
    const handleSignup = (e) => {
        e.preventDefault();
        
        // Simulate successful signup
        alert("Signup successful!");
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit" className="auth-button">Sign Up</button>
                    <button className="auth-button google">Join with Google</button>
                </form>
            </div>
        </div>
    );
}

export default V_SignupPage;
