import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css"; // Add CSS as needed

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    // Check if credentials are for admin
    if (email === "admin@gmail.com" && password === "admin") {
      console.log("Admin login successful");
      // Redirect to admin page
      navigate("/adminHome");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8082/api/v1/login", {
        email,
        password,
      });

      // If login is successful, save user data to local storage
      localStorage.setItem("user", JSON.stringify(response.data));

      // Redirect to /profile page after successful login
      navigate("/VO/profile", { state: { nic: response.data.nic } });
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="container login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p className="register-prompt">
        Haven't an account?{" "}
        <button
          className="btn btn-primary"
          onClick={() => navigate("/VO/registration")}
        >
          Register
        </button>
      </p>
    </div>
  );
}

export default LoginPage;
