// import React, { useState } from 'react';
// import { TextField, Button, Grid, Select, MenuItem, FormControl, InputLabel, Paper, Modal } from '@mui/material';
// import Box from '@mui/material/Box';

// const Choir = () => {
//   const [members, setMembers] = useState([{ imageName: '', role: '' }]);
//   const [open, setOpen] = useState(false);

//   const handleAddMember = () => {
//     setMembers([...members, { imageName: '', role: '' }]);
//   };

//   const handleMemberChange = (index, field, value) => {
//     const updatedMembers = [...members];
//     updatedMembers[index][field] = value;
//     setMembers(updatedMembers);
//   };

//   const handleOpenModal = () => {
//     setOpen(true);
//   };

//   const handleCloseModal = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Box sx={{ maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
//         <Paper elevation={3} sx={{ p: 2 }}>
//           <TextField
//             label="Choir Image"
//             type="file"
//             variant="standard"
//             fullWidth
//           />
//           {members.map((member, index) => (
//             <Grid container spacing={2} key={index}>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Image Name"
//                   variant="standard"
//                   fullWidth
//                   value={member.imageName}
//                   onChange={(e) => handleMemberChange(index, 'imageName', e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={4}>
//                 <FormControl variant="standard" fullWidth>
//                   <InputLabel>Role</InputLabel>
//                   <Select
//                     value={member.role}
//                     onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
//                     label="Role"
//                   >
//                     <MenuItem value="member">Member</MenuItem>
//                     <MenuItem value="pastor">Pastor</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//             </Grid>
//           ))}
//           <Button variant="standard" onClick={handleAddMember} style={{ marginTop: '10px' }}>
//             Add Member
//           </Button>
//           <Button variant="standard" onClick={handleOpenModal} style={{ marginTop: '10px' }}>
//             Open Modal
//           </Button>
//         </Paper>
//       </Box>
//       <Modal
//         open={open}
//         onClose={handleCloseModal}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
//           <h2>Add Member Modal</h2>
//           <TextField
//             label="Image Name"
//             variant="standard"
//             fullWidth
//           />
//           <FormControl variant="standard" fullWidth>
//             <InputLabel>Role</InputLabel>
//             <Select
//               value=""
//               label="Role"
//             >
//               <MenuItem value="member">Member</MenuItem>
//               <MenuItem value="pastor">Pastor</MenuItem>
//             </Select>
//           </FormControl>
//           <Button variant="contained" onClick={handleCloseModal} style={{ marginTop: '10px' }}>
//             Add
//           </Button>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default Choir;






// import React, { useState } from 'react';
// import { Button, Box, Modal, TextField } from '@mui/material';

// const Choir = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Box sx={{ maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
//         <Button
//           sx={{
//             marginLeft: '83%',
//             '&:hover': {
//               backgroundColor: 'rgba(17,106,162,255)',
//               color: 'whitesmoke',
//             },
//           }}
//           onClick={handleOpen}
//         >
//           Add Choir
//         </Button>
//         <div style={{ marginLeft: '20%', marginTop: '2%' }}>
//           <img
//             src="https://gogoanow.com/wp-content/uploads/2018/03/choir-singing.jpg"
//             alt=""
//             style={{ width: '70%', height: '60vh', borderRadius: '2rem' }}
//           />
//         </div>
//       </Box>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             border: '2px solid #000',
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <TextField label="Image" variant="standard" type='file' fullWidth sx={{ mb: 2 }} />
//           <TextField label="Role" variant="standard" fullWidth sx={{ mb: 2 }} />
//           <TextField label="Mobile" variant="standard" fullWidth sx={{ mb: 2 }} />
//           <Button variant="contained" onClick={handleClose}>
//             Add Choir
//           </Button>
//           <Button variant="contained" onClick={handleClose}>
//             Cancel
//           </Button>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default Choir;



