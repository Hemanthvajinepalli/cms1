
import * as React from 'react';
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
import { useEffect, useState } from 'react';
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
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import Choir from "./Choir";
import FullWidthGrid from './interviene';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CollectionsIcon from '@mui/icons-material/Collections';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GalleryCard from './Gallery';
import Gallerydisplay from './GalleryInterviene';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Subscription from './Subscription';

import ApprovalIcon from '@mui/icons-material/Approval';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Memberhome from './Memberhome';
import HomeIcon from '@mui/icons-material/Home';
import "./MemberDashboard.css";
// import Card from 'react-bootstrap/Card';

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
     return <Memberhome/>;
    case 'Subscription':
      return <SubscriptionList />;
    case 'Worship':
        return <ChurchIcon/>;
    case 'Services':
      return <Services />;
    case 'Online':
      return <Typography variant="h2">Online</Typography>;
    case 'Status':
      return <ApprovalIcon />;
    case 'Services':
      return <Services />;
    case 'Gallery':
      return <Gallerydisplay/>;
    case 'Media':
      return <FullWidthGrid/>;
    case 'Notifications':
        return <NotificationsIcon/>;
    case 'Discussion':
        return <MarkUnreadChatAltIcon/>
    case 'Drafts':
      return <Typography variant="h2">Drafts Content</Typography>;
    default:
      return null;
  }
};

export default function MemberDashboard() {

  const settings = ["profile", "Settings", "Change password", "Logout"];
  const [anchorElUser, setAnchorElUser] = React.useState(null); // Updated anchorElUser state to null initially

  const handleCloseUserMenu = () => {
    setAnchorElUser(null); // Changed to set null to close the menu
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  useEffect(() => {
    // Add overflow hidden to prevent scrolling
    document.body.style.overflow = 'hidden';

    // Clean up function to remove overflow hidden when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('Home');
  const [selectedServices, setSelectedServices] = React.useState('Services');
  const [selectedMedia, setSelectedMedia] = React.useState('Media');
  const [selectedWorship, setSelectedWorship] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorE3Media, setAnchorE3Media] = useState(null);
  const [anchorE4Reports, setAnchorE4Reports] = useState(null);
  const [anchorE5Notifications, setAnchorE5Notifications] = useState(null);
  const [anchorE6Discussion, setAnchorE6Discussion] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpen = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const [anchorE2, setAnchorE2] = useState(null);
    const handleOpen2 = (event) => setAnchorE2(event.currentTarget);
    const handleClose2 = () => setAnchorE2(null);

    const [anchorE3, setAnchorE3] = useState(null);
    const handleOpen3 = (event) => setAnchorE3(event.currentTarget);
    const handleClose3 = () => setAnchorE3(null);
    
    const [anchorElWorship, setAnchorElWorship] = useState(null);
    const handleOpenWorship = (event) => setAnchorElWorship(event.currentTarget);
    const handleCloseWorship = () => setAnchorElWorship(null);
    
    const [anchorE2Services, setAnchorE2Services] = useState(null);
    const handleOpenServices = (event) => setAnchorE2Services(event.currentTarget);
   const handleCloseServices = () => setAnchorE2Services(null);
    
    const handleOpenMedia = (event) => setAnchorE3Media(event.currentTarget);
    const handleCloseMedia = () => setAnchorE3Media(null);

    const handleOpenReports = (event) => setAnchorE4Reports(event.currentTarget);
    const handleCloseReports = () => setAnchorE4Reports(null);

    const handleOpenNotifications = (event) => setAnchorE5Notifications(event.currentTarget);
    const handleCloseNotifications = () => setAnchorE5Notifications(null);

    const handleOpenDiscussion = (event) => setAnchorE6Discussion(event.currentTarget);
    const handleCloseDiscussion = () => setAnchorE6Discussion(null); 

  const handleSelectEntity = (entity) => {
    setSelectedItem(entity);
    handleClose(); // Close the dropdown after selecting an entity
  };
  const handleSelectMedia = (Media) => {
    setSelectedMedia(Media);
    handleClose(); // Close the dropdown after selecting an entity
  };
  const handleSelectWorship = (Worship) => {
    setSelectedWorship(Worship);
    handleClose(); // Close the dropdown after selecting an entity
  };
  const handleSelectServices = (Services) => {
    setSelectedServices(Services);
    handleClose(); // Close the dropdown after selecting an entity
  };

  return (
    <>
<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden', maxHeight: 'calc(100vh - 120px)' }}>
        <Marquee>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, marginLeft: "40%",marginTop: "1%" }}>
            Welcome to Member Dashboard!
          </Typography>
          <Typography variant="subtitle1" noWrap component="div" style={{ color: "white", marginLeft: "-5%", marginTop: "1.5%", fontSize: "0.7rem" }}>
            <b>Ritwik</b> <br/>
            {new Date().toLocaleString()}
          </Typography>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMenu} // Open the menu when clicked
                color="inherit"
                style={{marginTop:"10px"}}
              >
                <AccountCircleIcon style={{width:"35px",height:"35px"}} />
                <ArrowDropDownIcon/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser} // Use anchorElUser as anchorEl
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)} // Open the menu if anchorElUser is not null
                onClose={handleCloseUserMenu} // Close the menu when clicked outside
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>{setting}</MenuItem>
                ))}
              </Menu>
        </Marquee>

        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ backgroundColor: 'rgba(17,106,162,255)' , height:"45px"}} md={{height:"25px"}}>
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
            <div>
              <ChurchIcon /></div>
            <b style={{ marginLeft: "35%" }}>CMS</b><IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <div  >
              <List>
  {/* Home */}
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
  {/* Subscription */}
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
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
        <SubscriptionIcon />
      </ListItemIcon>
      <ListItemText primary="Subscription" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>

  {/* Worship */}
  <ListItemButton key='Worship'
        component={Link}
        // to="/Worship"
         onClick={handleOpenWorship}
        sx={{
          minHeight: 48,
          justifyContent: 'center',
          px: 1,
          bgcolor: selectedItem === 'Worship' ? 'rgba(17,106,162,255)' : 'inherit',
        }}
      >
        <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
          <ChurchIcon />
        </ListItemIcon>
        <ListItemText primary="Worship" sx={{ opacity: open ? 1 : 0 }}  />
          <ArrowDropDownIcon />
      </ListItemButton>
      <Menu
        anchorEl={anchorElWorship}
        open={Boolean(anchorElWorship)}
        onClose={handleCloseWorship}
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{ zIndex: 9999 }}
      >
        <List>
          <MenuItem onClick={() => handleSelectEntity('Entity1')}>Home</MenuItem>
          <MenuItem onClick={() => handleSelectEntity('Entity2')}>About US</MenuItem>
          <MenuItem onClick={() => handleSelectEntity('Entity3')}>Management</MenuItem>
          <MenuItem onClick={() => handleSelectEntity('Entity4')}>Choir</MenuItem>
        </List>
      </Menu>

  {/* Services */}
  <ListItemButton key='Services'
        component={Link}
        // to="/Services"
        onClick={handleOpenServices}
        sx={{
          minHeight: 48,
          justifyContent: 'center',
          px: 1,
          bgcolor: selectedItem === 'Services' ? 'rgba(17,106,162,255)' : 'inherit',
        }}
      >
        <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
            <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Services" sx={{ opacity: open ? 1 : 0 }}  />
          <ArrowDropDownIcon />
      </ListItemButton>
      <Menu
  anchorEl={anchorE2Services}
  open={Boolean(anchorE2Services)}
  onClose={handleCloseServices}
  MenuListProps={{ onMouseLeave: handleClose2 }}
  style={{ zIndex: 9999, marginTop: '0px' }} // Adjust the marginLeft to position the dropdown
