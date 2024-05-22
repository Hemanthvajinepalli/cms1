import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Paper, TextField, Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useEffect, useState, useRef } from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Advertisement from './Advertisement';
import ChurchIcon from '@mui/icons-material/Church';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EntityIcon from '@mui/icons-material/AccountTree';
import SubscriptionList from './SubscriptionList';
import Services from './Services';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import BusinessIcon from '@mui/icons-material/Business';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ListIcon from '@mui/icons-material/List';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Entity from './Entity';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import Choir from "./Choir";
import HomeIcon from '@mui/icons-material/Home';
import FullWidthGrid from './interviene';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Gallerydisplay from './GalleryInterviene';
import CollectionsIcon from '@mui/icons-material/Collections';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Swal from 'sweetalert2';
import Memberdashboard from '../Member/Memberdashboard';
import "./Dashboard.css";
import SuperAdmindashboard from './SuperAdmindashBoard';
import AdminHome from './Adminhome';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import GradingIcon from '@mui/icons-material/Grading';
import AddLinkIcon from '@mui/icons-material/AddLink';
import UpdateIcon from '@mui/icons-material/Update';
import Adminmedia from './Adminmedia';
import Pastorhome from '../Pastor/Pastorhome';
import Pastorchoir from '../Pastor/Pastorchoir';
import Creatinglink from '../Admin/Creatinglink';
import Collections from '@mui/icons-material/Collections';

const drawerWidth = 160;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 10),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



const Footer = styled(MDBFooter)(({ theme }) => ({
  // ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // height: '25px',
}));

const AdvertisementWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 9999,
});

const Marquee = styled('div')({
  width: '100%',
  // backgroundColor: '#1976d2',
  backgroundColor: 'rgba(17,106,162,255)',
  color: 'white',
  fontSize: '1.2rem',
  height: '65px',
  display: 'flex',
  alignItems: 'center',
  marginTop: '30px',
});

const DashboardContent = ({ selectedItem }) => {
  switch (selectedItem) {
    case 'Home':
      return <SuperAdmindashboard />;
      case 'AdminHome':
      return <AdminHome/>;
      case 'PastorHome':
      return <Pastorhome/>;
      case 'Memberhome':
        return <Memberdashboard/>;
    case 'Entity':
      return <FullWidthGrid />;
    case 'Subscription':
      return <SubscriptionList />;
    case 'Services':
      return <Services />;
      case 'Online':
        return <Creatinglink/>
    case 'Drafts':
      return <Typography variant="h2">Drafts Content</Typography>;
    case 'Choir':
      return <Choir />;
      case 'Pastorchoir':
      return <Pastorchoir />;
    case 'Subscription':
      return <SubscriptionList />;
    case 'Services':
      return <Services />;
    case 'Gallery':
      return <Gallerydisplay />;
    case 'Media':
      return <Adminmedia />;
    case 'Drafts':
      return <Typography variant="h2">Drafts Content</Typography>;
    default:
      return null;
  }
};

