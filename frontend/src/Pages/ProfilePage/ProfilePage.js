import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Use this hook to access navigation state
import './ProfilePage.css';

function ProfilePage() {
    const location = useLocation(); // Get the vehicleOwnerDataId from navigation state
    const { nic } = location.state || {};  // Extract NIC from the state
    const [vehicleOwnerData, setVehicleOwnerData] = useState(null); // Store vehicle owner data
    const [loading, setLoading] = useState(true);  // Loading state for async data
    const [error, setError] = useState(null);  // Error state


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
        <div className="profile-page-container">
            <h2>Vehicle Owner Details</h2>
            <div className="vehicle-owner-details">
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
}

export default ProfilePage;