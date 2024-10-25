import React, { useState } from 'react';
import axios from "axios";
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.css';


function RegistrationPage() {
    const navigate = useNavigate(); // For redirecting to home page
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const[nic, setNIC] = useState('');
    const[vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [fuelQuota, setFuelQuota] = useState(0);
    const [qrCode, setQrCode] = useState(null);
    const [showQrModal, setShowQrModal] = useState(false); // State to show/hide modal

    // Function to handle form submission
    const handleSignup = async(e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError(true); // Show password error if they don't match
            return;
        } else {
            setPasswordError(false); // Reset the error if passwords match
        }

        let quota = 0;
        switch (vehicleType) {
            case 'Motorbicycle':
               quota = 7; 
                break;
            case 'Threewheel':
                quota = 15;
                break;
            case 'Car':
                quota = 30; 
                break;
            case 'Lorry':
                quota = 40; 
                break;
            default:
                quota = 0; 
        }
        setFuelQuota(quota);

        const newVehicleOwner={nic,email, name, password,vehicleNumber,vehicleType,fuelQuota:quota}; 
        console.log(newVehicleOwner);       
        try {
            const response = await axios.post('http://localhost:8080/api/v1/vehicleOwner', newVehicleOwner);
            console.log(response.data);
            setQrCode(`${nic}-${vehicleNumber}`); // Set the data for the QR code
            setShowQrModal(true); // Show the modal to display the QR code
            alert("Signup successful!");
        } catch (error) {
            console.log(error);
            if (error.response) {
                if (error.response.status === 409) {
                    alert("Error: " + error.response.data); // Conflict (Vehicle owner already exists)
                } else if (error.response.status === 400) {
                    alert("Validation Error: " + error.response.data); // Bad request (Vehicle validation failed)
                } else {
                    alert("An unexpected error occurred.");
                }
            } else if (error.request) {
                // The request was made, but no response was received
                console.log(error.request);
                alert("No response from the server.");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                alert("An error occurred: " + error.message);
            }

        }
            
    };

    // Function to download the QR code as an image
    const downloadQRCode = () => {
        const canvas = document.getElementById('qrCodeCanvas');
        const pngUrl = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream'); // Convert to a downloadable format
    
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = `${vehicleNumber}-qr-code.png`; // Name the file using the Vehicle Number
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

     // Function to convert QR code to base64
    const getQrCodeBase64 = () => {
        const canvas = document.getElementById('qrCodeCanvas');
        return canvas.toDataURL('image/png');
    };

    // Function to send QR code to the server and navigate to home page
    const handleFinish = async () => {
        try {
            const qrCodeBase64 = getQrCodeBase64(); // Convert QR code to base64
            console.log(qrCodeBase64);
            const updatedVehicleOwner = { nic,email, name, password,vehicleNumber,vehicleType,fuelQuota, qrCode: qrCodeBase64 }; // Include QR code in the request
            console.log(updatedVehicleOwner);
            const response = await axios.put('http://localhost:8080/api/v1/vehicleOwner', updatedVehicleOwner);
            console.log(response.status);

            if (response.status === 200) {
                console.log(response);
                // Redirect to home page and pass the vehicle owner ID
                navigate('/profile', { state: { nic } });
            }
        } catch (error) {
            console.log("Error updating QR code:", error);
        }
    };

    return (
        <div className="container">
            <h2>Create Account</h2>
            <form onSubmit={handleSignup}>     {/* method that calling when pressing submit button*/}
                <div className="form-group">
                        <label className="form-label">NIC</label>
                        <input type="text" className="form-control" id="nic" placeholder="Enter Your NIC without letters" 
                        onChange={(e)=>{
                            setNIC(e.target.value);
                        }} required></input>
                </div>
                <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Your Name" 
                        onChange={(e)=>{
                            setName(e.target.value);
                        }}
                        required>
                        </input>
                </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter Your Email "
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}required></input>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" placeholder="Enter Your Password "
                        onChange={(e)=>{
                        setPassword(e.target.value);
                        }}required></input>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Confirm Password</label>
                        <input type="text"
                          className={`form-control ${passwordError ? 'is-invalid' : ''}`} // Add red border if passwords don't match
                          id="password" 
                          placeholder="Confirm Your Password "
                        onChange={(e)=>{
                        setConfirmPassword(e.target.value);
                        }}required></input>
                        {passwordError && (
                        <small className="text-danger">Passwords do not match!</small> // Error message
                        )}
                    </div>
                    <div className="form-group">
                                <label htmlFor="vehicleNumber" className="form-label">Vehicle Number</label>
                                <input type="text" className="form-control" id="vehicleNumber" 
                                    placeholder="Enter Vehicle Number"
                                    onChange={(e) => setVehicleNumber(e.target.value)}
                                    required>
                                </input>
                            </div>
                    <div>
                    <div className="form-group">
                                <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
                                <select 
                                        className="form-control" 
                                        id="vehicleType" 
                                        onChange={(e) => setVehicleType(e.target.value)} 
                                        required
                                    >
                                        <option value="" disabled selected>Select Vehicle Type</option>
                                        <option value="Motorbicycle">Motor Bicycle</option>
                                        <option value="Threewheel">Three Wheeler</option>
                                        <option value="Car">Car</option>
                                        <option value="Lorry">Lorry</option>
                                    </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>

                    </div>    
            </form>
            {/* <button type="button" className="btn btn-primary" onClick={() => handleGenerateQR()}>QR</button> */}
            {showQrModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowQrModal(false)}>&times;</span>
                        <h3>Your QR Code</h3>
                        <p>{vehicleNumber}</p>
                        <QRCodeCanvas
                            id="qrCodeCanvas"
                            value={qrCode} // Combined data: NIC and Vehicle Number
                            size={250} // Size of the QR code
                            level={"H"} // Error correction level
                        />
                        <div>
                            <button className="btn btn-secondary" onClick={downloadQRCode}>
                                Download QR Code
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-secondary" onClick={handleFinish}>
                                Finish 
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default RegistrationPage;