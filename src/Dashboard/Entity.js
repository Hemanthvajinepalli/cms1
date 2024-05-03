import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import "./Entity.css";

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

export default function Entity() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <Button variant='contained' onClick={handleOpen} style={{ marginLeft: "85%", marginRight: "-10%", marginTop: "1%" }}>Create Entity</Button> <br /> <br />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ padding: '4px' }}
        >
          <Paper elevation={3} sx={{ p: 2, ...style, width: "600px" }}>
            <Typography variant="h5" component="div" style={{ fontWeight: 'bold', textAlign: 'center' }}>
              ENTITY FORM
            </Typography>
            <Grid container spacing={2} style={{ marginTop: '0px' }}>
              <Grid item xs={4}>
                <TextField id="name" label="Name of the Entity" variant="standard" fullWidth />
              </Grid>

              <Grid item xs={4}>
                <TextField id="line1" label="Line1" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField id="line2" label="Line2" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField id="town" label="Town" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField id="district" label="District" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField id="city" label="City" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField id="state" label="State" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField id="country" label="Country" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField id="managementName" label="Management Name" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField id="mobileNumber" label="Mobile Number" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField id="email" label="Email" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField id="password" label="Password" variant="standard" fullWidth />
              </Grid>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '30px' }}>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" style={{ marginLeft: '5px' }}>
                Create
              </Button>
            </div>
          </Paper>
        </Modal>
        <Grid className='entity-cards' container spacing={0} style={{ marginLeft: "19%", cursor: "pointer" }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 255 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlN19waG90b2dyYXBoeV9vZl93b3JzaGlwX3Jvb21fbWluaW1hbF84a18yMjliZGNjZC01OTFlLTQ4OGEtODFhNy1kZGEwNGRmYzJkODFfMS5qcGc.jpg"
                title="Click here for more details"
                style={{ width: "320px", height: "150px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                  CMS001
                </Typography>
              </CardContent>

            </Card>
          </Grid>
          <Grid className='entity-cards' item xs={12} sm={6} md={3} style={{ cursor: "pointer" }}>
            <Card sx={{ maxWidth: 255 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlN19waG90b2dyYXBoeV9vZl93b3JzaGlwX3Jvb21fbWluaW1hbF84a18yMjliZGNjZC01OTFlLTQ4OGEtODFhNy1kZGEwNGRmYzJkODFfMS5qcGc.jpg"
                title="Click here for more details"
                style={{ width: "320px", height: "150px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                  CMS002
                </Typography>

              </CardContent>

            </Card>
          </Grid>
          <Grid className='entity-cards' item xs={12} sm={6} md={4} style={{ cursor: "pointer" }}>
            <Card sx={{ maxWidth: 255 }}>
              <CardMedia
                sx={{ height: 120 }}
                image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlN19waG90b2dyYXBoeV9vZl93b3JzaGlwX3Jvb21fbWluaW1hbF84a18yMjliZGNjZC01OTFlLTQ4OGEtODFhNy1kZGEwNGRmYzJkODFfMS5qcGc.jpg"
                title="Click here for more details"
                style={{ width: "320px", height: "150px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                  CMS003
                </Typography>

              </CardContent>

            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}