import OwnerForm from "./OwnerForm";
import OwnersTable from "./OwnersTable";
import { Box } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";

const Owners = () => {
  const [owners, setOwners] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getOwners();
  }, []);

  const getOwners = () => {
    Axios.get("http://localhost:8080/api/v1/admin/owners")
      .then((response) => {
        setOwners(response.data);
      })
      .catch((error) => {
        console.error("Axios Error: ", error);
      });
  };

  const addOwner = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
      location: data.location,
      fuelAmount: data.fuelAmount,
    };
    Axios.post("http://localhost:8080/api/v1/admin/owner", payload)
      .then(() => {
        getOwners();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error: ", error);
      });
  };

  const updateOwner = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
      location: data.location,
      fuelAmount: data.fuelAmount,
    };
    Axios.put("http://localhost:8080/api/v1/admin/owner", payload)
      .then(() => {
        getOwners();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error: ", error);
      });
  };

  const deleteOwner = (data) => {
    setSubmitted(true);

    Axios.delete(`http://localhost:8080/api/v1/admin/owner/${data.id}`)
      .then(() => {
        console.log("success");
        getOwners();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error: ", error);
      });
  };

  return (
    <Box
      sx={{
        width: "100%", // Adjust as necessary for overall layout
        maxWidth: "800px", // Adjust max width for the main container
        margin: "0 auto",
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Wrapper for centering the OwnerForm */}
      <Box
        sx={{
          width: "100%", // Take full width of the parent
          display: "flex",
          justifyContent: "center", // Center the form horizontally
          marginBottom: "20px", // Optional margin below the form
        }}
      >
        <OwnerForm
          addOwner={addOwner}
          updateOwner={updateOwner}
          submitted={submitted}
          data={selectedOwner}
          isEdit={isEdit}
          // Optionally set a width for the form if needed
          sx={{ width: "600px" }} // Set the width of the form
        />
      </Box>
      <OwnersTable
        rows={owners}
        selectedOwner={(data) => {
          setSelectedOwner(data);
          setIsEdit(true);
        }}
        deleteOwner={(data) =>
          window.confirm("Are you sure you want to delete?") &&
          deleteOwner(data)
        }
      />
    </Box>
  );
};

export default Owners;