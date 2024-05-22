import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import noimage from '../images/noimage.jpg';



const Pastorchoir = () => {
    const [choirdata, setchoirdata] = React.useState([]);
    const churchid = sessionStorage.getItem('churchid');

    React.useEffect(() => {
        fetch(`http://localhost:9999/choir/view/${churchid}`)
            .then(response => response.json())
            .then(value => {
                console.log('Fetched data:', value)
                if (value) {
                    const data = Array.isArray(value.success) ? value.success : [value.success];
                    setchoirdata(data);
                  } else {
                    setchoirdata([]);
                    console.error('Expected an array but got:', value.success);
                  }
    })
            .catch(error => alert(error))
    }, [churchid])
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={1}></Grid>
                {choirdata.length === 0 && (
            <Grid item xs={12} sm={6} md={11}>
                <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}>
                    No data available
                  </Typography>
                </CardContent>
                </Card>
            </Grid>
          )}
          {choirdata.map((value) => (
            <>
              <Grid item xs={12} sm={6} md={3} key={value.choirId}>
                <Card style={{maxWidth:345, maxHeight:260}}>
                  <CardMedia
                    component={value.imageUrl ? "img" : ""}
                    height="160"
                    image={value.imageUrl ? value.imageUrl : "No Image"}
                    title={value.imageUrl ? "Click here for more details" : "Click here for more details"}
                    style={{ width: '345px', height: '110px', backgroundImage: `url(${noimage})`, color: "white" }}
                    alt={value.imageUrl ? "" : "No Image"}
                    // onError={"No Image"}
                  />
                  </Card>
              </Grid>
            </>
          ))}
            </Grid>
        </>
    )
}

export default Pastorchoir;