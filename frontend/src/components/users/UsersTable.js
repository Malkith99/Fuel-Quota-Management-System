import {
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  Button,
} from "@mui/material";

const UsersTable = ({ rows = [], selectedUser, deleteUser }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Number Plate</TableCell>
            <TableCell>Vehicle Type</TableCell>
            <TableCell>Allocated Fuel Quota</TableCell>
            <TableCell>Remaining Fuel Quota</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nic}
                </TableCell>
                <TableCell>{row.vehicleNumber}</TableCell>
                <TableCell>{row.vehicleType}</TableCell>
                <TableCell>{row.allocatedFuelQuota}</TableCell>
                <TableCell>{row.remainingFuelQuota}</TableCell>
                <TableCell>
                  <Button
                    sx={{ margin: "0px 10px" }}
                    onClick={() =>
                      selectedUser({
                        nic: row.nic,
                        vehicleNumber: row.vehicleNumber,
                        vehicleType: row.vehicleType,
                        allocatedFuelQuota: row.allocatedFuelQuota,
                        remainingFuelQuota: row.remainingFuelQuota,
                      })
                    }
                  >
                    Update
                  </Button>

                  <Button
                    sx={{ margin: "0px 10px" }}
                    onClick={() => deleteUser({ id: row.id })}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No Data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
