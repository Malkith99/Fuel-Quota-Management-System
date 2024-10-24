import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import V_RegistrationPopup from './V_RegistrationPopup'; 
// Import the popup component
// import './AuthForm.css'; 

function V_LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle form submission for login
    const handleLogin =async (e) => {
        e.preventDefault();
        setError('');  // Clear previous error
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth', {
                email,
                password,
            });
            
            // If login is successful, save user data to local storage
            localStorage.setItem('user', JSON.stringify(response.data));
            
            // Redirect to /home page after successful login
            navigate('/V_dashboard', { state: { nic: response.data.nic } });
        } catch (error) {
            console.error('Login failed:', error);
            setError('Invalid Email or Password');
        }
       
    };

    // Handle popup open/close for registration
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

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
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="auth-button">Login</button>
                </form>
                <p>
                    <button onClick={openPopup} className="register-link">
                        Register the Vehicle
                    </button>
                </p>

                {isPopupOpen && <V_RegistrationPopup onClose={closePopup} />}
            </div>
        </div>
    );
}

export default V_LoginPage;