>
        <List>
          <MenuItem onClick={() =>  handleSelectEntity('Entity1')}>Baptism</MenuItem>
          <MenuItem onClick={() =>  handleSelectEntity('Entity2')}>Burial</MenuItem>
          <MenuItem onClick={() =>  handleSelectEntity('Entity3')}>Home visit</MenuItem>
          <MenuItem onClick={() =>  handleSelectEntity('Entity4')}>Weekly Services</MenuItem>
          <MenuItem onClick={() =>  handleSelectEntity('Entity5')}>Special Prayers</MenuItem>
          <MenuItem onClick={() =>  handleSelectEntity('Entity6')}>Events</MenuItem>
          <MenuItem onClick={() =>  handleSelectEntity('Entity7')}>Others</MenuItem>
          <MenuItem onClick={() =>  handleSelectEntity('Entity8')}>Donations</MenuItem>
          <MenuItem onClick={() =>  handleSelectEntity('Entity9')}>Confession</MenuItem>
        </List>
      </Menu>
  {/* Reports */}
  <ListItemButton key='Reports'
        component={Link}
        // to="/Reports"
        onClick={handleOpenReports}
        sx={{
          minHeight: 48,
          justifyContent: 'center',
          px: 1,
          bgcolor: selectedItem === 'Reports' ? 'rgba(17,106,162,255)' : 'inherit',
        }}
      >
        <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
           <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" sx={{ opacity: open ? 1 : 0 }}  />
        <ArrowDropDownIcon />
      </ListItemButton>
      <Menu
  anchorEl={anchorE4Reports}
  open={Boolean(anchorE4Reports)}
  onClose={handleCloseReports}
  MenuListProps={{ onMouseLeave: handleClose }}
  style={{ zIndex: 9999, marginTop: '0px' }} // Adjust the marginLeft to position the dropdown
