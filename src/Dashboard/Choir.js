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



import React, { useState } from 'react';
import { Button, Box, Modal, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Choir = () => {
  const [open, setOpen] = useState(false);
  const [showMemberFields, setShowMemberFields] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleShowMemberFields = () => {
    setShowMemberFields(true);
  };
  return (
    <>
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
        <div style={{ marginLeft: '20%', marginTop: '2%' }}>
          <img
            src="https://gogoanow.com/wp-content/uploads/2018/03/choir-singing.jpg"
            alt=""
            style={{ width: '70%', height: '60vh', borderRadius: '2rem' }}
          />
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
          <TextField label="Image" variant="standard" type='file' fullWidth sx={{ mb: 2 }} />
          <IconButton onClick={handleShowMemberFields}>
            <AddIcon />
            <span style={{fontSize: "15px"}}>Add Member Details</span>
          </IconButton> <br/>
          {showMemberFields && (
            <>
              <TextField label="Image" variant="standard" type='file' fullWidth sx={{ mb: 2 }} />
              <TextField label="Name" variant="standard" fullWidth sx={{ mb: 2 }} />
              <TextField label="Mobile Number" variant="standard" fullWidth sx={{ mb: 2 }} />
              <TextField label="Role" variant="standard" fullWidth sx={{ mb: 2 }} />
            </>
          )}
          <div style={{gap: "10px"}}>
          <Button variant="contained" onClick={handleClose}>
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



