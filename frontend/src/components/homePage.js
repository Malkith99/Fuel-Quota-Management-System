// HomePage.js
import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Welcome to the Fuel Station Management System
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: "10px" }}
        onClick={() => navigate("/fuelstation")} // Navigate to login page
      >
        Go to Fuel Station Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginBottom: "10px" }}
        onClick={() => navigate("/VO/login")} // Navigate to vehicle registration page
      >
        Go to Vehicle Registration
      </Button>
      <div className="mt-5px">
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/adminHome")} // Navigate to vehicle registration page
      >
        Admin Portal
      </Button>
      </div>

    </Box>
  );
};

export default HomePage;
