import { Box, Grid } from "@mui/material";
import * as React from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import MediaCard from "./Card";
import MyCalendar from "./Calendar";

const SuperAdmindashboard = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [notification, setnotification] = React.useState(true);
    const [request, setRequest] = React.useState(false);
    const [entitydisplay, setentitydisplay] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        return () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 3000)
        };
    }, []);

    const handlenotification = () => {
        setnotification(true);
        setRequest(false);
        setentitydisplay(false);
    }

    const handlerequest = () => {
        setRequest(true);
        setnotification(false);
        setentitydisplay(false);
    }

    const handleentity = () => {
        setRequest(false);
        setnotification(false);
        setentitydisplay(true);
    }

    return (
        <>
            {isLoading ? (<Grid container>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={6} style={{ marginTop: "150px" }}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' style={{ width: "50px", height: "50px" }} alt='loader' />
                </Grid>
            </Grid>) : (
                <div style={{}}>
                    <Grid container spacing={2}>
                        <Grid item xs={2} sm={2}></Grid>
                        <Grid item xs={10} sm={10} md={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <input type="text" placeholder="Search..." style={{ width: "500px", height: "40px" }} />
                                {/* <Card sx={{width:"60px",height:"40px",backgroundColor:"rgba(17,106,162,255)",marginLeft: "3px"}}>
                                        <CardContent sx={{cursor:"pointer"}}>
                                        <Typography sx={{ fontSize: 12,color:"white" }}>
                                        </Typography>
                                        </CardContent>
                                    </Card> */}
                                    <Card style={{width:"30px",height:"40px",marginLeft:"3px",backgroundColor:"rgba(17,106,162,255)"}}>
                             <SearchIcon style={{marginTop:"10px",fontWeight:"20px",color:"white",marginLeft:"3px"}}/>
                             </Card>
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1}></Grid>
                        <Grid item xs={10} sm={10} md={7}>
                            <div style={{ paddingTop: "10px" }}>
                                <div style={{ display: "flex",justifyContent:"space-evenly"}}>
                                    <Card  onClick={handlenotification}>
                                        <CardContent sx={{cursor:"pointer"}}>
                                            <Typography sx={{ fontSize: 17,display:"flex",color:"rgba(17,106,162,255)" }} style={{}}>
                                            <CircleNotificationsIcon /> <span>Notifications</span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ }} onClick={handlerequest}>
                                        <CardContent sx={{cursor:"pointer"}}>
                                            <Typography sx={{ fontSize: 17,display:"flex",color:"rgba(17,106,162,255)" }} color="text.secondary">
                                            <MarkunreadIcon /> Request
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ }} onClick={handleentity}>
                                        <CardContent sx={{cursor:"pointer"}}>
                                            <Typography sx={{ fontSize: 17,display:"flex",color:"rgba(17,106,162,255)" }} color="text.secondary">
                                            <PeopleAltIcon />  View Entity
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                        {notification && (
                                            <Box
                                                display="flex"
                                                gap={4}
                                                p={2}
                                                sx={{ border: '2px solid grey', overflowY: 'auto', maxHeight: 'calc(95vh - 3cm)',marginTop:"30px" }}
                                            >
                                                Notifications Display jsahyugsufasytxfytsxytxsdyrdyrdyrdrdrdytrdyrdyr
                                                Notifications Display jsahyugsufasytxfytsxytxsdyrdyrdyrdrdrdytrdyrdyr
                                                Notifications Display jsahyugsufasytxfytsxytxsdyrdyrdyrdrdrdytrdyrdyr
                                                Notifications Display jsahyugsufasytxfytsxytxsdyrdyrdyrdrdrdytrdyrdyrsddvfvfrbrgbtrbgbtbtgbtbtg
                                            </Box>
                                        )}
                                        {request && (
                                            <Box
                                                height="200px"
                                                my={4}
                                                display="flex"
                                                gap={4}
                                                p={2}
                                                sx={{ border: '2px solid grey' }}
                                            >
                                                Requests Display
                                            </Box>
                                        )}
                                        {entitydisplay && (
                                            <Box
                                                height="200px"
                                                my={4}
                                                display="flex"
                                                gap={4}
                                                p={2}
                                                sx={{ border: '2px solid grey' }}
                                            >
                                                Entitys List Display
                                            </Box>
                                        )}
                                    </div>
                                
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1}></Grid>
                        <Grid item xs={10} sm={10} md={3} lg={3} xl={3} style={{ paddingRight: "20px" }}>
                            <div style={{ border: '1px solid #d9d9d9', borderRadius: 4 }}>
                                <MyCalendar />
                            </div>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                        </Grid>
                        <Grid item xs={11} sm={11} md={11}>
                            <div style={{ padding: "30px" }}>
                                <MediaCard />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            )}
        </>
    )
}

export default SuperAdmindashboard;