export default function Dashboard() {

  const settings = ["profile", "Settings", "Change password", "Logout"];
  const [anchorElUser, setAnchorElUser] = React.useState("");
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [email, setEmail] = useState('');
  const [openForgotModal, setOpenForgotModal] = useState('');
  const [sdetails, setSdetails] = useState([]);
  const loggedin = localStorage.getItem('Id');
  const [previewImage, setPreviewImage] = useState(null);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [profileimage, setprofileimage] = React.useState('');
  const [user, setUser] = useState('');
  const fileInputRef = useRef(null);
  const [profileData, setProfileData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phoneNumber: '',
    designation: '',
  });

  const role = sessionStorage.getItem("role");
  const userid=sessionStorage.getItem("userId");
  const churchid=sessionStorage.getItem("entityid");
  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    setAnchorElUser();
  };

  const handleOpenUserMenu = (event, index) => {
    const clickedItem = settings[index];

    if (clickedItem === 'Change password') {
      Swal.fire({
        title: 'Change Password',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          setOpenForgotModal(true);
        }
      });
    } else if (clickedItem === 'Logout') {
      sessionStorage.clear();
      navigate('/');
    } else if (clickedItem === 'profile') {
      handleOpenProfileModal();
    }
    else {
      setAnchorElUser(event.currentTarget);
    }
  };





  useEffect(() => {
    fetch(`http://localhost:9999/church/get/${loggedin}`)
      .then(response => response.json())
      .then(value => setSdetails(value))
    document.body.style.overflow = 'hidden';
    fetchData();
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [error, setError] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const passwordReset = localStorage.getItem('PasswordReset');
    if (passwordReset !== 'true') {
      Swal.fire({
        title: 'Password Reset Required',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          setOpenForgotModal(true);
        } else {
          console.log('User clicked No');
        }
      });
    }
  }, []);



  const showToast = (icon, title, text) => {
    Swal.fire({
      icon: icon,
      // title: title,
      text: text,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        container: 'toast-container',
      },
    });
  };


  const handleUpdate = () => {
    const email = localStorage.getItem('email');
    setEmail(email)
      ;

    if (!email || !password || !newPassword || !confirmPwd) {
      showToast('error', 'Error', 'Please fill in all the fields.');
      return;
    }

    if (newPassword !== confirmPwd) {
      showToast('error', 'Error', 'New password and confirm password do not match.');
      return;
    }

    const resetDto = {
      email: email,
      password: password,
      newPassword: newPassword,
      confirmPwd: confirmPwd,
    };

    fetch('http://localhost:9999/user/resetPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resetDto),
    })
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            return response.json().then(data => {
              throw new Error(data.message);
            });
          } else {
            throw new Error('Network response was not ok');
          }
        }
        showToast('success', 'Success', 'Password updated successfully.');
        return response.json();
      })
      .then(data => {
        console.log(data);
        setOpenForgotModal(false);
      })
      .catch(error => {
        console.error('Error:', error);
        showToast('error', 'Error', error.message);
      });
  };


  const handleCloseForgot = () => {
    setOpenForgotModal(false);
  };
  // profile start
  const handleOpenProfileModal = () => {
    fetch(`http://localhost:9999/user/getByUser/${userid}/${churchid}`)
      .then((response)=>response.json())
      .then(data=>setProfileData(data))
    setOpenProfileModal(true);
  };
  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setProfileData({ ...profileData, image: file });
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:9999/user/getByUser/${loggedin}`);
      const data = await response.json();
      setProfileData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append('user', new Blob([JSON.stringify({
        firstName: profileData.firstName,
        secondName: profileData.secondName,
        designation: profileData.designation,
      })], { type: 'application/json' }));
      formData.append('file', profileData.image);
      const response = await fetch(`http://localhost:9999/user/updateProfile/${loggedin}`, {
        method: 'PUT',
        body: formData,

      });
      if (response.status === 200) {
        const imageresponse = await fetch(`http://localhost:9999/user/view/image`);
        async function fetchimage() {
          const blob = await imageresponse.blob();
          const imageUrl = URL.createObjectURL(blob);
          setprofileimage(imageUrl);
          return () => {
            if (profileimage) {
              URL.revokeObjectURL(profileimage);
            }
          };

        }
        fetchimage();
        alert("updated successfully");
        console.log(response.body);
      }
      console.log(response.data);

      handleCloseProfileModal();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  // profile end

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', minHeight: '100vh', overflow: 'hidden', maxHeight: 'calc(100vh - 120px)' }}>
        <Marquee>
          {role==='SuperAdmin' && (
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, marginLeft: "35%", marginTop: "1%" }}>
            Welcome to Super Admin Dashboard
          </Typography>
          )}
          {role==='Admin' && (
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, marginLeft: "35%", marginTop: "1%" }}>
            Welcome to Admin Dashboard
          </Typography>
          )}
          {role==='Pastor' && (
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, marginLeft: "35%", marginTop: "1%" }}>
            Welcome to Pastor Dashboard
          </Typography>
          )}
          {role==='SuperAdmin' && (
          <Typography variant="subtitle1" noWrap component="div" style={{ color: "white", marginLeft: "5%", marginTop: "1.5%", fontSize: "0.7rem" }}>
            <b>{sdetails.firstName}</b> <br />
            {new Date().toLocaleString()}
          </Typography>
          )}
          {role==='Admin' && (
          <Typography variant="subtitle1" noWrap component="div" style={{ color: "white", marginLeft: "5%", marginTop: "1.5%", fontSize: "0.7rem" }}>
            <b>Admin Name</b> <br />
            {new Date().toLocaleString()}
          </Typography>
          )}
          {role==='Pastor' && (
          <Typography variant="subtitle1" noWrap component="div" style={{ color: "white", marginLeft: "5%", marginTop: "1.5%", fontSize: "0.7rem" }}>
            <b>Pastor Name</b> <br />
            {new Date().toLocaleString()}
          </Typography>
          )}
{/* SuperAdmin userdropdown */}
          {role==='SuperAdmin' && (
            <>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
            color="inherit"
            style={{ marginTop: "20px" }}
          >
            <AccountCircleIcon style={{ width: "35px", height: "35px" }} />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((item, index) => (
              <MenuItem key={index} onClick={(event) => handleOpenUserMenu(event, index)}>
                {item}
              </MenuItem>
            ))}
            <Modal
              open={openProfileModal}
              onClose={handleCloseProfileModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Paper sx={{ position: 'absolute', width: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  <h3 style={{ textAlign: "center" }}>Profile Details</h3>
                </Typography>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <TextField
                    id="fname"
                    label="First Name"
                    type="text"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  />
                  <TextField
                    id="sname"
                    label="Second Name"
                    type="text"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.secondName}
                    onChange={(e) => setProfileData({ ...profileData, secondName: e.target.value })}
                  />
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.email}
                    disabled
                  />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <TextField
                    id="phn"
                    label="Phone Number"
                    type="number"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.phoneNumber}
                    disabled
                  />
                  <TextField
                    id="designation"
                    label="Designation"
                    type="text"
                    variant="standard"
                    style={{ width: '33.33%', marginLeft: "0.2cm" }}
                    value={profileData.designation}
                    onChange={(e) => setProfileData({ ...profileData, designation: e.target.value })}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', width: '33.33%', marginTop: "0.7cm" }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ marginBottom: '0.5rem', marginLeft: "0.3cm" }}
                      ref={fileInputRef}
                    />
                    {previewImage && (
                      <div style={{ width: '35px', height: '35px', overflow: 'hidden', borderRadius: '50%', marginLeft: "5cm", marginTop: "-1cm" }}>
                        <img
                          src={previewImage}
                          alt="Preview"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <br />
                <Button variant='contained' onClick={handleUpdateProfile} style={{ marginLeft: "6cm" }}>Update</Button>
                <Button variant='contained' onClick={handleCloseProfileModal} style={{ marginLeft: "1cm" }}>Cancel</Button>
              </Paper>
            </Modal>
          </Menu>
          </>
          )}
          {/* Admin userdropdown */}
          {role==='Admin' && (
            <>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
            color="inherit"
            style={{ marginTop: "20px" }}
          >
            <AccountCircleIcon style={{ width: "35px", height: "35px" }} />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((item, index) => (
              <MenuItem key={index} onClick={(event) => handleOpenUserMenu(event, index)}>
                {item}
              </MenuItem>
            ))}
            <Modal
              open={openProfileModal}
              onClose={handleCloseProfileModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Paper sx={{ position: 'absolute', width: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  <h3 style={{ textAlign: "center" }}>Profile Details</h3>
                </Typography>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <TextField
                    id="fname"
                    label="First Name"
                    type="text"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  />
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.email}
                    disabled
                  />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <TextField
                    id="phn"
                    label="Phone Number"
                    type="number"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.phoneNumber}
                    disabled
                  />
                  <TextField
                    id="designation"
                    label="Designation"
                    type="text"
                    variant="standard"
                    style={{ width: '33.33%', marginLeft: "0.2cm" }}
                    value={profileData.designation}
                    onChange={(e) => setProfileData({ ...profileData, designation: e.target.value })}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', width: '33.33%', marginTop: "0.7cm" }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ marginBottom: '0.5rem', marginLeft: "0.3cm" }}
                      ref={fileInputRef}
                    />
                    {previewImage && (
                      <div style={{ width: '35px', height: '35px', overflow: 'hidden', borderRadius: '50%', marginLeft: "5cm", marginTop: "-1cm" }}>
                        <img
                          src={previewImage}
                          alt="Preview"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <br />
                <Button variant='contained' onClick={handleUpdateProfile} style={{ marginLeft: "6cm" }}>Update</Button>
                <Button variant='contained' onClick={handleCloseProfileModal} style={{ marginLeft: "1cm" }}>Cancel</Button>
              </Paper>
            </Modal>
          </Menu>
          </>
          )}
          {/* Member dropdown */}
          {role==='Member' && (
            <>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
            color="inherit"
            style={{ marginTop: "20px" }}
          >
            <AccountCircleIcon style={{ width: "35px", height: "35px" }} />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((item, index) => (
              <MenuItem key={index} onClick={(event) => handleOpenUserMenu(event, index)}>
                {item}
              </MenuItem>
            ))}
            <Modal
              open={openProfileModal}
              onClose={handleCloseProfileModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Paper sx={{ position: 'absolute', width: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  <h3 style={{ textAlign: "center" }}>Profile Details</h3>
                </Typography>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <TextField
                    id="fname"
                    label="First Name"
                    type="text"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  />
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.email}
                    disabled
                  />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <TextField
                    id="phn"
                    label="Phone Number"
                    type="number"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.phoneNumber}
                    disabled
                  />
                  <TextField
                    id="designation"
                    label="Designation"
                    type="text"
                    variant="standard"
                    style={{ width: '33.33%', marginLeft: "0.2cm" }}
                    value={profileData.designation}
                    onChange={(e) => setProfileData({ ...profileData, designation: e.target.value })}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', width: '33.33%', marginTop: "0.7cm" }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ marginBottom: '0.5rem', marginLeft: "0.3cm" }}
                      ref={fileInputRef}
                    />
                    {previewImage && (
                      <div style={{ width: '35px', height: '35px', overflow: 'hidden', borderRadius: '50%', marginLeft: "5cm", marginTop: "-1cm" }}>
                        <img
                          src={previewImage}
                          alt="Preview"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <br />
                <Button variant='contained' onClick={handleUpdateProfile} style={{ marginLeft: "6cm" }}>Update</Button>
                <Button variant='contained' onClick={handleCloseProfileModal} style={{ marginLeft: "1cm" }}>Cancel</Button>
              </Paper>
            </Modal>
          </Menu>
          </>
          )}
          {/* Pastor dropdown  */}
          {role==='Pastor' && (
            <>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
            color="inherit"
            style={{ marginTop: "20px" }}
          >
            <AccountCircleIcon style={{ width: "35px", height: "35px" }} />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((item, index) => (
              <MenuItem key={index} onClick={(event) => handleOpenUserMenu(event, index)}>
                {item}
              </MenuItem>
            ))}
            <Modal
              open={openProfileModal}
              onClose={handleCloseProfileModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Paper sx={{ position: 'absolute', width: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  <h3 style={{ textAlign: "center" }}>Profile Details</h3>
                </Typography>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <TextField
                    id="fname"
                    label="First Name"
                    type="text"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  />
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.email}
                    disabled
                  />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <TextField
                    id="phn"
                    label="Phone Number"
                    type="number"
                    variant="standard"
                    style={{ width: '33.33%' }}
                    value={profileData.phoneNumber}
                    disabled
                  />
                  <TextField
                    id="designation"
                    label="Designation"
                    type="text"
                    variant="standard"
                    style={{ width: '33.33%', marginLeft: "0.2cm" }}
                    value={profileData.designation}
                    onChange={(e) => setProfileData({ ...profileData, designation: e.target.value })}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', width: '33.33%', marginTop: "0.7cm" }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ marginBottom: '0.5rem', marginLeft: "0.3cm" }}
                      ref={fileInputRef}
                    />
                    {previewImage && (
                      <div style={{ width: '35px', height: '35px', overflow: 'hidden', borderRadius: '50%', marginLeft: "5cm", marginTop: "-1cm" }}>
                        <img
                          src={previewImage}
                          alt="Preview"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <br />
                <Button variant='contained' onClick={handleUpdateProfile} style={{ marginLeft: "6cm" }}>Update</Button>
                <Button variant='contained' onClick={handleCloseProfileModal} style={{ marginLeft: "1cm" }}>Cancel</Button>
              </Paper>
            </Modal>
          </Menu>
          </>
          )}
        </Marquee>

        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ backgroundColor: 'rgba(17,106,162,255)', height: "45px" }} md={{ height: "25px" }}>
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} sx={{ backgroundColor: 'rgba(17,106,162,255)' }}>
          <DrawerHeader style={{ marginLeft: "30%" }}>
            <div style={{ marginRight: "60%" }}>
              <ChurchIcon /></div>
            <b style={{ marginLeft: "35%" }}>CMS</b><IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <div >
            {/* SuperAdmin sidebar */}
            <List >
              {/* {['Home','Entity', 'Subscription', 'Services', 'Reports'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() => setSelectedItem(text)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 1,
                      bgcolor: selectedItem === text ? 'rgba(17,106,162,255)' : 'inherit',
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {text === 'Home' ? <HomeIcon /> :
                      text === 'Entity' ? <EntityIcon /> :
                        text === 'Subscription' ? <SubscriptionIcon /> :
                          text === 'Services' ? <BusinessIcon /> :
                            text === 'Reports' ? <AssessmentIcon /> :
                              <InboxIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ))} */}
              {role === 'SuperAdmin' && (
                <>
                  <ListItem key='Home' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Home')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Home' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Entity' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Entity')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Entity' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <EntityIcon />
                      </ListItemIcon>
                      <ListItemText primary='Entity' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Subscription' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Subscription')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Subscription' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <SubscriptionIcon />
                      </ListItemIcon>
                      <ListItemText primary='Subscription' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Services' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Services')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Services' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <BusinessIcon />
                      </ListItemIcon>
                      <ListItemText primary='Services' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Reports' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Reports')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Reports' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <AssessmentIcon />
                      </ListItemIcon>
                      <ListItemText primary='Reports' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='List' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('List')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'List' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <ListIcon />
                      </ListItemIcon>
                      <ListItemText primary='List' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem key='Choir' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Choir')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Choir' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <MusicVideoIcon />
                      </ListItemIcon>
                      <ListItemText primary='Choir' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Marketing' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Marketing')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Marketing' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <TrendingUpIcon />
                      </ListItemIcon>
                      <ListItemText primary='Marketing' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Gallery' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Gallery')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Gallery' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <CollectionsIcon />
                      </ListItemIcon>
                      <ListItemText primary='Gallery' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Media' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Media')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Media' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <PermMediaIcon />
                      </ListItemIcon>
                      <ListItemText primary='Media' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='LogOff' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('LogOff')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'LogOff' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText primary='LogOff' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                </>
              )}
            </List>
            {/* Admin Sidebar */}
            {role === 'Admin' && (
                <>
                  <ListItem key='AdminHome' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('AdminHome')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'AdminHome' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Services' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Services')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Services' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <BusinessIcon />
                      </ListItemIcon>
                      <ListItemText primary='Services' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Reports' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Reports')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Reports' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <AssessmentIcon />
                      </ListItemIcon>
                      <ListItemText primary='Reports' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Requests' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Requests')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Requests' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <GradingIcon/>
                      </ListItemIcon>
                      <ListItemText primary='Requests' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='RequestStatus' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('RequestStatus')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'RequestStatus' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <UpdateIcon/>
                      </ListItemIcon>
                      <ListItemText primary='RequestStatus' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='List' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('List')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'List' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <ListIcon />
                      </ListItemIcon>
                      <ListItemText primary='List' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem key='Choir' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Choir')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Choir' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <MusicVideoIcon />
                      </ListItemIcon>
                      <ListItemText primary='Choir' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Notifications' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Choir')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Notifications' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <CircleNotificationsIcon/>
                      </ListItemIcon>
                      <ListItemText primary='Notifications' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Online' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Online')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Online' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <AddLinkIcon/>
                      </ListItemIcon>
                      <ListItemText primary='Online' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Marketing' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Marketing')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Marketing' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <TrendingUpIcon />
                      </ListItemIcon>
                      <ListItemText primary='Marketing' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Gallery' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Gallery')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Gallery' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <CollectionsIcon />
                      </ListItemIcon>
                      <ListItemText primary='Gallery' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Media' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Media')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Media' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <PermMediaIcon />
                      </ListItemIcon>
                      <ListItemText primary='Media' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='LogOff' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('LogOff')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'LogOff' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText primary='LogOff' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                </>
              )}
              {/* Pastor sidebar */}
              {role === 'Pastor' && (
                <>
                  <ListItem key='PastorHome' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('PastorHome')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'PastorHome' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Services' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Services')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Services' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <BusinessIcon />
                      </ListItemIcon>
                      <ListItemText primary='Service Appointments' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Reports' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Reports')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Reports' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <AssessmentIcon />
                      </ListItemIcon>
                      <ListItemText primary='Reports' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Requests' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Requests')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Requests' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <GradingIcon/>
                      </ListItemIcon>
                      <ListItemText primary='Request Admin' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='RequestStatus' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('RequestStatus')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'RequestStatus' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <UpdateIcon/>
                      </ListItemIcon>
                      <ListItemText primary='RequestStatus' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  
                  <Divider />
                  <ListItem key='Pastorchoir' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Pastorchoir')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Pastorchoir' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <MusicVideoIcon />
                      </ListItemIcon>
                      <ListItemText primary='Choir' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Notifications' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Choir')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Notifications' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <CircleNotificationsIcon/>
                      </ListItemIcon>
                      <ListItemText primary='Notifications' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Online' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Online')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Online' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <AddLinkIcon/>
                      </ListItemIcon>
                      <ListItemText primary='Online' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Gallery' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Gallery')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Gallery' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <CollectionsIcon />
                      </ListItemIcon>
                      <ListItemText primary='Gallery' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Media' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Media')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Media' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <PermMediaIcon />
                      </ListItemIcon>
                      <ListItemText primary='Media' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='LogOff' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('LogOff')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'LogOff' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText primary='LogOff' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                </>
              )}
              {/* Member Sidebar */}
              {role === 'Member' && (
                <>
                  <ListItem key='Memberhome' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Memberhome')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Memberhome' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Services' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Services')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Services' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <BusinessIcon />
                      </ListItemIcon>
                      <ListItemText primary='Service Appointments' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Reports' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Reports')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Reports' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <AssessmentIcon />
                      </ListItemIcon>
                      <ListItemText primary='Reports' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Requests' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Requests')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Requests' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <GradingIcon/>
                      </ListItemIcon>
                      <ListItemText primary='Request Admin' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='RequestStatus' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('RequestStatus')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'RequestStatus' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <UpdateIcon/>
                      </ListItemIcon>
                      <ListItemText primary='RequestStatus' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  
                  <Divider />
                  <ListItem key='Pastorchoir' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Pastorchoir')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Pastorchoir' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <MusicVideoIcon />
                      </ListItemIcon>
                      <ListItemText primary='Choir' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Notifications' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Choir')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Notifications' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <CircleNotificationsIcon/>
                      </ListItemIcon>
                      <ListItemText primary='Notifications' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Online' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Online')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Online' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <AddLinkIcon/>
                      </ListItemIcon>
                      <ListItemText primary='Online' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Gallery' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Gallery')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Gallery' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <CollectionsIcon />
                      </ListItemIcon>
                      <ListItemText primary='Gallery' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='Media' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('Media')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'Media' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <PermMediaIcon />
                      </ListItemIcon>
                      <ListItemText primary='Media' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key='LogOff' disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => setSelectedItem('LogOff')}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1,
                        bgcolor: selectedItem === 'LogOff' ? 'rgba(17,106,162,255)' : 'inherit',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText primary='LogOff' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                </>
              )}
            {/* <Divider />
            <List >
              {['Choir', 'List', 'Marketing', 'Gallery', 'Media', 'LogOff'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() => setSelectedItem(text)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 1,
                      bgcolor: selectedItem === text ? 'rgba(17,106,162,255)' : 'inherit',
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {text === 'Choir' ? <MusicVideoIcon /> :
                        text === 'List' ? <ListIcon /> :
                          text === 'Marketing' ? <TrendingUpIcon /> :
                            text === 'Gallery' ? <CollectionsIcon /> :
                              text === 'Media' ? <PermMediaIcon /> :
                                text === 'LogOff' ? <ExitToAppIcon /> :
                                  <InboxIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider /> */}
          </div>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, pt: 1 }} style={{ overflowY: "auto", maxHeight: "calc(95vh - 3cm)" }}>
          {/* <AdminHome/> */}
          <DashboardContent selectedItem={selectedItem} />
        </Box>

        <AdvertisementWrapper>
          <Advertisement />
        </AdvertisementWrapper>
        <Footer className='css-ikz5aw' sx={{ backgroundColor: 'rgba(17,106,162,255)', height: "20px" }} style={{ backgroundColor: 'rgba(17,106,162,255)', color: "white", textAlign: "center", height: "30px" }}>
          &copy; {new Date().getFullYear()} Copyright: cms.com
        </Footer>
      </Box>
      <Modal
        open={openForgotModal}
        onClose={handleCloseForgot}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ padding: '4px' }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 2,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <TextField id="input-email" label="Email" variant="standard" fullWidth value={email}
              onChange={e => setEmail(e.target.value)} style={{ display: 'none' }} />
            <TextField
              type="password"
              id="input-old-password"
              label="Old Password"
              variant="standard"
              fullWidth
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              type="password"
              id="input-new-password"
              label="New Password"
              variant="standard"
              fullWidth
              required
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
            <TextField
              type="password"
              id="input-confirm-password"
              label="Confirm Password"
              variant="standard"
              fullWidth
              required
              value={confirmPwd}
              onChange={e => setConfirmPwd(e.target.value)}
            />
          </Box>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '16px' }}>
            <Button variant="contained" onClick={handleUpdate}>
              Update
            </Button>
            <Button variant="contained" onClick={handleCloseForgot}>
              Cancel
            </Button>
          </div>
        </Paper>
      </Modal>
    </>
  );
}