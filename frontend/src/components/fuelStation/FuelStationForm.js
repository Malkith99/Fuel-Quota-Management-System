import React, { useState } from "react";
import {
  saveFuelStation,
  updateFuelStation,
} from "../../services/fuelStationService";
import "./FuelStationForm.css"; // Import the custom CSS file
import { useNavigate } from 'react-router-dom';

const FuelStationForm = ({ fuelStation }) => {
  const [name, setName] = useState(fuelStation ? fuelStation.name : "");
  const [location, setLocation] = useState(
    fuelStation ? fuelStation.location : ""
  );
  const [fuelAmount, setAmount] = useState(fuelStation ? fuelStation.fuelAmount : "");
  const navigate = useNavigate();
  // const generateId = Math.random();

  const handleSubmit = (e) => {
    e.preventDefault();
    const stationData = { name, location, fuelAmount };

    if (fuelStation) {
      updateFuelStation({ ...fuelStation, name, location, fuelAmount })
        .then((response) => console.log("Station updated", response.data))
        .catch((error) => console.error("Error updating station:", error));
    } else {
      saveFuelStation(stationData)
        .then((response) => {
          console.log("Station saved:", response.data);
          // Navigate and send the saved station data
          navigate("/dashboard", { state: { stationData: response.data } });
        })
        .catch((error) => console.error("Error saving station:", error));
    }
  };


  return (
    <div className="form-container">
      <h2 className="form-title">
        {fuelStation ? "Update Fuel Station" : "Add Fuel Station"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Fuel Station Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Enter station name"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-input"
            placeholder="Enter station location"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Fuel Amount:</label>
          <input
            type="text"
            value={fuelAmount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input"
            placeholder="Enter fuel amount"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {fuelStation ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default FuelStationForm;
