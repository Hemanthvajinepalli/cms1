import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SubscriptionList() {
  const [open, setOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [openSubscriptionModal, setOpenSubscriptionModal] = React.useState(false);
  const [validity, setValidity] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [discount, setDiscount] = React.useState(90);
  const [finalPrice, setFinalPrice] = React.useState('');

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

  const handleAddSubscription = () => {
    // Add subscription logic here
    setOpenSubscriptionModal(false);
  };

  const handleEdit = () => {
    // Handle edit logic here
    setOpen(false);
  };

  const cards = [
    {
      // title: 'Membership',
      Name: 'CMS-A',
      amount: 3650,
      discount: '90%',
      finalPrice: 365,
    },
    {
      // title: 'Premium Membership',
      Name: 'CMS-B',
      amount: 7300,
      discount: '90%',
      finalPrice: 730,
    },
    {
      // title: 'Pro Membership',
      Name: 'CMS-C',
      amount: 18250,
      discount: '90%',
      finalPrice: 1825,
    },
    {
      // title: 'Pro Membership',
      Name: 'CMS-C',
      amount: 18250,
      discount: '90%',
      finalPrice: 1825,
    },
    {
      // title: 'Pro Membership',
      Name: 'CMS-C',
      amount: 18250,
      discount: '90%',
      finalPrice: 1825,
    },
    {
      // title: 'Pro Membership',
      Name: 'CMS-C',
      amount: 18250,
      discount: '90%',
      finalPrice: 1825,
    },
    {
      // title: 'Pro Membership',
      Name: 'CMS-C',
      amount: 18250,
      discount: '90%',
      finalPrice: 1825,
    },
    
  ];

  return (
    <>
        <Box sx={{ maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
      {/* <h2 style={{ marginLeft: '40%', marginTop: "-0.2%"}}>Membership Plans</h2> <br/> */}
      <div style={{ marginTop: "-.5%" }}>
      <Button
  onClick={handleClickOpenSubscription}
  sx={{
    marginLeft: "83%",
    '&:hover': {
      backgroundColor: 'rgba(17,106,162,255)',
      color: "whitesmoke"
    },
  }}
>          Add Subscription
        </Button>
        <Modal
  open={openSubscriptionModal}
  onClose={handleCloseSubscription}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  style={{ padding: "4px" }}
>
  <Paper elevation={3} sx={{ p: 2, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24 }}>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
      <TextField id="input-1" label="Name" variant="standard" fullWidth />
      <Select
        id="input-4"
        value={validity}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Validity' }}
        variant="standard"
        style={{ marginBottom: 'px' }}
      >
        <MenuItem value="" disabled>
          Validity
        </MenuItem>
        <MenuItem value="1">1 year</MenuItem>
        <MenuItem value="2">2 years</MenuItem>
        <MenuItem value="5">5 years</MenuItem>
      </Select>
      <TextField id="input-2" label="Amount" value={amount} variant="standard" fullWidth />
      <TextField id="input-3" label="Discount" value={discount} variant="standard" fullWidth />
      <TextField id="input-5" label="Final Price" value={finalPrice} variant="standard" fullWidth />
    </Box>
    <div style={{ display: "flex", gap: "20px", marginTop: "16px", marginLeft: "20%"}}>
      <Button variant='contained' onClick={handleAddSubscription}>Create</Button>
      <Button variant='contained' onClick={handleCloseSubscription}>Cancel</Button>
    </div>
  </Paper>
</Modal>
      </div>  <br />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '100%', marginLeft: '15%' }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{ minWidth: 215, width: 'calc(25% - 16px)', cursor: 'pointer' }}
            onClick={() => handleClickOpenCard(card)}
          >
            <CardContent>
              <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                {card.title}
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                {card.Name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Amount : {card.amount} <br />
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Discount : {card.discount} <br />
              </Typography>
              <Typography variant="h5" component="div">
                Final Price : {card.finalPrice}
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
            {selectedCard?.Name}
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
            value={selectedCard?.finalPrice}
            onChange={(e) => setSelectedCard({ ...selectedCard, finalPrice: e.target.value })}
          />
          <div style={{ display: 'flex', justifyContent: 'end', marginTop: '30px', gap: "10px" }}>
            <Button variant='contained' onClick={handleEdit} style={{ marginLeft: '5px' }}>Edit</Button>
            <Button variant='contained' onClick={handleCloseCard}>Close</Button>
          </div>
        </Box>
      </Modal>
      </Box>
    </>
  );
}
