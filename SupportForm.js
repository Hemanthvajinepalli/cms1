
import React, { useState , useEffect} from 'react';
import { Box, Typography, FormControl, MenuItem, TextField, Button } from '@mui/material';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

const SupportForm = ({ handleClose }) => {
  const style = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth:'50%',
    border: '3px solid #000',
    boxShadow: '40%',
    p: 4,
    maxHeight: '70%',
    overflowY: 'auto',
    borderRadius: '10px',
  };

 
  const [entityName, setEntityName] = useState('');
  const [role, setRole] = useState('');
  const [Id, setId] = useState('');
  const [subscriptionId, setSubscriptionId] = useState('');
  const [issueSubject, setIssueSubject] = useState('');
  const [details, setDetails] = useState('');
  const [uploadImg, setUploadImg] = useState('');


  const handleSubmit = async (e) => {
    // You can handle form submission here, for now, let's just log the form data
    e.preventDefault();
  
    try {
      const formData = {
        entityName,
        role,
        Id,
        subscriptionId,
        issueSubject,
        details,
        uploadImg
      };
  
      console.log(formData);
  
      const response = await axios.post('http://localhost:9999/', formData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
     
  };
  

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
   }, []); // Empty dependency array to only run once
     
   const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9999');
      const data = response.data; // Assuming your data is an object
      // Set state with fetched data
      
      setEntityName(data.entityName);
      setRole(data.role);
      setId(data.Id);
      setSubscriptionId(data.subscriptionId);
      setIssueSubject(data.subscriptionId);
      setDetails(data.details);
      setUploadImg(data.uploadImg);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
   };

  return (
    <Box sx={style} >
      <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center", fontSize: "x-large", fontWeight: "Bold" }}>
        Support Form
      </Typography>

      {/* Form Controls */}
      
      {/* Service Request */}

      <form onSubmit={handleSubmit}>

      {/* Entity Name */}
      <TextField
        id="entityName"
        label="Entity Name"
        type="text"
        variant="standard"
        sx={{ width: "100%", marginTop: "3%" }}
        value={entityName}
        onChange={(e) => setEntityName(e.target.value)}
      />

      {/* role */}
      <TextField
        id="role"
        label="Role"
        type="text"
        variant="standard"
        sx={{ width: "100%", marginTop: "3%" }}
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      
       {/* Id */}
       <TextField
        id="Id"
        label="ID"
        placeholder='Eg: Admin Id/Pastor Id/Member Id'
        type="text"
        variant="standard"
        sx={{ width: "100%", marginTop: "3%" }}
        value={Id}
        onChange={(e) => setId(e.target.value)}
      />
      
       {/* SubscriptionId */}
       <TextField
        id="subscriptionId"
        label="Subscription ID"
        type="text"
        variant="standard"
        sx={{ width: "100%", marginTop: "3%" }}
        value={subscriptionId}
        onChange={(e) => setSubscriptionId(e.target.value)}
      />
    {/* issueSubject */}
    <TextField
        id="issueSubject"
        label="Issue Subject"
        type="text"
        variant="standard"
        sx={{ width: "100%", marginTop: "3%" }}
        value={issueSubject}
        onChange={(e) => setIssueSubject(e.target.value)}
      />

      {/* Details */}
      <FormLabel id="details" sx={{ marginTop: "3%" }}>Details</FormLabel>
      <TextareaAutosize
        id="details"
        minRows={4}
        placeholder="Enter details here"
        style={{ width: "100%", marginTop: "3%", padding: '10px' }}
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      {/*uploadImg*/}
      <TextField
        id="uploadImg"
        label="Upload Image"
        type="file"
        variant="standard"
        sx={{ width: "100%", marginTop: "3%" }}
        value={uploadImg}
        onChange={(e) => setUploadImg(e)}
      />

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'right', marginTop: '1.5rem' }}>
        <Button onClick={handleSubmit} variant="contained" sx={{ width:'20%', marginRight: '5%',backgroundColor: 'blue', color: 'white' }}>
          Submit
        </Button>
        <Button onClick={handleClose} variant="contained" sx={{width:'20%', backgroundColor: 'red', color: 'white' }}>
          Cancel
        </Button>
      </div>
      </form>
    </Box>
  );
};

export default SupportForm;
