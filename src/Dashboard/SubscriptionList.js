
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { MenuItem, Select, Paper } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const SubscriptionList = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false);
  const [validity, setValidity] = useState('');
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState(90);
  const [totalAmount, setTotalAmount] = useState('');
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [churchId, setChurchId] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isLoading, setIsLoading] = useState(false);
  const [subscriptionCards, setSubscriptionCards] = useState([]);

  const handleChange = (event) => {
    setValidity(event.target.value);
  };

  useEffect(() => {
    const userIdFromSessionStorage = sessionStorage.getItem("Id");
    if (userIdFromSessionStorage) {
      setUserId(userIdFromSessionStorage);
    }
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    if (amount && discount) {
      const calculatedPrice = (amount * (100 - discount)) / 100;
      setTotalAmount(calculatedPrice.toFixed(2));
    } else {
      setTotalAmount('');
    }
  }, [amount, discount]);

  const handleClickOpenCard = (card) => {

    setSelectedCard(card);
    setOpen(true);
  };

  const handleCloseCard = () => {
    setOpen(false);
  };

  const handleClickOpenSubscription = () => {
    setOpenSubscriptionModal(true);
  };

  const handleCloseSubscription = () => {
    setOpenSubscriptionModal(false);
  };


  const handleEdit = async(id) => {
    const data={
      selectedCard}
    const response= await axios.put(`http://localhost:9999/subscription/update/${id}`,data);
    if(response.status===200){
      showSnackbar('Subscription updated successfully.', 'success');
    }
    setOpen(false);
  };

  const handleSubmit = () => {

    if (!name || !validity || !amount || !discount ||
      name.trim() === '' || isNaN(amount) || isNaN(discount)) {
      showSnackbar('Please fill in all fields.', 'error');
      return;
    }

    setIsLoading(true);

    const currentDate = new Date();
    const endDate = new Date(currentDate);
    endDate.setFullYear(endDate.getFullYear() + parseInt(validity, 10));

    const postData = {
      name: name,
      amount: amount,
      discount: discount,
      validity: endDate.toISOString(),
      userId: userId,
      churchId: churchId,
      totalAmount: totalAmount
    };

    fetch(`http://localhost:9999/subscription/create/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Subscription added successfully:', data);
        showSnackbar('Subscription added successfully', 'success');
        setIsLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      })
      .catch(error => {
        console.error('There was a problem adding the subscription:', error.message);
        showSnackbar('There was a problem adding the subscription', 'error');
        setIsLoading(false);
      });
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    fetch('http://localhost:9999/subscription/all')
      .then(response => response.json())
      .then(data => {
        setSubscriptionCards(data);
      })
      .catch(error => {
        console.error('Error fetching subscription cards:', error);
      });
  }, []);


  
  return (
    <>
      <Box sx={{ maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
        <div style={{ marginTop: "-.3%" }}>
          <Button
            onClick={handleClickOpenSubscription}
            sx={{
              marginLeft: "83%",
              '&:hover': {
                backgroundColor: 'rgba(17,106,162,255)',
                color: "whitesmoke"
              },
            }}
          >
            Add Subscription
          </Button>
          <Modal
            open={openSubscriptionModal}
            onClose={handleCloseSubscription}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ padding: "4px" }}
          >
            <Paper elevation={3} sx={{ p: 2, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24 }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <TextField id="input-1" label="Name" value={name} variant="standard" fullWidth required
                  onChange={(e) => setName(e.target.value)}
                />
                <Select
                  id="input-4"
                  value={validity}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Validity' }}
                  variant="standard"
                  style={{ marginBottom: 'px' }}
                  required
                >
                  <MenuItem value="" disabled>
                    Validity
                  </MenuItem>
                  <MenuItem value="1">1 year</MenuItem>
                  <MenuItem value="2">2 years</MenuItem>
                  <MenuItem value="5">5 years</MenuItem>
                </Select>
                <TextField id="input-2" label="Amount" value={amount} variant="standard" fullWidth required 
                InputProps={{
                  sx: { textDecoration: 'line-through' }
                }}/>
                <TextField id="input-3" label="Discount" value={discount} variant="standard" fullWidth required />
                <TextField id="input-5" label="Final Price" value={totalAmount} variant="standard" fullWidth required />
              </Box>
              <div style={{ display: "flex", gap: "20px", marginTop: "16px", marginLeft: "20%" }}>
                <Button variant='contained' onClick={handleSubmit}>Create</Button>
                <Button variant='contained' onClick={handleCloseSubscription}>Cancel</Button>
              </div>
            </Paper>
          </Modal>
        </div>
        <br />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '100%', marginLeft: '15%' }}>
          {subscriptionCards.map((card, index) => (
            <Card
              key={index}
              sx={{ minWidth: 215, width: 'calc(25% - 16px)', cursor: 'pointer' }}
              onClick={() => handleClickOpenCard(card)}
            >
              <CardContent >
              
                <Typography sx={{ fontSize: 20, fontWeight: 'bold', alignItems: 'center' }} color="text.secondary" gutterBottom>
                  {card.id}
                </Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                  {card.name}
                </Typography>
                <Typography sx={{ mb: 1.5, textDecoration: 'line-through' }} color="text.secondary"
              >
                  Amount : {card.amount} <br />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Discount : {card.discount}% <br />
                </Typography>
                <Typography variant="h5" component="div">
                  Final Price : {card.totalAmount}
                </Typography>
                
              </CardContent>
              
            </Card>
          ))}
        </Box>
        <Modal
          open={open}
          onClose={handleCloseCard}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ padding: "4px" }}
        >
          <Box sx={style}>
            <Typography variant="h5" component="div">
              {selectedCard?.name}
            </Typography>
            <TextField
              fullWidth
              id="standard-basic"
              label="Amount"
              variant="standard"
              value={selectedCard?.amount}
              onChange={(e) => setSelectedCard({ ...selectedCard, amount: e.target.value })}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Discount"
              variant="standard"
              value={selectedCard?.discount}
              onChange={(e) => setSelectedCard({ ...selectedCard, discount: e.target.value })}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Final Price"
              variant="standard"
              value={selectedCard?.totalAmount}
              onChange={(e) => setSelectedCard({ ...selectedCard, totalAmount: e.target.value })}
            />
            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '30px', gap: "10px" }}>
              <Button variant='contained' onClick={()=>handleEdit(selectedCard.id)} style={{ marginLeft: '5px' }}>Edit</Button>
              <Button variant='contained' onClick={handleCloseCard}>Close</Button>
            </div>
          </Box>
        </Modal>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="Loading" style={{ width: "5%", height: "10vh" }} />
        </div>
      )}
    </>
  );
}

export default SubscriptionList;
