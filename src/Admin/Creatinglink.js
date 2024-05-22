import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import React from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Creatinglink = () => {

    const [open, setopen] = React.useState(false);
    const handlemodalopen = () => setopen(true);
    const handleClose = () => setopen(false);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={10}></Grid>
                <Grid item xs={12} md={2}>
                    <Button variant="text" style={{ textAlign: "end" }} onClick={handlemodalopen}>Create Prayer</Button>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={9}></Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <TextField id="standard-basic" label="Name" variant="standard" />
                        <p>Description</p>
                        <textarea></textarea>
                        <br/>
                        <TextField type='date' placeholder='Enter the Date' id="standard-basic" variant="standard" />
                        <br/>
                        <TextField  type='time' id="standard-basic" variant="standard" />
                        <br/>
                        <TextField id="standard-basic" label="Link" variant="standard" />
                        <div style={{display:"flex",marginTop:"10px",justifyContent:"space-around"}}>
                        <Button variant="contained">Create</Button>
                        <Button variant="contained" onClick={handleClose}>Cancel</Button>
                        </div>
                    </Box>
                </Modal>
            </Grid>
        </>
    )

}
export default Creatinglink;