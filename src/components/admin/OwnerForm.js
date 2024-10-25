import { Grid, Typography, Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import "./OwnerForm.css"; // Import the custom CSS file

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [nic, setNic] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [allocatedFuelQuota, setAllocatedFuelQuota] = useState(0);
  const [remainingFuelQuota, setRemainingFuelQuota] = useState(0);

  useEffect(() => {
    if (!submitted) {
      setNic("");
      setVehicleNumber("");
      setVehicleType("");
      setAllocatedFuelQuota(0);
      setRemainingFuelQuota(0);
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.nic && data.nic !== 0) {
      setNic(data.nic);
      setAllocatedFuelQuota(data.allocatedFuelQuota);
      setRemainingFuelQuota(data.remainingFuelQuota);
      setVehicleNumber(data.vehicleNumber);
      setVehicleType(data.vehicleType);
    }
  }, [data]);

  return (
    <div className="form-container">
      <Typography component={"h1"} className="form-title">
        <b>{isEdit ? "Edit User" : "Add User"}</b>
      </Typography>

      <Grid container spacing={2} className="form-grid">
        <Grid item xs={12} className="form-group">
          <Typography component={"label"} htmlFor="nic" className="form-label">
            NIC
          </Typography>
          <Input
            type="text"
            id="nic"
            name="nic"
                      className="form-input"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} className="form-group">
          <Typography
            component={"label"}
            htmlFor="vehicleNumber"
            className="form-label"
          >
            Number Plate
          </Typography>
          <Input
            type="text"
            id="vehicleNumber"
            name="vehicleNumber"
            className="form-input"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} className="form-group">
          <Typography
            component={"label"}
            htmlFor="vehicleType"
            className="form-label"
          >
            Vehicle Type
          </Typography>
          <Input
            type="text"
            id="vehicleType"
            name="vehicleType"
            className="form-input"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} className="form-group">
          <Typography
            component={"label"}
            htmlFor="allocatedFuelQuota"
            className="form-label"
          >
            Allocated Fuel Quota
          </Typography>
          <Input
            type="number"
            id="allocatedFuelQuota"
            name="allocatedFuelQuota"
            className="form-input"
            value={allocatedFuelQuota}
            onChange={(e) => setAllocatedFuelQuota(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} className="form-group">
          <Typography
            component={"label"}
            htmlFor="remainingFuelQuota"
            className="form-label"
          >
            Remaining Fuel Quota
          </Typography>
          <Input
            type="number"
            id="remainingFuelQuota"
            name="remainingFuelQuota"
            className="form-input"
            value={remainingFuelQuota}
            onChange={(e) => setRemainingFuelQuota(e.target.value)}
          />
        </Grid>

        <Button
          sx={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "5px",
            marginTop: "20px",
            fontSize: "16px",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
          onClick={() =>
            updateUser({
              nic,
              vehicleNumber,
              vehicleType,
              allocatedFuelQuota,
              remainingFuelQuota,
            })
          }
        >
          {isEdit ? "Update" : "Save"}
        </Button>
      </Grid>
    </div>
  );
};

export default UserForm;
