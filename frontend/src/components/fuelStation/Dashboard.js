import React from "react";
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const stationData = location.state?.stationData;

  return (
    <div>
      <h1>Dashboard</h1>
      {stationData && (
        <div>
          <h2>Station Details:</h2>
          <p>ID: {stationData.id}</p>
          <p>Name: {stationData.name}</p>
          <p>Location: {stationData.location}</p>
          <p>Fuel Amount: {stationData.fuelAmount}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