>
        <List>
          <MenuItem onClick={() => handleSelectEntity('Entity1')}>Customized</MenuItem>
          <MenuItem onClick={() => handleSelectEntity('Entity2')}>History</MenuItem>
          <MenuItem onClick={() => handleSelectEntity('Entity3')}>Session</MenuItem>
           </List>
      </Menu>

  {/* Status */}
  <ListItem key='Status'
  disablePadding sx={{ display: 'block' }}>
    <ListItemButton
      onClick={() => setSelectedItem('Status')}
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 1,
        bgcolor: selectedItem === 'Status' ? 'rgba(17,106,162,255)' : 'inherit',
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
        <ApprovalIcon />
      </ListItemIcon>
      <ListItemText primary="Status" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>

  {/* Online */}
  <ListItem key='Online'
  disablePadding sx={{ display: 'block' }}>
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
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
        <OnlinePredictionIcon />
      </ListItemIcon>
      <ListItemText primary="Online" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>

  {/* Gallery */}
  <ListItem key='Gallery'
  disablePadding sx={{ display: 'block' }}>
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
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
        <CollectionsIcon />
      </ListItemIcon>
      <ListItemText primary="Gallery" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>

  {/* Media */}
  <ListItemButton key='Media'
        component={Link}
        // to="/Media"
        onClick={handleOpenMedia}
        sx={{
          minHeight: 48,
          justifyContent: 'center',
          px: 1,
          bgcolor: selectedItem === 'Media' ? 'rgba(17,106,162,255)' : 'inherit',
        }}
      >
        <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
          <PermMediaIcon />
        </ListItemIcon>
        <ListItemText primary="Media" sx={{ opacity: open ? 1 : 0 }}  />
        <ArrowDropDownIcon />
      </ListItemButton>
      <Menu
  anchorEl={anchorE3Media}
  open={Boolean(anchorE3Media)}
  onClose={handleCloseMedia}
  MenuListProps={{ onMouseLeave: handleClose }}
  style={{ zIndex: 99999, marginTop: '0px' }} // Adjust the marginLeft to position the dropdown
>
        <List>
          <MenuItem onClick={() => handleSelectMedia('Entity1')}>Audio</MenuItem>
          <MenuItem onClick={() => handleSelectMedia('Entity2')}>Video</MenuItem>
          <MenuItem onClick={() => handleSelectMedia('Entity3')}>Document</MenuItem>
          <MenuItem onClick={() => handleSelectMedia('Entity4')}>Link</MenuItem>
        </List>
      </Menu>


  {/* Notifications */}
  <ListItemButton key='Notifications'
        component={Link}
        // to="/Notifications"
        onClick={handleOpenNotifications}
        sx={{
          minHeight: 48,
          justifyContent: 'center',
          px: 1,
          bgcolor: selectedItem === 'Notifications' ? 'rgba(17,106,162,255)' : 'inherit',
        }}
      >
        <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
          <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary="Notification" sx={{ opacity: open ? 1 : 0 }}  />
        <ArrowDropDownIcon />
      </ListItemButton>
      <Menu
        anchorE5={anchorE5Notifications}
        open={Boolean(anchorE5Notifications)}
        onClose={handleCloseNotifications}
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{ zIndex: 99999 }}
      >
        <List>
          <MenuItem onClick={() => handleSelectMedia('Notifications1')}>General</MenuItem>
          <MenuItem onClick={() => handleSelectMedia('Notifications2')}>Email</MenuItem>
          <MenuItem onClick={() => handleSelectMedia('Notifications3')}>SMS</MenuItem>
           </List>
      </Menu>


  {/* Discussion */}
  <ListItemButton key='Discussion'
        component={Link}
        // to="/Discussion"
        onClick={handleOpenDiscussion}
        sx={{
          minHeight: 48,
          justifyContent: 'center',
          px: 1,
          bgcolor: selectedItem === 'Discussion' ? 'rgba(17,106,162,255)' : 'inherit',
        }}
      >
        <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
          <MarkUnreadChatAltIcon />
        </ListItemIcon>
        <ListItemText primary="Discussion" sx={{ opacity: open ? 1 : 0 }}  />
        <ArrowDropDownIcon />
      </ListItemButton>
      <Menu
        anchorE6={anchorE6Discussion}
        open={Boolean(anchorE6Discussion)}
        onClose={handleCloseDiscussion}
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{ zIndex: 99999 }}
      >
        <List>
          <MenuItem onClick={() => handleSelectMedia('Entity1')}>1 To 1</MenuItem>
          <MenuItem onClick={() => handleSelectMedia('Entity2')}>Group</MenuItem>
           </List>
      </Menu>


  {/* LogOff */}
  <ListItem key='LogOff'
  disablePadding sx={{ display: 'block' }}>
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
          mr: open ? 2 : 'auto',
          justifyContent: 'center',
        }}
      >
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="LogOff" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>
</List>   
            <Divider />
          </div>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, pt: 1 }}>
          <DashboardContent selectedItem={selectedItem} />
        </Box>
        <AdvertisementWrapper>
          <Advertisement />
        </AdvertisementWrapper>
        <Footer className='css-ikz5aw'  sx={{ backgroundColor: 'rgba(17,106,162,255)' , height:"20px" }} style={{ backgroundColor: 'rgba(17,106,162,255)', color: "white", textAlign:"center", height:"30px" }}>
          &copy; {new Date().getFullYear()} Copyright: cms.com
        </Footer>
      </Box>
    </>
  );
}

