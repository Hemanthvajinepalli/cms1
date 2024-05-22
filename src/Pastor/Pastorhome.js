import React, { useState, useEffect } from 'react';
import UserCalendar from '../Dashboard/Usecalendar';
import PastorImages from './PastorImages';
import Grid from '@mui/material/Grid';
import Pastornotify from './Pastornotify';
import Worship from '../Dashboard/Audio';
import PastorAppointments from './PastorAppointments';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PastorAuido from './PastorAudio';


const Pastorhome = () => {
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="Loading" style={{ width: "5%", height: "10vh" }} />
                </div>
            ) : (
                <div>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={2}></Grid>
                        <Grid item xs={12} sm={12} md={5}>
                        <h2 className="notification-heading" style={{marginTop:"1cm"}}><NotificationsActiveIcon/>Notification:</h2>
                            <div style={{ marginRight: "1cm",marginLeft:"-3cm" }}>
                                <Pastornotify />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>
                            <div style={{width:"10cm",marginLeft:"1cm"}}>
                            <UserCalendar />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2}></Grid>
                        <Grid item xs={12} sm={12} md={5} style={{ paddingTop: "5px" }}>
                            <div style={{ float: "left", marginTop: "3cm", marginLeft: "-1cm" }}>
                                <PastorAuido />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} style={{ paddingTop: "10px" }}>
                            <div style={{ marginTop: "2cm", float: "right", marginRight: "1cm" }}>
                                <PastorImages />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={1}></Grid>
                        <Grid item xs={12} sm={12} md={11} style={{ paddingTop: "40px" }}>
                           <div style={{marginRight:"1.5cm"}}>
                            <PastorAppointments />
                            </div><br/>
                        </Grid>
                    </Grid>
                </div>
            )}
        </>
    );
};

export default Pastorhome;