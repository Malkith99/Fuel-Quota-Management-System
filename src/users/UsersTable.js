import { Paper, TableCell, TableContainer, TableHead, TableRow ,Table, TableBody, Button } from "@mui/material";

const UsersTable = ({rows , selectedUser , deleteUser}) => {

    return(
    <TableContainer component={Paper}>
        <Table>

            <TableHead>
                <TableRow>
                    <TableCell>ID  </TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Number Plate</TableCell>
                    <TableCell>Fuel Quota</TableCell>
                    <TableCell>Actions</TableCell>

                </TableRow>

            </TableHead>

            <TableBody>

            {
               rows.length >  0 ?  rows.map(row => (
                   <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border : 0 }}}>
                    <TableCell component='th' scope= "row">{row.id}</TableCell>
                    <TableCell component='th' scope= "row">{row.email}</TableCell>
                    <TableCell component='th' scope= "row">{row.name}</TableCell>
                    <TableCell component='th' scope= "row">{row.vehicleNumberPlate}</TableCell>
                    <TableCell component='th' scope= "row">{row.fuelQuota}</TableCell>
                    <TableCell >
                        <Button 
                          sx={{margin: '0px 10px'}}
                          onClick={()=> selectedUser({id: row.id, email: row.email ,name: row.name, vehicleNumberPlate: row.vehicleNumberPlate, fuelQuota: row.fuelQuota})}
                        >
                            Update
                        </Button>

                        <Button 
                          sx={{margin: '0px 10px'}}
                          onClick={()=> deleteUser({id: row.id})}
                        >
                            Delete
                        </Button>

                      </TableCell>
                    </TableRow>
                    
                )): ( 
                    <TableCell sx={{'&:last-child td,&:last-child th' : {border: 0 }}}>
                        <TableCell component='th' scope = "row"> No Data </TableCell>

                    </TableCell>
                )
            }
          </TableBody>
        </Table>

    </TableContainer>
    );
}
export default UsersTable;