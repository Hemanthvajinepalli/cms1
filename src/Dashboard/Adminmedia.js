import * as React from 'react';
import { useRef } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import noimage from '../images/noimage.jpg';


const StyledButton = styled(Button)({
    marginTop: "8px",
    '&:hover': {
        backgroundColor: 'primary.main',
        color: 'common.white',
    },
});

const StyledCard = styled(Card)({
    maxWidth: 345,
    maxHeight: 150,
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.1)',
    },
});

const Adminmedia = () => {
    const fileInputRef = useRef(null);
    const [open, setopen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const userid =sessionStorage.getItem("Id");
    const churchid=sessionStorage.getItem("churchid");
    const handleaddmediamodal = () => {
        setopen(true);
    }
    const handleclosemediamodal = () => {
        setopen(false);

    }
    const addmedia=()=>{
        const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch(`http://localhost:9999/media/upload/${churchid}/${userid}`, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Handle success response
        console.log('File uploaded successfully');
        handleclosemediamodal(); // Close the modal after successful upload
    })
    .catch(error => {
        // Handle error
        console.error('Error uploading file:', error);
    });

    }

    React.useEffect(() => {
        // fetch(`http://localhost:9999/church/${superid}`)
        //     .then(response => response.json())
        //     .then(value => setData(value))
        //     .catch(error => console.error('Error fetching data:', error));
        setIsLoading(true);
        return () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 3000)
        };
    }, [])
    return (
        <>
            {isLoading ? (
                <Grid container>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={6} style={{ marginTop: "150px" }}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' style={{ width: "50px", height: "50px" }} alt='loader' />
                </Grid>
            </Grid>
            ): (
                <>
                <Grid container spacing = { 4 }>
    <Grid item xs = { 6 } md = { 12 } style = {{ display: 'flex', justifyContent: 'flex-end' }}>
            <StyledButton variant='text' onClick={handleaddmediamodal}>
                Add Media
            </StyledButton>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={handleclosemediamodal}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        // border: '2px solid #000',
                        boxShadow: 24,
                        borderRadius: "5px",
                        p: 4,
                    }}
                >
                    <TextField label="Image" variant="standard" inputRef={fileInputRef} type='file' fullWidth sx={{ mb: 3 }} />
                    <br />
                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <Button variant="contained" style={{ marginRight: "5px" }} onClick={addmedia}>
                            Add
                        </Button>
                        <Button variant="contained" onClick={handleclosemediamodal}>
                            Cancel
                        </Button>
                    </div>
                </Box>
            </Modal>
        </Grid >
      <Grid item xs={6} md={1} lg={1} xl={1}></Grid>
      <Grid item xs={6} md={11} lg={11} xl={11} style={{ padding: "60px" }}>

      </Grid>
    </Grid >
    </>
)}
            </>
        )
}

export default Adminmedia;