import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'; 

export default function Subscription() {
  const [validity, setValidity] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [discount, setDiscount] = React.useState(90);
  const [finalPrice, setFinalPrice] = React.useState('');
  const [open, setOpen] = React.useState(true); 

  const handleChange = (event) => {
    setValidity(event.target.value);
  };

  React.useEffect(() => {
    if (validity === '1') {
      setAmount('3650');
    } else if (validity === '2') {
      setAmount('7300');
    } else if (validity === '5') {
      setAmount('18250');
    } else {
      setAmount('');
    }
  }, [validity]);

  React.useEffect(() => {
    if (amount && discount) {
      const calculatedPrice = (amount * (100 - discount)) / 100;
      setFinalPrice(calculatedPrice.toFixed(2));
    } else {
      setFinalPrice('');
    }
  }, [amount, discount]);

  const handleClose = () => {
    console.log('Closing...');
    setOpen(false);
  };
  
  

  return (
    
      <Paper elevation={3} sx={{ p: 2 }}>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-1" label="Name" variant="standard"/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Select
              id="input-4"
              value={validity}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Validity' }}
              variant="standard"
              style={{ width: '106.5%' }}
            >
              <MenuItem value="" disabled>
                Validity
              </MenuItem>
              <MenuItem value="1">1 year</MenuItem>
              <MenuItem value="2">2 years</MenuItem>
              <MenuItem value="5">5 years</MenuItem>
            </Select>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-2" label="Amount" value={amount} variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-3" label="Discount" value={discount} variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-5" label="Final Price" value={finalPrice} variant="standard" />
          </Box>
          <div style={{display: "flex", gap: "10px"}}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button >Create</Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleClose}>Close</Button>
          </Box>
          </div>
        </Box>
      </Paper>
  );
}