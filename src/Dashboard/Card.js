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
import noimage from '../images/noimage.jpg';




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
  boxShadow: 20,
  p: 3,
  borderRadius: 2,
  paddingLeft: 11,
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
  const [seperateimage, setseperateimage] = React.useState([]);
  const[profileimage,setprofileimage]=React.useState(null);
  const churchid = localStorage.getItem("entityid");
  const userid = localStorage.getItem("userId");
  const [selectedFileName, setSelectedFileName] = React.useState('');

  const superid=sessionStorage.getItem('Id');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFileName(file);
  };
  const updateentity = async () => {
    try {
      const form ={
    
        address1,
        address2,
        street,
        state,
        pincode,
        adminName,
        designation,
        
      }
      
      const formData = new FormData();
    formData.append('churchEntity', new Blob([JSON.stringify({
      firstName: form.adminName,
      designation: form.designation,
      address1:form.address1,
      address2:form.address2,
      street:form.street,
      state:form.state,
      pincode:form.pincode,
    })], { type: 'application/json' }));
  
    formData.append('file', selectedFileName);

      const response = await fetch(`http://localhost:9999/church/updateUser/${churchid}`, {
        method: 'PUT',
        body: formData,
      });

      // Handle response as needed
      console.log(response);
      console.log('Entity updated successfully:', response.data);
      alert("updated successfully");
      setSelectedFileName('');
      const imageresponse=await fetch(`http://localhost:9999/church/view/image/${churchid}`);
        async function fetchimage(){
      const blob = await imageresponse.blob();
      const imageUrl = URL.createObjectURL(blob);
      setData((prevData) =>
        prevData.map((item) =>
          item.id === churchid ? { ...item, imagedata: imageUrl } : item
        ));
        console.log(data);
      }
      fetchimage();
    } catch (error) {
      // Handle error
      console.error('Error updating entity:', error);
    }
   
  };

  const handleopen = async (entityid, userId) => {
    localStorage.setItem("entityid", entityid);
    localStorage.setItem("userId", userId);
    setopen(true);
    const response = await axios.get(`http://localhost:9999/church/get/${churchid}`);
    const seperatechurch = response.data;
    console.log(seperatechurch.name);
    setName(seperatechurch.name);
    setLine1(seperatechurch.address1);
    setLine2(seperatechurch.address2);
    setCity(seperatechurch.street);
    setCountry(seperatechurch.pincode);
    setTown(seperatechurch.town);
    setDistrict(seperatechurch.district);
    setState(seperatechurch.state);
    setseperate(seperatechurch);
    console.log(seperatechurch.image);

    const response1 = await axios.get(`http://localhost:9999/user/getByUser/${userid}/${churchid}`);
    const seperateuser = response1.data;
    console.log(seperateuser.firstName);
    setAdminName(seperateuser.firstName);
    setDesignation(seperateuser.designation);
    setMobile(seperateuser.phoneNumber);
    setEmail(seperateuser.email);

  }
  const handleClose = () => setopen(false);


  React.useEffect(() => {
    fetch(`http://localhost:9999/church/${superid}`)
      .then(response => response.json())
      .then(value => setData(value))
      .catch(error => console.error('Error fetching data:', error));
  }, [superid]);

  const handleButtonClick = () => {
    document.getElementById('contained-button-file').click();
  };

  return (
    <>
      <div>
        <Grid container spacing={4}>
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
          {data.map((value) => (
            <>
              <Grid item xs={12} sm={6} md={3} key={value.id}>
                <StyledCard onClick={() => handleopen(value.id, value.userId)}>
                  <CardMedia
                    component={value.image ? "img" : ""}
                    height="160"
                    image={value.image ? value.image : "No Image"}
                    title={value.image ? "Click here for more details" : "Click here for more details"}
                    style={{ width: '260px', height: '110px', backgroundImage: `url(${noimage})`, color: "white" }}
                    alt={value.image ? "Images" : "No Image"}
                    // onError={"No Image"}
                  />
                  {/* <CardMedia>
                    <img src={value.imagedata} />
                  </CardMedia> */}
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
              </Typography> <br/>
              <TextField id="standard-basic" value={name} label="Name of the Entity" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={address1} onChange={(e) => setLine1(e.target.value)} label="Line1" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={address2} onChange={(e) => setLine2(e.target.value)} label="Line2" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={town} onChange={(e) => setTown(e.target.value)} label="Town" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={street} onChange={(e) => setCity(e.target.value)} label="Street" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={state} onChange={(e) => setState(e.target.value)} label="State" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={pincode} onChange={(e) => setCountry(e.target.value)} label="Pincode" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={adminName} label="Administrator Name" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={designation} onChange={(e) => setDesignation(e.target.value)} label="Designation" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={email}  label="Email" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField id="standard-basic" value={contactNumber}  label="Mobile" variant="standard" style={{ paddingRight: "10px" }} />
              <TextField
                id="contained-button-file"
                type="file"
                inputProps={{ accept: 'image/jpeg' }}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <Button
          variant="contained"
          component="span"
          style={{
            marginTop: '26px',
            padding: '2px',
            fontSize: '10px',
            color: 'white',            
            backgroundColor: selectedFileName ? 'green' : 'rgba(17,106,162,255)'
          }}
          onClick={handleButtonClick}
        >
          {selectedFileName ? 'Uploaded' : 'Upload Image'}
        </Button>
      {/* {selectedFileName && (
        <p style={{ color: 'green' }}>{selectedFileName} uploaded</p>
      )} */}
              
              <div style={{ display: "flex",justifyContent:"end",paddingRight:"80px", marginTop: "30px" }}>
                <Button variant='contained' onClick={() => updateentity(seperate)} style={{padding: "2px", fontSize: "10px"}}>Update</Button>
                <Button variant='contained' onClick={handleClose} style={{ marginLeft: "3px", padding: "2px", fontSize: "10px" }}>Cancel</Button>
              </div>
            </Box>
          </Modal>
        </Grid>

      </div>
    </>
  );
}
