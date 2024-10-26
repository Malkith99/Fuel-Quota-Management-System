import { Paper, TableCell, TableContainer, TableHead, TableRow, Table, TableBody, Button } from "@mui/material";

const OwnersTable = ({ rows = [], selectedOwner, deleteOwner }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: '20px auto', padding: '20px', boxShadow: 3, borderRadius: '10px' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'white' }}>
            <TableCell sx={{ color: 'black', fontWeight: 'bold', textAlign: 'center', padding: '16px' }}>ID</TableCell>
            <TableCell sx={{ color: 'black', fontWeight: 'bold', textAlign: 'center', padding: '16px' }}>Name</TableCell>
            <TableCell sx={{ color: 'black', fontWeight: 'bold', textAlign: 'center', padding: '16px' }}>Location</TableCell>
            <TableCell sx={{ color: 'black', fontWeight: 'bold', textAlign: 'center', padding: '16px' }}>Fuel Amount</TableCell>
            <TableCell sx={{ color: 'black', fontWeight: 'bold', textAlign: 'center', padding: '16px' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:hover": { backgroundColor: "#f5f5f5" },
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row" sx={{ textAlign: 'center', padding: '12px' }}>
                  {row.id}
                </TableCell>
                <TableCell sx={{ textAlign: 'center', padding: '12px' }}>{row.name}</TableCell>
                <TableCell sx={{ textAlign: 'center', padding: '12px' }}>{row.location}</TableCell>
                <TableCell sx={{ textAlign: 'center', padding: '12px' }}>{row.fuelAmount}</TableCell>
                <TableCell sx={{ textAlign: 'center', padding: '12px' }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#28a745", margin: "0px 5px", color: "#fff", '&:hover': { backgroundColor: "#218838" } }}
                    onClick={() =>
                      selectedOwner({
                        id: row.id,
                        name: row.name,
                        location: row.location,
                        fuelAmount: row.fuelAmount,
                      })
                    }
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#dc3545", margin: "0px 5px", color: "#fff", '&:hover': { backgroundColor: "#c82333" } }}
                    onClick={() => deleteOwner({ id: row.id })}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center" sx={{ padding: '16px' }}>
                No Data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OwnersTable;
