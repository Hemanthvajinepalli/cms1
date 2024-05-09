import React, { useState, useEffect } from 'react';
import UserCalendar from './Usecalendar';
import Audio from './Audio';
import Events from './Events';
import ActionAreaCard from './Members';
import  Images  from './Images';
import Grid from '@mui/material/Grid';

const AdminHome = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 2000); 
        return () => clearTimeout(delay);
    }, []);

    return (
        <>
            {isLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="Loading" style={{width: "5%", height: "10vh"}}/>
                </div>
            ) : (
                <div>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={2}></Grid>
                        <Grid item xs={12} sm={12} md={5}>
                        <Events />
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>
                        <UserCalendar />
                        </Grid>
                        <Grid item xs={12} sm={12} md={2}></Grid>
                        <Grid item xs={12} sm={12} md={5} style={{paddingTop:"5px"}}>
                        <Audio />
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} style={{paddingTop:"10px"}}>
                        <ActionAreaCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={1}></Grid>
                        <Grid item xs={12} sm={12} md={11} style={{paddingTop:"40px"}}>
                        <Images />
                        </Grid>
                    </Grid>
                </div>
            )}
        </>
    );
};

export default AdminHome;
