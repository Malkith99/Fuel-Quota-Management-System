import {Grid, Typography, Button, Input} from "@mui/material"
import { useEffect, useState } from "react";
const OwnerForm = ({addOwner ,updateOwner,submitted, data ,isEdit}) => {

    const [id, setId] =useState(0);
    const [name, setName] =useState('');
    const [location, setLocation] =useState('');
    const [fuelAmount, setFuelAmount] =useState(0);

    useEffect(() => {
        if(!submitted) {
            setId(0);
            setName('');
            setLocation('');
            setFuelAmount(0);
        }
    }, [submitted]);

    useEffect(() => {
        if(data?.id && data.id !== 0){
            setId(data.id);
            setName(data.name);
            setLocation(data.location);
            setFuelAmount(data.fuelAmount);
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
            <Typography component={'h1'} sx={{color: '#000000'}}>Fuel Station Owner Form</Typography>
        </Grid>

       
        <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
            <Typography
               component={'label'}
               htmlFor="id"
               sx={{
                color: '#000000',
                marginRight : '20px',
                fontSize:'16px',
                width: '100px',
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

        <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
            <Typography
               component={'label'}
               htmlFor="id"
               sx={{
                color: '#000000',
                marginRight : '20px',
                fontSize:'16px',
                width: '100px',
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

        <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
            <Typography
               component={'label'}
               htmlFor="id"
               sx={{
                color: '#000000',
                marginRight : '20px',
                fontSize:'16px',
                width: '100px',
                display:'block',

               }}
               >
                Location

               </Typography>
               <Input 
                type="text"
                id='location'
                name="location"
                sx={{ width: '400px' }}
                value={location}
                onChange={e => setLocation(e.target.value)}

                />
        </Grid>

        <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
            <Typography
               component={'label'}
               htmlFor="id"
               sx={{
                color: '#000000',
                marginRight : '20px',
                fontSize:'16px',
                width: '100px',
                display:'block',

               }}
            >
                Fuel

            </Typography>
            <Input 
                type="number"
                id='fuelAmount'
                name="fuelAmount"
                sx={{ width: '400px' }}
                value={fuelAmount}
                onChange={e => setFuelAmount(e.target.value)}

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
        onClick={() => isEdit ? updateOwner({id, name, location, fuelAmount}) : addOwner({id, name, location, fuelAmount})}
        >
            {
                isEdit? 'Update' : 'Add'
            }
        </Button>

       </Grid>

    );

}

export default OwnerForm;
