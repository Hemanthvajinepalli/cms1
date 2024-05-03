import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from './Card';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledButton = styled(Button)({
  marginTop: "8px",
  '&:hover': {
    backgroundColor: 'primary.main',
    color: 'common.white',
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

export default function FullWidthGrid() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [address1, setLine1] = React.useState('');
  const [address2, setLine2] = React.useState('');
  const [town, setTown] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [street, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [pincode, setCountry] = React.useState('');
  const [firstName, setAdminName] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  const [contactNumber, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');
  const[otp,setotp]=React.useState('');
  const[createdBy,setCreatedBy]=React.useState('Super Admin');
  const[image,setimage]=React.useState('');
  const [showEmailInput, setShowEmailInput] = React.useState(false);
  const [showMobileInput, setShowMobileInput] = React.useState(false);
  const[mobotp,setMobotp]=React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEmailVerify = async() => {
    
    try{
      const formData = new FormData();
    // Append the email value to the FormData object
    formData.append('email', email);
    const url = 'http://localhost:9999/user/api/sendEmailotp';
    const response = await axios.post(url,formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Response status:', response.status);
    if (response.status === 200) {
      setShowEmailInput(true);
    }else{
      setShowEmailInput(false);
    }
  }catch(err){
    console.log(err);
  }
  };

  const handleMobileVerify =async () => {
   
    try{
      const formData = new FormData();
    // Append the email value to the FormData object
    formData.append('numbers', contactNumber);
    formData.append('route', 'otp');
    const url = 'http://localhost:9999/user/api/sendPhoneotp';
    const response = await axios.post(url,formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Response status:', response.status);
    if (response.status === 200) {
      setShowMobileInput(true);
    }else{
      setShowMobileInput(false);
    }
  }catch(err){
    console.log(err);
  }
  };

  const handleEmailInputClose = () => {
    setShowEmailInput(false);
  };

  const handleMobileInputClose = async() => {
    try{
      const formData = new FormData();
    // Append the email value to the FormData object
    formData.append('numbers', contactNumber);
    formData.append('otp', mobotp);
    const url = 'http://localhost:9999/user/api/verifyPhoneOtp';
    const response = await axios.post(url,formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Response status:', response.status);
    if (response.status === 200) {
      setShowMobileInput(false);
      document.getElementById('mobileverify').innerHTML="verified"
      document.getElementById('mobileverify').style.backgroundColor= "green";
      document.getElementById('mobileverify').style.color= "white";
      document.getElementById('mobileverify').attribute="disabled";
    }else{
      setShowMobileInput(true);
    }
  }catch(err){
    console.log(err);
  }
  };

  const handleEmailOtp = async () => {
    try{
      const formData = new FormData();
    // Append the email value to the FormData object
    formData.append('email', email);
    formData.append('otp',otp);
    const response= await axios.post('http://localhost:9999/user/api/verifyEmailOtp',formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if(response.data==='Otp is Verified...'){
      setShowEmailInput(false);
      document.getElementById('emailverify').innerHTML="Verified"
      document.getElementById('emailverify').style.backgroundColor= "green";
      document.getElementById('emailverify').style.color= "white";
    }else{
      alert("some error occured");
    }
  }catch(error){
    console.log(error);
  }
    
  };

  React.useEffect(() => {
    setIsLoading(true);
    return () => {
      setTimeout(()=>{
        setIsLoading(false);
      },3000)
    };
  }, []);

  const entityCreation = async() => {
    
    // Basic validation for required fields
    if (!name || !address || !firstName || !contactNumber || !email) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validation for mobile number format (assuming 10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(contactNumber)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    try{

      const entitydata={
        name,
        createdBy,
        address1,
        address2,
        street,
        pincode,
        state,
        town,
        image,
        firstName,
        contactNumber,
        designation,
        email,
    }
      const response=await axios.post('http://localhost:9999/api/church/form',entitydata);
      console.log(response);
      
      if(response.status===200){
        setIsLoading(true);
        setTimeout(()=>{
          setIsLoading(false);
        },3000)
        alert('Entity created successfully');
      }else{
        alert(response.data);
      }
      
    }catch(error){
      console.log(error);
    }
    handleClose();
  };

  return (
    <div style={{ overflowY: "auto", maxHeight: "calc(95vh - 3cm)" }}>
      <div>
     {isLoading ? (<Grid container>
      <Grid item xs={6} md={6}></Grid>
      <Grid item xs={6} md={6} style={{marginTop:"150px"}}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' style={{width:"50px",height:"50px"}} alt='loader'/>
      </Grid>
     </Grid>):(
    <Grid container spacing={2}>
      <Grid item xs={6} md={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <StyledButton variant='text' onClick={handleOpen}>
          Create Entity
        </StyledButton>
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
            <TextField id="standard-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name of the Entity" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={address} onChange={(e) => setAddress(e.target.value)} label="Address" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={address1} onChange={(e) => setLine1(e.target.value)} label="Line1" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={address2} onChange={(e) => setLine2(e.target.value)} label="Line2" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={town} onChange={(e) => setTown(e.target.value)} label="Town" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={district} onChange={(e) => setDistrict(e.target.value)} label="District" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={street} onChange={(e) => setCity(e.target.value)} label="Street" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={state} onChange={(e) => setState(e.target.value)} label="State" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={pincode} onChange={(e) => setCountry(e.target.value)} label="Pincode" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={firstName} onChange={(e) => setAdminName(e.target.value)} label="Administrator Name" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={designation} onChange={(e) => setDesignation(e.target.value)} label="Designation" variant="standard" style={{ paddingRight: "10px" }} />
            <TextField id="standard-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="standard" style={{ paddingRight: "10px" }} />
            <Button variant='contained' id='emailverify' onClick={handleEmailVerify} style={{ marginTop: "13px", fontSize: "10px" }}>Send OTP</Button>
            {showEmailInput && (
              <>
                <TextField id="standard-basic" value={otp} onChange={(e) => setotp(e.target.value)} label="Email" variant="standard" style={{ paddingRight: "10px" }} />
                <Button variant='contained'  onClick={handleEmailOtp} style={{ marginTop: "13px", fontSize: "10px" }}>Verify Email</Button>
                <br />
              </>
            )}
            <TextField id="standard-basic"  value={contactNumber} onChange={(e) => setMobile(e.target.value)} label="Mobile" variant="standard" style={{ paddingRight: "10px" }} />
            <Button variant='contained' id='mobileverify' onClick={handleMobileVerify} style={{ marginTop: "13px", fontSize: "10px" }}>Send OTP</Button>
            {showMobileInput && (
              <>
                <TextField id="standard-basic" value={mobotp} onChange={(e) => setMobotp(e.target.value)} label="Mobile" variant="standard" style={{ paddingRight: "10px" }} />
                <Button variant='contained' onClick={handleMobileInputClose} style={{ marginTop: "13px", fontSize: "10px" }}>Verify Mobile</Button>
              </>
            )}
            <br />
            <div style={{ display: "flex", justifyContent: "end", marginTop: "30px" }}>
              <Button variant='contained' onClick={entityCreation} disabled={!name || !address || !firstName || !contactNumber || !email}>Create</Button>
              <Button variant='contained' onClick={handleClose} style={{ marginLeft: "3px" }}>Cancel</Button>
            </div>
          </Box>
        </Modal>
      </Grid>
      <Grid item xs={6} md={1}></Grid>
      <Grid item xs={6} md={11} style={{ padding: "30px" }}>
        <MediaCard />
      </Grid>
    </Grid>
  )}
  </div>
    </div>
  );
}
