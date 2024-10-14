import React, { useState } from 'react';
import axios from "axios";
import { QRCodeCanvas } from 'qrcode.react';
import './RegistrationPage.css';


function RegistrationPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const[nic, setNIC] = useState('');
    const[vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [fuelQuota, setFuelQuota] = useState(0);
    const [showModal, setShowModal] = useState(false); // State to show/hide modal
    const [qrCode, setQrCode] = useState(null);
    const [showQrModal, setShowQrModal] = useState(false); // State to show/hide modal

    // Function to handle form submission
    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError(true); // Show password error if they don't match
            return;
        } else {
            setPasswordError(false); // Reset the error if passwords match
        }

        const newVehicleOwner={nic,email, name, password};        
        axios.post('http://localhost:8080/api/v1/vehicleOwner', newVehicleOwner)
        .then(response => {
            console.log(response.data);
            setShowModal (true);
            alert("Signup successful!");
        }).catch(error => {
            console.log(error);
        });
        
    };
    // Function to handle vehicle details submission
    const handleVehicleDetailsSubmit = (e) => {
        e.preventDefault();
        console.log(vehicleType);
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

        const updatedVehicleOwner = { nic,email, name, password,vehicleNumber,fuelQuota:quota };
        console.log("Vehicle details:", updatedVehicleOwner);
        axios.put('http://localhost:8080/api/v1/vehicleOwner', updatedVehicleOwner)
        .then(response => {
            console.log(response.data); 
            // setQrCode(`${nic}-${vehicleNumber}`) // Format: "NIC-VehicleNumber"
            // setShowQrModal(true); // Show the QR modal on success

        })
        .catch(error => {
            console.log(error);
        });
        //setShowModal(false); // Close the modal after submission
    };

    const handleGenerateQR = () => {
        // Generate QR code using the combination of NIC and vehicleNumber
        setQrCode(`${nic}-${vehicleNumber}`); // Format: "NIC-VehicleNumber"
        console.log(qrCode);
        setShowQrModal(true); // Show the QR modal
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
                    <div>
                    <button type="submit" className="btn btn-primary">Signup</button>

                    </div>    
            </form>
            <button type="button" className="btn btn-primary" onClick={() => handleGenerateQR()}>QR</button>
            {/* Modal for Vehicle Data */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h3>Enter Vehicle Details</h3>
                        <form onSubmit={handleVehicleDetailsSubmit}>
                            <div className="form-group">
                                <label htmlFor="vehicleNumber" className="form-label">Vehicle Number</label>
                                <input type="text" className="form-control" id="vehicleNumber" 
                                    placeholder="Enter Vehicle Number"
                                    onChange={(e) => setVehicleNumber(e.target.value)}
                                    required>
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
                                <select 
                                        className="form-control" 
                                        id="vehicleType" 
                                        onChange={(e) => setVehicleType(e.target.value)} 
                                        required // Make this field required
                                    >
                                        <option value="" disabled selected>Select Vehicle Type</option>
                                        <option value="Motorbicycle">Motor Bicycle</option>
                                        <option value="Threewheel">Three Wheeler</option>
                                        <option value="Car">Car</option>
                                        <option value="Lorry">Lorry</option>
                                    </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Register Vehicle</button>
                        </form>
                    </div>
                </div>
            )}
            {showQrModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowQrModal(false)}>&times;</span>
                        <h3>Your QR Code</h3>
                        <p>Vehicle Number: {vehicleNumber}</p>
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
                    </div>
                </div>
            )}

        </div>
    );
}

export default RegistrationPage;