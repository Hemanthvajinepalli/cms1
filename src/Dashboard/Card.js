import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';




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

export default function MediaCard() {

  const [data, setData] = React.useState([]);
  const [open, setopen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [address1, setLine1] = React.useState('');
  const [address2, setLine2] = React.useState('');
  const [town, setTown] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [street, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [pincode, setCountry] = React.useState('');
  const [adminName, setAdminName] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  const [contactNumber, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [otp, setotp] = React.useState('');
  const [createdBy, setCreatedBy] = React.useState('Super Admin');
  const [image, setimage] = React.useState('');
  const [showEmailInput, setShowEmailInput] = React.useState(false);
  const [showMobileInput, setShowMobileInput] = React.useState(false);
  const [mobotp, setMobotp] = React.useState('');
  const [seperate, setseperate] = React.useState([]);
  const[seperateuser,setseperateuser]=React.useState([]);
  const churchid = localStorage.getItem("entityid");
  const userid=localStorage.getItem("userId");
  const updateentity = async (updated) => {
    try {
      const details = updated;

      const response = await axios.put(`http://localhost:9999/api/church/update/${churchid}`, details, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Handle response as needed
      console.log('Entity updated successfully:', response.data);
      alert("updated successfully");
    } catch (error) {
      // Handle error
      console.error('Error updating entity:', error);
    }
  };

  const handleopen = async (entityid,userId) => {
    localStorage.setItem("entityid", entityid);
    localStorage.setItem("userId",userId);
    setopen(true);
    const response = await axios.get(`http://localhost:9999/api/church/${churchid}`);
    const seperatechurch = response.data;
    setseperate(seperatechurch);

    const response1 = await axios.get(`http://localhost:9999/user/api/getByUser/${userid}`);
    const seperateuser=response1.data;
    setseperateuser(seperateuser);
    console.log(seperateuser);
    console.log(seperatechurch);

  }
  const handleClose = () => setopen(false);


  React.useEffect(() => {
    fetch('http://localhost:9999/api/church/all')
      .then(response => response.json())
      .then(value => setData(value))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div>
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
                <StyledCard onClick={() => handleopen(value.id,value.userId)}>
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ padding: "4px" }}
          >
            <Box sx={style}>
              <Typography style={{ fontWeight: "bold", textAlign: "center" }}>
                ENTITY FORM
              </Typography>
              <TextField id="standard-basic" value={seperate.name} label="Name of the Entity" variant="standard" style={{ paddingRight: "10px" }} />
              {/* <TextField id="standard-basic" value={seperate.address} onChange={(e)=>setseperate(e.target.value)} label="Address" variant="standard" style={{ paddingRight: "10px" }} /> */}
              <TextField id="standard-basic" value={seperate.address1} onChange={(e) => setseperate(e.target.value)} label="Line1" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={seperate.address2} onChange={(e) => setseperate(e.target.value)} label="Line2" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={seperate.town} onChange={(e) => setseperate(e.target.value)} label="Town" variant="standard" style={{ paddingRight: "10px" }} />
              {/* <TextField id="standard-basic" value={seperate.district} onChange={(e)=>setseperate(e.target.value)} label="District" variant="standard" style={{ paddingRight: "10px" }} /> */}
              <TextField id="standard-basic" value={seperate.street} onChange={(e) => setseperate(e.target.value)} label="Street" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={seperate.state} onChange={(e) => setseperate(e.target.value)} label="State" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={seperate.pincode} onChange={(e) => setseperate(e.target.value)} label="Pincode" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={seperateuser.firstName} label="Administrator Name" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={seperateuser.designation} onChange={(e) => setseperate(e.target.value)} label="Designation" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={seperateuser.email} onChange={(e) => setseperate(e.target.value)} label="Email" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={seperateuser.phoneNumber} onChange={(e) => setseperate(e.target.value)} label="Mobile" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField
                id="contained-button-file"
                type="file"
                inputProps={{ accept: 'image/jpeg' }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  try{
                  const response= axios.put(`http://localhost:9999/api/church/update/${churchid}`,file);
                  console.log(response);
                  }catch(error){
                    console.log(error);
                  }
                }}
                label="Upload Image"
                style={{ display: 'none' }}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" style={{marginTop:"10px"}}>
                  Upload Image
                </Button>
              </label>
              <div style={{ display: "flex", justifyContent: "end", marginTop: "30px" }}>
                <Button variant='contained' onClick={() => updateentity(seperate)}>Update</Button>
                <Button variant='contained' onClick={handleClose} style={{ marginLeft: "3px" }}>Cancel</Button>
              </div>
            </Box>
          </Modal>
        </Grid>

      </div>
    </>
  );
}
