import {Grid, Typography, Button, Input} from "@mui/material"
import { useEffect, useState } from "react";
const UserForm = ({addUser ,updateUser,submitted, data ,isEdit}) => {

    const [nic, setNic] =useState('');
    const [vehicleNumber, setVehicleNumber] =useState('');
    const [vehicleType, setVehicleType] =useState('');
    const [allocatedFuelQuota, setAllocatedFuelQuota] =useState(0);
    const [remainingFuelQuota, setRemainingFuelQuota] =useState(0);

    useEffect(() => {
        if(!submitted) {
            setNic('');
            setVehicleNumber('');
            setVehicleType('');
            setAllocatedFuelQuota(0);
            setRemainingFuelQuota(0);
        }
    }, [submitted]);

    useEffect(() => {
        if(data?.nic && data.nic !== 0){
            setNic(data.nic);
            setAllocatedFuelQuota(data.allocatedFuelQuota);
            setRemainingFuelQuota(data.remainingFuelQuota);
            setVehicleNumber(data.vehicleNumber);
            setVehicleType(data.vehicleType);
        }
        }, [data]);



    return (
       <Grid 
       container
       spacing={2}
       sx={{
        backgroundColor:'#ffffff',
        marginBottom: '30px',
        display: 'block',

       }}
       >
        <Grid item xs={12}>
            <Typography component={'h1'} sx={{color: '#000000'}}><b>User Form</b></Typography>
        </Grid>

       
        <Grid item xs={12} sm={8} sx={{display: 'flex'}}>
            <Typography
               component={'label'}
               htmlFor="id"
               sx={{
                color: '#000000',
                marginRight : '20px',
                fontSize:'16px',
                width: '200px',
                display:'block',

               }}
            >
                NIC

            </Typography>
            <Input 
                type="text"
                id='nic'
                name="nic"
                sx={{ width: '200px' }}
                value={nic}
                onChange={e => setNic(e.target.value)}

                />
        </Grid>

        <Grid item xs={12} sm={8} sx={{display: 'flex'}}>
            <Typography
               component={'label'}
               htmlFor="id"
               sx={{
                color: '#000000',
                marginRight : '20px',
                fontSize:'16px',
                width: '200px',
                display:'block',

               }}
               >
                Number Plate

               </Typography>
               <Input 
                type="text"
                id='vehicleNumber'
                name="vehicleNumber"
                sx={{ width: '200px' }}
                value={vehicleNumber}
                onChange={e => setVehicleNumber(e.target.value)}

                />
        </Grid>

        <Grid item xs={12} sm={8} sx={{display: 'flex'}}>
            <Typography
               component={'label'}
               htmlFor="id"
               sx={{
                color: '#000000',
                marginRight : '20px',
                fontSize:'16px',
                width: '200px',
                display:'block',

               }}
               >
                Vehicle Type

               </Typography>
               <Input 
                type="text"
                id='vehicleType'
                name="vehicleType"
                sx={{ width: '200px' }}
                value={vehicleType}
                onChange={e => setVehicleType(e.target.value)}

                />
        </Grid>

        <Grid item xs={12} sm={8} sx={{display: 'flex'}}>
            <Typography
               component={'label'}
               htmlFor="id"
               sx={{
                color: '#000000',
                marginRight : '20px',
                fontSize:'16px',
                width: '200px',
                display:'block',

               }}
               >
                Allocated Fuel Quota

               </Typography>
               <Input 
                type="number"
                id='allocatedFuelQuota'
                name="allocatedFuelQuota"
                sx={{ width: '200px' }}
                value={allocatedFuelQuota}
                onChange={e => setAllocatedFuelQuota(e.target.value)}

                />
        </Grid>

        <Grid item xs={12} sm={8} sx={{display: 'flex'}}>
            <Typography
               component={'label'}
               htmlFor="id"
               sx={{
                color: '#000000',
                marginRight : '20px',
                fontSize:'16px',
                width: '200px',
                display:'block',

               }}
               >
                Remaining Fuel Quota

               </Typography>
               <Input 
                type="number"
                id='remainingFuelQuota'
                name="remainingFuelQuota"
                sx={{ width: '200px' }}
                value={remainingFuelQuota}
                onChange={e => setRemainingFuelQuota(e.target.value)}

                />
        </Grid>

        <Button 
            sx={{
               margin: 'auto',
               marginBottom: '20px',
               backgroundColor: '#00c6e6',
               color: '#000000',
               marginleft: '15px',
               marginTop: '20px',
               '&:hover': {
                  opacity: '0.7',
                  backgroundColor:'#00c6e6',

            }

        }}
        onClick={() => updateUser({ nic, vehicleNumber, vehicleType, allocatedFuelQuota, remainingFuelQuota })}>
                Update
            </Button>

       </Grid>

    );

}

export default UserForm;
