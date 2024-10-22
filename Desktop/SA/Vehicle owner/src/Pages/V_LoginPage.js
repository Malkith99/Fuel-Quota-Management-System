import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './AuthForm.css'; 


function V_LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Simulated function to handle form submission
    const handleLogin = (e) => {
        e.preventDefault();

        // Simulating a login success
        console.log('Login successful with email:', email);

        // Redirect to the dashboard as a simulation of a successful login
        navigate('/V_dashboard');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
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
                    <button type="submit" className="auth-button">Login</button>
                </form>
                <p><a href="/signup">Create an account</a></p>
            </div>
        </div>
    );
}

export default V_LoginPage;
