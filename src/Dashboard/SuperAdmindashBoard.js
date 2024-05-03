import { Grid } from "@mui/material";
import * as React from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Calendar } from 'antd';
import MediaCard from "./Card";

const SuperAdmindashboard = () => {

    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        return () => {
          setTimeout(()=>{
            setIsLoading(false);
          },3000)
        };
      }, []);

    return (
        <>
        {isLoading ? (<Grid container>
      <Grid item xs={6} md={6}></Grid>
      <Grid item xs={6} md={6} style={{marginTop:"150px"}}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' style={{width:"50px",height:"50px"}} alt='loader'/>
      </Grid>
     </Grid>):(
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input type="text" placeholder="Search..." style={{width:"500px",height:"40px"}}/>
                        <SearchIcon style={{ marginRight: 8,marginTop:"7px" }} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Grid item xs={12} sm={12} md={11}>
                    <div style={{ display: "flex", justifyContent: "space-evenly", paddingTop: "10px" }}>
                        <div style={{ display: "flex" }}>
                            <CircleNotificationsIcon /> <span>Notifications</span>
                        </div>
                        <div style={{ display: "flex" }}>
                            <MarkunreadIcon /> Request
                        </div>
                        <div style={{ display: "flex" }}>
                            <PeopleAltIcon />  View Entity
                        </div>
                        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                            {/* <Calendar /> */}
                        </div>
                    </div>
                    <div style={{ marginTop: "50px", padding: "20px", overflowY: "auto", maxHeight: "calc(95vh - 3cm)" }}>
                        <MediaCard />
                    </div>
                </Grid>
            </Grid>
     )}
        </>
    )
}

export default SuperAdmindashboard;