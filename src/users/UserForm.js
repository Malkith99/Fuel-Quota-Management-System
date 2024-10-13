import {Grid, Typography, Button, Input} from "@mui/material"
import { useEffect, useState } from "react";
const UserForm = ({addUser ,updateUser,submitted, data ,isEdit}) => {

    const [id, setId] =useState(0);
    const [email, setEmail] =useState('');
    const [name, setName] =useState('');
    const [vehicleNumberPlate, setVehicleNumberPlate] =useState('');
    const [fuelQuota, setFuelQuota] =useState(0);

    useEffect(() => {
        if(!submitted) {
            setId(0);
            setEmail('');
            setName('');
            setVehicleNumberPlate('');
            setFuelQuota('0');
        }
    }, [submitted]);

    useEffect(() => {
        if(data?.id && data.id !== 0){
            setId(data.id);
            setEmail(data.email);
            setName(data.name);
            setVehicleNumberPlate(data.vehicleNumberPlate);
            setFuelQuota(data.fuelQuota);
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
                width: '250px',
                display:'block',

               }}
            >
                ID

            </Typography>
            <Input 
                type="number"
                id='id'
                name="id"
                sx={{ width: '400px' }}
                value={id}
                onChange={e => setId(e.target.value)}

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
                width: '250px',
                display:'block',

               }}
               >
                E-mail

               </Typography>
               <Input 
                type="text"
                id='email'
                name="email"
                sx={{ width: '400px' }}
                value={email}
                onChange={e => setEmail(e.target.value)}

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
                width: '250px',
                display:'block',

               }}
               >
                Name

               </Typography>
               <Input 
                type="text"
                id='name'
                name="name"
                sx={{ width: '400px' }}
                value={name}
                onChange={e => setName(e.target.value)}

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
                width: '250px',
                display:'block',

               }}
               >
                Number Plate

               </Typography>
               <Input 
                type="text"
                id='vehicleNumberPlate'
                name="vehicleNumberPlate"
                sx={{ width: '400px' }}
                value={vehicleNumberPlate}
                onChange={e => setVehicleNumberPlate(e.target.value)}

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
                width: '250px',
                display:'block',

               }}
               >
                Fuel Quota

               </Typography>
               <Input 
                type="number"
                id='fuelQuota'
                name="fuelQuota"
                sx={{ width: '400px' }}
                value={fuelQuota}
                onChange={e => setFuelQuota(e.target.value)}

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
        onClick={() => isEdit ? updateUser({id, email, name, vehicleNumberPlate, fuelQuota}) : addUser({id, email, name, vehicleNumberPlate, fuelQuota})}
        >
            {
                isEdit? 'Update' : 'Add'
            }
        </Button>

       </Grid>

    );

}

export default UserForm;
