import React, { useState,useEffect } from 'react';
import axios from 'axios';
// import './VehicleOwnerHome.css'; // Import styles
import './V_Dashboard.css';
import { useLocation } from 'react-router-dom';

const V_DashboardPage = () => {
  const location = useLocation(); // Get the vehicleOwnerDataId from navigation state
  const { nic } = location.state || {};  // Extract NIC from the state
  const [vehicleOwnerData, setVehicleOwnerData] = useState(null); // Store vehicle owner data
  const [loading, setLoading] = useState(true);  // Loading state for async data
  const [error, setError] = useState(null);  // Error state

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (nic) {
        // Fetch vehicle owner data using the vehicleOwnerDataId(nic)
        axios.get(`http://localhost:8080/api/v1/vehicleOwner/${nic}`)
        .then(response => {
            setVehicleOwnerData(response.data); // Set the fetched data
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching vehicle owner data:', error);
            setError('Error fetching vehicle owner data');
            setLoading(false);
        });

    }
}, [nic]);

          if (loading) {
            return <p>Loading...</p>;
          }

          if (error) {
            return <p>{error}</p>;
          }

          if (!vehicleOwnerData) {
            return <p>No vehicle owner data found for NIC: {nic}</p>;
          }
            // Function to download QR code as an image
            const downloadQRCode = () => {
                if (vehicleOwnerData && vehicleOwnerData.qrCode) {
                    const link = document.createElement('a');
                    link.href = vehicleOwnerData.qrCode;  // The base64 image data
                    link.download = `${vehicleOwnerData.vehicleNumber}-qr-code.png`;  // Filename for the QR code image
                    document.body.appendChild(link); // Append link to the body
                    link.click();  // Simulate click to trigger download
                    document.body.removeChild(link); // Remove link after download
                }
            };



  return (

    
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome, Vehicle Owner</h1>
        <p>Manage your vehicles and fuel quotas easily.</p>
      </div>
      
      <div className="action-container">
      <p><strong>Name:</strong> {vehicleOwnerData.name}</p>
                <p><strong>Email:</strong> {vehicleOwnerData.email}</p>
                <p><strong>NIC:</strong> {vehicleOwnerData.nic}</p>
                <p><strong>Vehicle Number:</strong> {vehicleOwnerData.vehicleNumber}</p>
                <p><strong>Vehicle Type:</strong> {vehicleOwnerData.vehicleType}</p>
                <p><strong>Fuel Quota:</strong> {vehicleOwnerData.fuelQuota} liters</p>
                {vehicleOwnerData.qrCode && (
                    <div>
                    <p><strong>QR Code:</strong></p>
                    <img src={vehicleOwnerData.qrCode} alt="Vehicle QR Code" />
                    <div>
                        <button className="btn btn-secondary" onClick={downloadQRCode}>
                            Download QR Code
                        </button>
                    </div>
                </div>
                )}

      </div>


    
  </div>


    
  );
};

export default V_DashboardPage; // Corrected export name
