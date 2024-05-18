import React from "react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const PastorAppointments = () => {
    return (
        <div>
            <Grid container spacing={2}>
                {[1, 2, 3, 4].map((index) => (
                    <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                        <Card variant="outlined" style={{ height: '100%' ,borderRadius:"10%"}}>
                            <h3 style={{ textAlign: "center" }}><b>Appointment Details</b></h3>
                            <CardContent>
                                <Typography variant="h6" component="div" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <TextField id={`service-name-${index}`} label="Service Name" variant="standard" />
                                    <TextField id={`location-${index}`} label="Location" variant="standard" />
                                    <TextField id={`date-time-${index}`} label="Date & Time" variant="standard" />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default PastorAppointments;