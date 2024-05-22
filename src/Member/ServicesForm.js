
import React, { useState , useEffect} from 'react';
import { Box, Typography, FormControl, MenuItem, TextField, Button } from '@mui/material';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

const ServiceForm = ({ handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto',
  };

  const today = new Date().toISOString().split('T')[0];

  const [ServiceType, setServiceType] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(today);
  const [time, setTime] = useState('');
  const [AddressLine1, setAddressLine1] = useState('');
  const [AddressLine2, setAddressLine2] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [details, setDetails] = useState('');

  const handleClear = () => {
    setServiceType('');
    setName('');
    setAge('');
    setGender('');
    setDate(today);
    setTime('');
    setAddressLine1('');
    setAddressLine2('');
    setMobileNumber('');
    setDetails('');
  };
  const handleSubmit = async (e) => {
    // You can handle form submission here, for now, let's just log the form data
    e.preventDefault();
  
    try {
      const formData = {
        ServiceType,
        name,
        age,
        gender,
        date,
        time,
        AddressLine1,
        AddressLine2,
        mobileNumber,
        details
      };
  
      console.log(formData);
  
      const response = await axios.post('http://localhost:9999/api/servicerequests', formData);
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
      const response = await axios.get('http://localhost:9999/api/servicerequests/5');
      const data = response.data; // Assuming your data is an object
      // Set state with fetched data
      setServiceType(data.ServiceRequest);
      setName(data.name);
      setAge(data.age);
      setGender(data.gender);
      setDate(data.date);
      setTime(data.time);
      setAddressLine1(data.AddressLine1);
      setAddressLine2(data.AddressLine2);
      setMobileNumber(data.mobileNumber);
      setDetails(data.details);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
   };

  return (
    <Box sx={style} >
      <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center", fontSize: "x-large", fontWeight: "Bold" }}>
        Service Type
      </Typography>

      {/* Form Controls */}
      
      {/* Service Request */}

      <form onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ marginTop: "1cm" }}>
        <TextField
          id="ServiceType"
          label="Service Type"
          variant="standard"
          select
          fullWidth
          value={ServiceType}
          onChange={(e) => setServiceType(e.target.value)}
        >
          <MenuItem value="" disabled>Select a service</MenuItem>
          <MenuItem value="baptism">Baptism</MenuItem>
          <MenuItem value="burial">Burial</MenuItem>
          <MenuItem value="homevisit">Home Visit</MenuItem>
          <MenuItem value="weeklyservice">Weekly Service</MenuItem>
          <MenuItem value="specialprayers">Special Prayers</MenuItem>
          <MenuItem value="confessions">Confessions</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
      </FormControl>

      {/* Name */}
      <TextField
        id="name"
        label="Name"
        type="text"
        variant="standard"
        sx={{ width: "100%", marginTop: "5%" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Age */}
      <TextField
        id="age"
        label="Age"
        type="number"
        variant="standard"
        sx={{ width: "100%", marginTop: "5%" }}
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      {/* Gender */}
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ marginTop: "5%" }}>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ marginTop: "5%" }}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>

      {/* Date */}
      <TextField
        id="date"
        label="Date"
        type="date"
        variant="standard"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ min: today }}
        sx={{ width: "100%", marginTop: "5%" }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {/* Time */}
      <TextField
        id="time"
        label="Time"
        type="time"
        variant="standard"
        InputLabelProps={{
          shrink: true,
        }}
        // inputProps={{
        //   step: 300,
        // }}
        sx={{ width: "100%", marginTop: "5%" }}
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      {/* Address */}
      <Typography variant="h6" sx={{ marginTop: "7%" }}>Address</Typography>
      <TextField
        id="AddressLine1"
        label="Address Line 1"
        variant="standard"
        sx={{ width: "100%" }}
        value={AddressLine1}
        onChange={(e) => setAddressLine1(e.target.value)}
      />
      <TextField
        id="AddressLine2"
        label="Address Line 2"
        variant="standard"
        sx={{ width: "100%", marginTop: "5%" }}
        value={AddressLine2}
        onChange={(e) => setAddressLine2(e.target.value)}
      />

      {/* Mobile Number */}
      <TextField
        id="mobileNumber"
        label="Mobile Number"
        type="tel"
        variant="standard"
        sx={{ width: "100%", marginTop: "5%" }}
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />

      {/* Details */}
      <FormLabel id="details" sx={{ marginTop: "5%" }}>Details</FormLabel>
      <TextareaAutosize
        id="details"
        minRows={5}
        placeholder="Enter details here"
        style={{ width: "100%", marginTop: "5%", padding: '10px' }}
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor: 'blue', color: 'white' }}>
          Submit
        </Button>
        <Button onClick={handleClear} variant="contained" sx={{ backgroundColor: 'gray', color: 'white' }}>
          Clear
        </Button>
        <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: 'red', color: 'white' }}>
          Cancel
        </Button>
      </div>
      </form>
    </Box>
  );
};

export default ServiceForm;