import React, { useState,useRef } from 'react';
import { Button, Box, Modal, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import noimage from '../images/noimage.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

const StyledCard = styled(Card)({
  maxWidth: 250,
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
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Choir = () => {
  const [open, setOpen] = useState(false);
  const [choirmodalopen, setchoirmodalOpen] = React.useState(false);
  const [showMemberFields, setShowMemberFields] = useState(false);
  const[snackopen,setsnackopen]=React.useState(false);
  const[snackstatus,setsnackstatus]=React.useState('');
  const[message,setmessage]=React.useState('');
  const fileInputRef = useRef(null);
  const[choirid,setchoirid]=React.useState('');
  const[createdBy,setcreatedby]=React.useState('');
  const[choirmembername,setchoirmembername]=React.useState('');
  const[choirmember,setchoirmember]=React.useState([]);
  const userid=sessionStorage.getItem("Id");
  const role=sessionStorage.getItem('role');
  const churchid=sessionStorage.getItem('churchid');
  const[choirimage,setchoirimage]=React.useState({
    choirMemberName:'',
    phoneNumber:'',
    roleName:'',
    imageUrl:'',
  });
  const[choirdata,setchoirdata]=React.useState({
    imageUrl:'',

  })
  const [files, setFiles] = useState([]);

  React.useEffect(()=>{
    fetch(`http://localhost:9999/choir/view/${churchid}`)
    .then(response=>response.json())
    .then(data=>{
      if(data){
        const value = Array.isArray(data) ? data : [data];
          setchoirmember(value);
          const seperatechoir=data;
          setchoirid(seperatechoir.choirId);
          setcreatedby(seperatechoir.createdBy);
          setchoirmembername(seperatechoir.choirMembers.choirMemberName);
      }else{
        setchoirmember([]);
      }
    })
    .catch(error=>alert(error))
  },[])

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={()=>setsnackopen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // setsnackopen(false);
  };
  const handlechoiropen = () => setchoirmodalOpen(true);
  const handlechoirclose = () => setchoirmodalOpen(false);

  const handleShowMemberFields = () => {
    setShowMemberFields(true);
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setchoirdata({ ...choirdata, imageUrl: file });
      };
      reader.readAsDataURL(file);
      setchoirdata({ ...choirdata, imageUrl: file });
    }
  };
  const handlememberImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setchoirimage({ ...choirimage, imageUrl: file });
      setFiles([...files, file]);
    }
  };
  const choirmemberupload = async () => {
    const formData = new FormData();
    const members = [{
      choirMemberName: choirimage.choirMemberName,
      memberRoleName: choirimage.roleName,
      phoneNumber: choirimage.phoneNumber,
    }];
    
    formData.append('members', new Blob([JSON.stringify(members)], { type: 'application/json' }));
    files.forEach((file, index) => {
      formData.append('file', file);
    });

    try {
      const response = await axios.post(`http://localhost:9999/choir/create/member/${userid}/${churchid}/6`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        setmessage(response.data.success);
        setsnackopen(true);
      } else {
        setmessage('Failed to add choir');
        setsnackopen(true);
      }
    } catch (error) {
      setmessage(error.message);
      setsnackopen(true);
    }
  };

  // const handlechoirmember=async()=>{
  //   const formData = new FormData();
  //   formData.append("choirMemberName",choirdata.choirMemberName);
  //   formData.append("phoneNumber",choirdata.phoneNumber);
  //   formData.append("roleName",choirdata.roleName);
  //   formData.append("file",choirdata.imageUrl);
  //   try{
  //     const res = await axios.post(`http://localhost:9999/choir/create/member/${userId}/${churchId}/${choirId}`,formData,{
  //       headers: {
  //         "Content-Type": "multipart/form-data", 
  //         }
  //     });
  //     console.log(res.data);
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }

  const choirimageupload = async () => {
    const formData = new FormData();

    try {
      formData.append('file', choirdata.imageUrl);
      const response = await axios.post(`http://localhost:9999/choir/create/${userid}/${churchid}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });  
      if (response.status===201) {
        setmessage(response.data.success);
        setsnackstatus('success');
        setsnackopen(true);
        console.log(response);
        sessionStorage.setItem("choirid");
      } else {
        setmessage('Failed to add choir');
        setsnackstatus('error');
        setsnackopen(true);
      }
    } catch (error) {
      setmessage(error.message);
      setsnackopen(true);
    }
  }
  
  return (
    <>
    {snackopen && (
        <div style={{ display: "flex", justifyContent: "end" }}>
          <div>
            <Snackbar
              open={snackopen}
              autoHideDuration={3000}
              message={message}
              action={action}
              onClose={() => setsnackopen(false)}
              style={{
                position: "relative", top: "0px", left: "0px",backgroundColor:snackstatus=== 'success'? 'green':'red'
              }}
            />
          </div>
        </div>
      )}
      <Box sx={{ maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
        <Button
          sx={{
            marginLeft: '83%',
            '&:hover': {
              backgroundColor: 'rgba(17,106,162,255)',
              color: 'whitesmoke',
            },
          }}
          onClick={handleOpen}
        >
          Add Choir
        </Button>
        {/* <div style={{ marginLeft: '20%', marginTop: '2%' }}>
          <img
            src="https://gogoanow.com/wp-content/uploads/2018/03/choir-singing.jpg"
            alt=""
            style={{ width: '70%', height: '60vh', borderRadius: '2rem' }}
          />
        </div> */}
        <div>
          <Grid container spacing={2}>
        {choirmember.map((value)=>(
            <>
            <Grid item xs={12} sm={12} md={1}></Grid>
            <Grid item xs={12} sm={12} md={3}>
            <StyledCard onClick={handlechoiropen}>
                  <CardMedia
                    component={value.imageUrl ? "img" : ""}
                    height="160"
                    image={value.imageUrl ? value.imageUrl : "No Image"}
                    title={value.imageUrl ? "Click here for more details" : "Click here for more details"}
                    style={{ width: '260px', height: '110px', backgroundImage: `url(${noimage})`, color: "white" }}
                    alt={value.imageUrl ? "Images" : "No Image"}
                    // onError={"No Image"}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}>
                      {value.choirId}
                    </Typography>
                  </CardContent>
                </StyledCard> 
                </Grid>
                <Modal
        open={choirmodalopen}
        onClose={handlechoirclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontSize: '15px', fontFamily: 'sans-serif',paddingBottom:"10px" }}>
              ChoirMembers
        </Typography>
        
        {value.choirMembers.map(member=>(
          <>
          <div style={{display:"flex",justifyContent:"space-evenly"}}> 
        <TextField id="standard-basic" label="Choir Id" value={member.choirMemberId} variant="standard" />
        <TextField id="standard-basic" label="Member Name" value={member.choirMemberName} variant="standard" />
        </div>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
                  <TextField id="standard-basic" label="Member Name" value={member.memberRoleName} variant="standard" />
                  <TextField id="standard-basic" label="Member Name" value={member.phoneNumber} variant="standard" />
          </div>
          </>

        ))}

        </Box>
      </Modal>
            </>
          )
        )}
        </Grid>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
           <input
                      type="file"
                      accept="image"
                      style={{ marginBottom: '0.5rem', marginLeft: "0.3cm" }}
                      onChange={(event) => handleImageUpload(event)}
                      ref={fileInputRef}
                    />
                    <button onClick={choirimageupload}>Upload</button>
          {/* <TextField label="Image" variant="standard" type='file' onChange={(e)=>setchoirdata({ ...choirdata, image: file })} fullWidth sx={{ mb: 2 }} /> */}
          <IconButton onClick={handleShowMemberFields}>
            <AddIcon />
            <span style={{fontSize: "15px"}}>Add Member Details</span>
          </IconButton> <br/>
          {showMemberFields && (
            <>
              {/* <TextField label="Image" variant="standard"  type='file' fullWidth sx={{ mb: 2 }} /> */}
              <input
                      type="file"
                      accept="image/*"
                      onChange={handlememberImageUpload}
                      style={{ marginBottom: '0.5rem', marginLeft: "0.3cm" }}
                      ref={fileInputRef}
                    />
              <TextField label="Name" variant="standard" value={choirimage.choirMemberName}
                    onChange={(e) => setchoirimage({ ...choirimage, choirMemberName: e.target.value })} fullWidth sx={{ mb: 2 }} />
              <TextField label="Mobile Number" variant="standard" value={choirimage.phoneNumber}
                    onChange={(e) => setchoirimage({ ...choirimage, phoneNumber: e.target.value })} fullWidth sx={{ mb: 2 }} />
              <TextField label="Role" variant="standard" value={choirimage.roleName} onChange={(e)=>setchoirimage({...choirimage,roleName:e.target.value})} fullWidth sx={{ mb: 2 }} />
            </>
          )}
          <div style={{gap: "10px"}}>
          <Button variant="contained" onClick={choirmemberupload}>
            Add Choir
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Choir;



