import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import SelectCars from '../../modules/SelectCar';

const useStyles = makeStyles((theme) =>( {
    title: {
        marginTop: '20px',
        marginBottom:'20px'
    }
}))
export default function Cars() {
    const classes = useStyles();

    return (
        <Container fixed>
            <Typography  className={classes.title} variant="h2">Select a car based on a Make</Typography>
            <SelectCars />
        </Container>
            
    )
}