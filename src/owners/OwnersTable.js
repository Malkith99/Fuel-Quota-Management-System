import { Paper, TableCell, TableContainer, TableHead, TableRow ,Table, TableBody, Button } from "@mui/material";

const OwnersTable = ({rows , selectedOwner , deleteOwner}) => {

    return(
    <TableContainer component={Paper}>
        <Table>

            <TableHead>
                <TableRow>
                    <TableCell>ID  </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Fuel Amount</TableCell>
                    <TableCell>Actions</TableCell>

                </TableRow>

            </TableHead>

            <TableBody>

            {
               rows.length >  0 ?  rows.map(row => (
                   <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border : 0 }}}>
                    <TableCell component='th' scope= "row">{row.id}</TableCell>
                    <TableCell component='th' scope= "row">{row.name}</TableCell>
                    <TableCell component='th' scope= "row">{row.location}</TableCell>
                    <TableCell component='th' scope= "row">{row.fuelAmount}</TableCell>
                    <TableCell >
                        <Button 
                          sx={{margin: '0px 10px'}}
                          onClick={()=> selectedOwner({id: row.id, name: row.name, location: row.location, fuelAmount: row.fuelAmount})}
                        >
                            Update
                        </Button>

                        <Button 
                          sx={{margin: '0px 10px'}}
                          onClick={()=> deleteOwner({id: row.id})}
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
export default OwnersTable;