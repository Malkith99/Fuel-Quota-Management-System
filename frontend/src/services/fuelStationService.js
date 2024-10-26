import axios from 'axios';

const API_BASE_URL = "http://localhost:8081/api/fuel_station";

export const getAllFuelStations = () => {
    return axios.get(`${API_BASE_URL}/getFuelStation`);    
};

// Function to save a new fuel station
export const saveFuelStation = (fuelStation) => {
    return axios.post(`${API_BASE_URL}/saveFuelStation`, fuelStation);
};

// Function to update a fuel station
export const updateFuelStation = (fuelStation) => {
    return axios.put(`${API_BASE_URL}/updateFuelStation`, fuelStation);
};

// Function to delete a fuel station
export const deleteFuelStation = (fuelStation) => {
    return axios.delete(`${API_BASE_URL}/deleteFuelStation`, {
        data: fuelStation
    });
};

// Function to get a fuel station by ID
export const getFuelStationById = (stationId) => {
    return axios.get(`${API_BASE_URL}/getFuelStationById/${stationId}`);
};

