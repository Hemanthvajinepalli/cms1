import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';




const StyledCard = styled(Card)({
  maxWidth: 345,
  maxHeight: 150,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function GalleryCard() {

  const [data, setData] = React.useState([]);


  React.useEffect(()=>{
    fetch('http://localhost:9999/api/church/all')
    .then(res=>res.json())
    .then(data=>{
        setData(data);
    })
},[])

  return (
    <>
    <div style={{ overflowY: "auto", maxHeight: "calc(95vh - 3cm)" }}>
        <Grid container spacing={4}>
          {/* Render empty card if no data */}
          {data.length === 0 && (
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}>
                    No data available
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          )}
          {/* Render cards if data is available */}
          {data.map((value) => (
            <>
              <Grid item xs={12} sm={6} md={3} key={value.id}>
                <StyledCard>
                  <CardMedia
                    component={value.image? "img" : ""}
                    height="160"
                    image={value.image ? value.image : "No Image"}
                    title={value.image? "Click here for more details" : "Click here for more details"}
                    style={{ width: '260px', height: '110px',backgroundColor:"gray",color:"white" }}
                    alt={value.image?"Images":"No Image"}
                    onError={"No Image"}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}>
                      {value.name}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            </>
          ))}     
        </Grid>
      </div>
    </>
  );
}
