import { Grid, Typography, Button, Input, FormHelperText } from "@mui/material";
import { useEffect, useState } from "react";
import "./OwnerForm.css";

const OwnerForm = ({ addOwner, updateOwner, submitted, data, isEdit }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [fuelAmount, setFuelAmount] = useState(0);
  const [errors, setErrors] = useState({}); // To track validation errors

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName("");
      setLocation("");
      setFuelAmount(0);
      setErrors({}); // Reset errors on form reset
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
      setLocation(data.location);
      setFuelAmount(data.fuelAmount);
    }
  }, [data]);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!location) newErrors.location = "Location is required.";
    if (fuelAmount <= 0)
      newErrors.fuelAmount = "Fuel Amount must be greater than zero.";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors
      return;
    }

    // Clear errors if validation is successful
    setErrors({});
    isEdit
      ? updateOwner({ id, name, location, fuelAmount })
      : addOwner({ id, name, location, fuelAmount });
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#ffffff",
        marginBottom: "30px",
        display: "block",
        width: "900px",
        maxWidth: "100%",
      }}
    >
      <Grid item xs={12}>
        <Typography component={"h1"} sx={{ color: "#000000" }}>
          <b>Fuel Station Owner Form</b>
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: "400px" }}
          value={id}
          onChange={(e) => setId(e.target.value)}
          required // Mark field as required
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: "400px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required // Mark field as required
        />
        {errors.name && <FormHelperText error>{errors.name}</FormHelperText>}{" "}
        {/* Error message */}
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="location"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Location
        </Typography>
        <Input
          type="text"
          id="location"
          name="location"
          sx={{ width: "400px" }}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required // Mark field as required
        />
        {errors.location && (
          <FormHelperText error>{errors.location}</FormHelperText>
        )}{" "}
        {/* Error message */}
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="fuelAmount"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Fuel
        </Typography>
        <Input
          type="number"
          id="fuelAmount"
          name="fuelAmount"
          sx={{ width: "400px" }}
          value={fuelAmount}
          onChange={(e) => setFuelAmount(e.target.value)}
          required // Mark field as required
        />
        {errors.fuelAmount && (
          <FormHelperText error>{errors.fuelAmount}</FormHelperText>
        )}{" "}
        {/* Error message */}
      </Grid>

      {/* <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#007bff",
          color: "#000000",
          marginLeft: "15px",
          marginTop: "20px",
          "&:hover": {
            opacity: "0.7",
            backgroundColor: "#007bff",
          },
        }}
        onClick={handleSubmit} // Call handleSubmit
      >
        {isEdit ? "Update" : "Add"}
      </Button> */}
    </Grid>
  );
};

export default OwnerForm;
