import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Login.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const Login = () => {
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [email, setEmail] = useState(''); // Changed variable name to email
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fpopen, setfpopen] = useState(false);
  const[churchName,setchurchname]=useState('Caaalval');
  const navigate = useNavigate();
  const rolename=sessionStorage.getItem("role");

  // snackbar started
  // const handleClick = () => {
  //   setfpopen(true);
  // };

  const handleClose = () => {
    setfpopen(false);
  };
  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  // Snackbar ended

  const showToast = (icon, title, text) => {
    Swal.fire({
      icon: icon,
      title: title,
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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(loginIdentifier)) {
      showToast('error', 'Invalid email format', 'Please enter a valid email address.');
      return;
    }

    try {
      const data = {
        userName: loginIdentifier,
        password,
        churchName:churchName,
      }
      const response = await axios.post('http://localhost:9999/user/login', data);
      const roleid=response.data.roleId;
      fetch(`http://localhost:9999/role/${roleid}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const role = data.name;
        // console.log(role);
        sessionStorage.setItem('role', role);
      });
      if (response.status === 200 && rolename==='SuperAdmin') {
        console.log(response);
        showToast('success', 'Login Successful!');
        const userDetails = response.data.user;
        const role = response.data.designation;
        console.log('User Details:', response.data);
        const Id = response.data.id;
        console.log('User ID:', Id);
        const PasswordReset = response.data.passwordReset
        console.log('reset', PasswordReset);
        const Email = response.data.email;
        console.log('email', Email);
        sessionStorage.setItem('PasswordReset', PasswordReset)
        sessionStorage.setItem('Id', Id);
        sessionStorage.setItem('email', Email);
        // sessionStorage.setItem('role', role);
        navigate('/Dashboard');
      }else if (response.status === 200 && rolename==='Admin') {
        console.log(response);
        showToast('success', 'Login Successful!');
        const userDetails = response.data.user;
        const role = response.data.designation;
        const Id = response.data.id;
        const PasswordReset = response.data.passwordReset
        const Email = response.data.email;
        const churchid=response.data.chId;
        sessionStorage.setItem('PasswordReset', PasswordReset);
        sessionStorage.setItem('Id', Id);
        sessionStorage.setItem('email', Email);
        sessionStorage.setItem('role', role);
        sessionStorage.setItem('churchid',churchid);
        navigate('/Dashboard');
      }
       else {
      }
    } catch (error) {
      console.error('Error logging in:', error);

      if (error.response && error.response.status === 401) {
        showToast('error', 'Error', error.response.data);
      }
      if (error.response && error.response.status === 400) {
        showToast('error', 'Error', error.response.data);
      }
    }
  };

  const handleForgotPassword = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSendEmail = async () => {
    if (!emailRegex.test(email)) {
      showToast('error', 'Invalid email format', 'Please enter a valid email address.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('email', email);
      setIsLoading(true);
      const response = await axios.post('http://localhost:9999/user/forgotPwd', formData);
      if (response.status === 200) {
        setfpopen(true);
        setIsLoading(false);
        // showToast('Password reset successful Check your email for the new password');

      } else {
        showToast('error', 'Error', response.data); // Changed to response.data
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      showToast('error', 'Error', error.response.data);
    }

    setOpen(false);
  };

  const handleLoginEmailChange = (e) => {
    const value = e.target.value;
    const atIndex = value.indexOf('@');
    if (atIndex !== -1 && value.indexOf('@', atIndex + 1) !== -1) {
      showToast('error', 'Invalid input', 'Only one "@" symbol is allowed.');
      return;
    }

    if (/[\W\dA-Z]/.test(value.charAt(0))) {
      showToast('error', 'Invalid input', 'Special characters, numbers, and uppercase letters are not allowed at the beginning.');
      return;
    }

    setLoginIdentifier(value);
  };

  const handleForgotPasswordEmailChange = (e) => {
    const value = e.target.value;
    const atIndex = value.indexOf('@');
    if (atIndex !== -1 && value.indexOf('@', atIndex + 1) !== -1) {
      showToast('error', 'Invalid input', 'Only one "@" symbol is allowed.');
      return;
    }

    if (/[\W\dA-Z]/.test(value.charAt(0))) {
      showToast('error', 'Invalid input', 'Special characters, numbers, and uppercase letters are not allowed at the beginning.');
      return;
    }

    setEmail(value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="total_container">
      {fpopen && (
        <div style={{ display: "flex", justifyContent: "end" }}>
          <div>
            {/* <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Password reset successful Check your email for the new password
    </Alert> */}
            <Snackbar
              open={fpopen}
              autoHideDuration={3000}
              message="Password reset successful Check your email for the new password"
              action={action}
              onClose={() => setfpopen(false)}
              style={{
                position: "relative", top: "0px", left: "0px"
              }}
            />
          </div>
        </div>
      )}
      <div className="login-box">
        <h2 style={{ color: "white" }}>Login Page</h2>
        <form onSubmit={handleLoginSubmit}>
          <TextField
            style={{ width: "42vh" }}
            id="email"
            type="email"
            label="Email"
            variant="standard"
            value={loginIdentifier}
            onChange={handleLoginEmailChange}
            InputLabelProps={{ style: { color: 'white', fontWeight: 'bold', marginLeft: "0.5cm" } }}
            InputProps={{ style: { fontSize: '1.2rem', color: "white", marginLeft: "0.5cm" } }}
            required
          />
          <TextField
            style={{ width: "42vh", marginTop: "0.4cm" }}
            id="password"
            label="Password"
            variant="standard"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{ style: { color: 'white', fontWeight: 'bold', marginLeft: "0.5cm" } }}
            InputProps={{
              style: { fontSize: '1.2rem', color: "whitesmoke", marginLeft: "0.5cm" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                    style={{ color: 'white' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />
          <br />
          <p>
            <Link to="/" className="link-hover" onClick={handleForgotPassword} style={{ color: 'white', fontWeight: '100', fontSize: '14px', textDecoration: 'none', marginLeft: "5cm" }}>
              <span style={{ transition: 'all 0.3s', fontWeight: 'normal' }}>Forgot Password?</span>
            </Link>
          </p>
          <br />
          <button type="submit" className="submit" style={{ marginLeft: '25%', width: '50%', backgroundColor: "rgba(17,106,162,255)", color: "white", cursor: "pointer" }}>
            <b>Submit</b>
          </button>
          <p style={{ color: 'white', fontWeight: '100', fontSize: '14px', textAlign:'center' }}>Are you a New member? <Link to='/Registration' style={{color:"white",fontWeight:"bold"}}>Register</Link></p>
        </form>
        <br />
      </div>
      {isLoading ? (
        <Modal open={open} onClose={handleCloseModal}>
          <div style={{ backgroundColor: "white", width: 400, padding: 20, borderRadius: 5, margin: "auto", marginTop: 120 }}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' style={{ width: "50px", height: "50px",marginLeft:"170px" }} alt='loader' />
          </div>
        </Modal>
      ) : (
        <Modal open={open} onClose={handleCloseModal}>
          <div style={{ backgroundColor: "white", width: 400, padding: 20, borderRadius: 5, margin: "auto", marginTop: 120 }}>
            <h4 style={{ textAlign: "center" }}>Forgot Password?</h4>
            <TextField
              style={{ width: "52vh" }}
              id="forgot-password-email"
              label="Email"
              variant="standard"
              value={email}
              onChange={handleForgotPasswordEmailChange}
              InputLabelProps={{ style: { color: 'black', marginLeft: "1cm" } }}
              InputProps={{ style: { fontSize: '1.2rem', color: "black", marginLeft: "1cm" } }}
              required
            /><br /><br />
            <div style={{ textAlign: "center" }}>
              <Button variant='contained' onClick={handleSendEmail}>Submit</Button>
              <Button variant='contained' onClick={handleCloseModal} style={{ marginLeft: "3px" }}>Cancel</Button>
              {/* <button type='button' onClick={handleSendEmail} style={{ marginRight: 10 }}>Submit</button>
            <button type='button' onClick={handleCloseModal}>Cancel</button> */}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Login;