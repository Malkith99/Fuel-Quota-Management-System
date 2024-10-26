import React, { useState } from "react";
import axios from "axios";
import "./Scanner.css";

function Scanner() {
  const [nic, setNic] = useState(""); // State for input NIC
  const [vehicleOwnerData, setVehicleOwnerData] = useState(null);
  const [fillingAmount, setFillingAmount] = useState(0); // State for filling amount
  const [remainingAmount, setRemainingAmount] = useState(null);
  const [fillingAmountError, setFillingAmountError] = useState(false); // State for filling amount error

  // Function to fetch vehicle owner details based on NIC
  const fetchVehicleOwnerData = async() => {
    try{
      const response = await fetch(`http://localhost:8080/api/v1/qrcode/${nic}`);
      const ownerData = await response.json();
      setVehicleOwnerData(ownerData);
      setRemainingAmount(ownerData.remainingFuelQuota);
      setFillingAmountError(false);
    } catch (error) {    
      console.error("Error fetching vehicle owner data:", error);   
      alert("Error fetching vehicle owner data: " + error);
      setVehicleOwnerData(null);
    }
  };

  // Function to calculate the remaining amount
  const calculateRemaining = async() => {

    if (vehicleOwnerData) {
        if (fillingAmount > vehicleOwnerData.remainingFuelQuota) {
            setFillingAmountError(true); // Show error if fillingAmount exceeds remainingFuelQuota
        } else {
            setFillingAmountError(false); // Hide error if fillingAmount is valid
            const newRemainingAmount = vehicleOwnerData.remainingFuelQuota - fillingAmount;
            setRemainingAmount(newRemainingAmount);

            const updatedFuelManagement = {
                nic: vehicleOwnerData.nic,
                vehicleNumber: vehicleOwnerData.vehicleNumber,
                allocatedFuelQuota: vehicleOwnerData.allocatedFuelQuota,
                remainingFuelQuota: newRemainingAmount
              };

              try{
                const response = await axios.put(`http://localhost:8080/api/v1/qrcode`, updatedFuelManagement);
                console.log(response.data);
                if(response.status === 200){
                    alert(response.data);
                }
                setVehicleOwnerData(null);
              } catch (error) {
                console.error("Error updating remaining amount:", error);
              }            
          }
        }
  };

  return (
    <div className="display-container">
      <h2>Vehicle Owner Details</h2>
      <input
        type="text"
        value={nic}
        onChange={(e) => setNic(e.target.value)}
        placeholder="Enter NIC"
      />
      <button onClick={fetchVehicleOwnerData}>Fetch Details</button>

      {vehicleOwnerData && (
        <div className="vehicle-owner-details">
          <p>
            <strong>NIC:</strong> {vehicleOwnerData.nic}
          </p>
          <p>
            <strong>Vehicle Number:</strong> {vehicleOwnerData.vehicleNumber}
          </p>
          <p>
            <strong>Vehicle Type:</strong> {vehicleOwnerData.vehicleType}
          </p>
          <p>
            <strong>Remaining Fuel Quota:</strong> {vehicleOwnerData.remainingFuelQuota} liters
          </p>
        <div>
            <label htmlFor="fillingAmount">Filling Amount:</label>
            <input
                type="text"
                id="fillingAmount"
                value={fillingAmount}
                onKeyDown={(e) => {
                    // Allow only numbers and control keys
                    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => {
                    // Update only with numeric values
                    const value = e.target.value.replace(/\D/g, "");
                    setFillingAmount(value ? Number(value) : 0);

                    // Clear the error if filling amount is valid
                        if (Number(value) <= remainingAmount) {
                            setFillingAmountError(false);
                        }
                  }}
                placeholder="Enter filling amount"
                className={fillingAmountError ? "is-invalid" : ""}
            />
                {fillingAmountError && (
                <small className="text-danger">Enter a valid amount</small> // Error message
            )}
          </div>
          <div>
          <button onClick={calculateRemaining}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Scanner;
