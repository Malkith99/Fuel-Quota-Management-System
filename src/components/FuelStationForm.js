import React, { useState } from "react";
import {
  saveFuelStation,
  updateFuelStation,
} from "../services/fuelStationService";
import "./FuelStationForm.css"; // Import the custom CSS file

const FuelStationForm = ({ fuelStation }) => {
  const [name, setName] = useState(fuelStation ? fuelStation.name : "");
  const [location, setLocation] = useState(
    fuelStation ? fuelStation.location : ""
  );
  const [amount, setAmount] = useState(fuelStation ? fuelStation.amount : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const stationData = { name, location, amount };

    if (fuelStation) {
      updateFuelStation({ ...fuelStation, name, location, amount })
        .then((response) => console.log("Station updated", response.data))
        .catch((error) => console.error("Error updating station:", error));
    } else {
      saveFuelStation(stationData)
        .then((response) => console.log("Station saved:", response.data))
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input"
            placeholder="Enter fuel amount"
          />
        </div>

        <button type="submit" className="form-button">
          {fuelStation ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default FuelStationForm;
