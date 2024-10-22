import React, { useState } from 'react';
// import './VehicleOwnerHome.css'; // Import styles
import './V_Dashboard.css';
const V_DashboardPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRegisterVehicleClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (

    
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome, Vehicle Owner</h1>
        <p>Manage your vehicles and fuel quotas easily.</p>
      </div>
      
      <div className="action-container">
        <button className="register-button" onClick={handleRegisterVehicleClick}>
          Register Vehicle
        </button>
      </div>

      {showForm && (
  <div className={`modal ${showForm ? 'show' : ''}`}>
    <div className="modal-content">
      <h2>Register Your Vehicle</h2>
      <form>
        <label>Vehicle Number</label>
        <input type="text" placeholder="Enter vehicle number" required />

        <label>Vehicle Model</label>
        <input type="text" placeholder="Enter vehicle model" required />

        <label>Engine Capacity (cc)</label>
        <input type="number" placeholder="Enter engine capacity" required />

        <label>Fuel Type</label>
        <select required>
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
        </select>

        <label>Chassis Number</label>
        <input type="text" placeholder="Enter chassis number" required />

        <div className="form-actions">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="cancel-button" onClick={handleCloseForm}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default V_DashboardPage; // Corrected export name
