import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import { FormControlLabel, FormLabel, Radio, RadioGroup,Button, colors } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';
import { FormHelperText } from '@material-ui/core';
import './MemberRegistration.css';

function MemberRegistration() {
    
    const [profession, setProfession] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [nationality, setNationality] = useState('');
    const [disability, setDisability] = useState('');
    const [disabilityDescription, setDisabilityDescription] = useState('');

  const handleDisabilityChange = (event) => {
    const { value } = event.target;
    setDisability(value);
    if (value === 'no') {
      setDisabilityDescription('');
    }
  };

  const handleDisabilityDescriptionChange = (event) => {
    setDisabilityDescription(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

    const handleProfessionChange = (event) => {
        setProfession(event.target.value);
      };

      
  const handleMaritalStatusChange = (event) => {
    setMaritalStatus(event.target.value);
  };

 
    
    const [selectedOption, setSelectedOption] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleDobChange = (event) => {
        const { value } = event.target;
        setDob(value);
        setAge(calculateAge(value));
    };

    const [showId, setShowId] = useState(false);
  const [generatedId, setGeneratedId] = useState('');

  const generateId = () => {
    const length = 9;
    let result = '';
    const characters = '0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handleRadioChange = (event) => {
    if (event.target.value === 'yes') {
      const id = generateId();
      setGeneratedId(id);
      setShowId(true);
    } else {
      setShowId(false);
    }
  };

  const closePopup = () => {
    setShowId(false);
  };
  const [selectedPlan, setSelectedPlan] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);

  // Function to handle plan selection
  const handlePlanChange = (event) => {
    const plan = event.target.value;
    setSelectedPlan(plan);
    if (plan === 'plan') {
      const amount = 3650;
      const discountedAmount = amount * 0.9; // 90% discount
      setTotalAmount(365); // Total amount set to 365 INR
      setDiscount(90); 
    } else {
      setTotalAmount(0);
      setDiscount(0);
    }
  };
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [errors, setErrors] = useState({ firstName: "", middleInitial: "",lastName: "", familyName: "" });
  

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "Please enter a valid first name",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
    }
  };

  const handleMiddleInitialChange = (event) => {
    const value = event.target.value;
    setMiddleInitial(value);
    if (!/^[a-zA-Z]*$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        middleInitial: "Please enter letters only",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, middleInitial: "" }));
    }
  };
  const [lastName, setLastName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [state, setState] = useState('');
  const [village, setVillage] = useState('');
  const [city, setCity] = useState('');
  const [mandal, setMandal] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPinCode] = useState('');

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Please enter a valid last name",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
    }
  };

  const handleFamilyNameChange = (event) => {
    const value = event.target.value;
    setFamilyName(value);
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        familyName: "Please enter a valid family name",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, familyName: "" }));
    }
  };


  const handlePlaceOfBirthChange = (event) => {
    const value = event.target.value;
    setPlaceOfBirth(value);
    if (!/^[a-zA-Z,\s]*$/.test(value)) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            placeOfBirth: "Please enter a valid place of birth (only text and commas allowed)",
        }));
    } else {
        setErrors((prevErrors) => ({ ...prevErrors, placeOfBirth: "" }));
    }
};


const handleGenderChange = (event) => {
    const value = event.target.value;
    setGender(value);
    if (value !== 'female' && value !== 'male' && value !== 'other') {
        setErrors((prevErrors) => ({
            ...prevErrors,
            gender: "Please select a valid gender",
        }));
    } else {
        setErrors((prevErrors) => ({ ...prevErrors, gender: "" }));
    }
};
const handleEmailChange = (event) => {
  const value = event.target.value;
  setEmail(value);
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
      setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter a valid email address",
      }));
  } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  }
};
const handleMobileNoChange = (event) => {
  const value = event.target.value;
  setMobileNo(value);
  if (!/^[0-9]*$/.test(value)) {
      setErrors((prevErrors) => ({
          ...prevErrors,
          mobileNo: "Please enter a valid mobile number (only numbers allowed)",
      }));
  } else {
      setErrors((prevErrors) => ({ ...prevErrors, mobileNo: "" }));
  }
};
const handleStateChange = (event) => {
  const value = event.target.value;
  setState(value);
  if (!/^[a-zA-Z\s]*$/.test(value)) {
    setErrors((prevErrors) => ({
        ...prevErrors,
        [event.target.id]: "Only text is allowed (no numbers or special characters)"
    }));
} else {
    setErrors((prevErrors) => ({ ...prevErrors, [event.target.id]: "" }));
}
};
const handleCityChange = (event) => {
  const value = event.target.value;
  setCity(value);
  if (!/^[a-zA-Z\s]*$/.test(value)) {
    setErrors((prevErrors) => ({
        ...prevErrors,
        [event.target.id]: "Only text is allowed (no numbers or special characters)"
    }));
} else {
    setErrors((prevErrors) => ({ ...prevErrors, [event.target.id]: "" }));
}
};
const handleVillageChange = (event) => {
  const value = event.target.value;
  setVillage(value);
  if (!/^[a-zA-Z\s]*$/.test(value)) {
    setErrors((prevErrors) => ({
        ...prevErrors,
        [event.target.id]: "Only text is allowed (no numbers or special characters)"
    }));
} else {
    setErrors((prevErrors) => ({ ...prevErrors, [event.target.id]: "" }));
}
};
const handleDistrictChange = (event) => {
  const value = event.target.value;
  setDistrict(value);
  if (!/^[a-zA-Z\s]*$/.test(value)) {
    setErrors((prevErrors) => ({
        ...prevErrors,
        [event.target.id]: "Only text is allowed (no numbers or special characters)"
    }));
} else {
    setErrors((prevErrors) => ({ ...prevErrors, [event.target.id]: "" }));
}
};
const handleMandalChange = (event) => {
  const value = event.target.value;
  setMandal(value);
  if (!/^[a-zA-Z\s]*$/.test(value)) {
    setErrors((prevErrors) => ({
        ...prevErrors,
        [event.target.id]: "Only text is allowed (no numbers or special characters)"
    }));
} else {
    setErrors((prevErrors) => ({ ...prevErrors, [event.target.id]: "" }));
}
};
const handlePinCodeChange = (event) => {
  const value = event.target.value;
  setPinCode(value);
  if (!/^[0-9]*$/.test(value)) {
      setErrors((prevErrors) => ({
          ...prevErrors,
          pincode: "Please enter a valid pincode",
      }));
  } else {
      setErrors((prevErrors) => ({ ...prevErrors, mobileNo: "" }));
  }
};

function handleSubmit(event) {
  event.preventDefault(); 

  const formData = new FormData();
  
  formData.append('firstName', document.getElementById('fname').value);
  formData.append('middleInitial', document.getElementById('m_initial').value);
  formData.append('lastName', document.getElementById('last-name').value);
  formData.append('familyName', document.getElementById('family-name').value);
  formData.append('dob', document.getElementById('dob').value);
  formData.append('age', document.getElementById('age').value);
  formData.append('placeOfBirth', document.getElementById('placeofbirth').value);
  formData.append('gender', document.querySelector('input[name="row-radio-buttons-group"]:checked').value);
  formData.append('email', document.getElementById('email').value);
  formData.append('mobileNo', document.getElementById('number').value);
  formData.append('line1', document.getElementById('line1').value);
  formData.append('line2', document.getElementById('line2').value);
  formData.append('village', document.getElementById('village').value);
  formData.append('city', document.getElementById('city').value);
  formData.append('mandal', document.getElementById('mandal').value);
  formData.append('district', document.getElementById('district').value);
  formData.append('state', document.getElementById('state').value);
  formData.append('pincode', document.getElementById('pincode').value);
  formData.append('nationality', document.getElementById('nationality').value);
  formData.append('profession', document.getElementById('profession').value);
  formData.append('maritalStatus', document.getElementById('martial status').value);
  formData.append('disability', document.getElementById('disability').value);

  if (document.getElementById('disability').value === 'yes') {
    formData.append('disabilityDescription', document.getElementById('disabilityDescription').value);
  }

  formData.append('volunteerRegistration', document.querySelector('input[name="row-radio-buttons-group"]:checked').value);

  formData.append('subscriptionPlan', document.getElementById('subscription').value);

  fetch('your-backend-endpoint-url', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Response from server:', data);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
   
  });
}

    return (
      <>
        <div className="register-container" style={{height:"280vh"}}><br/>
          
        <form className="register-form" style={{ 
  position: "relative", 
  width: "60%", 
  alignItems: "center", 
  justifyContent: 'center',
  height: "248vh",
  maxHeight: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 0 30px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.3), 0 -10px 20px rgba(0, 0, 0, 0.3), 0 20px 40px rgba(0, 0, 0, 0.2)",
}}>

        
        <div className="form-container" style={{marginTop:"-4cm",marginLeft:"-1cm"}}>
                <h1 style={{fontWeight:"bolder",fontSize:"xxx-large",textAlign:"center"}}><b>Registration</b></h1><br/>

                <h3><b>Personal details</b></h3>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <TextField
        id="fname"
        label="First_Name"
        type="text"
        variant="standard"
        value={firstName}
        onChange={handleFirstNameChange}
        error={!!errors.firstName}
        helperText={errors.firstName}
        style={{ marginRight: "1rem", width: "7cm" }}
      />
      <TextField
        id="m_initial"
        label="M_Initial"
        variant="standard"
        value={middleInitial}
        onChange={handleMiddleInitialChange}
        error={!!errors.middleInitial}
        helperText={errors.middleInitial}
        inputProps={{
          pattern: "^[a-zA-Z]*$",
          title: "Please enter letters only",
        }}
        style={{ width: "7cm", marginLeft: "2cm", fontSizeAdjust: "bolder" }}
        required
      />
    </div><br/>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <TextField
        id="last-name"
        label="Last Name"
        variant="standard"
        value={lastName}
        onChange={handleLastNameChange}
        error={!!errors.lastName}
        helperText={errors.lastName}
        style={{ width: "7cm" }}
        required
      />
      <TextField
        id="family-name"
        label="Family Name"
        variant="standard"
        value={familyName}
        onChange={handleFamilyNameChange}
        error={!!errors.familyName}
        helperText={errors.familyName}
        style={{ width: "7cm", marginLeft: "2.45cm" }}
        required
      />
    </div><br/>
                   
                <div style={{  display: "flex", flexDirection: "row", alignItems: "center" }}>
                <TextField
                    id="dob"
                    label="Date of Birth"
                    type="date"
                    variant="standard"
                    value={dob}
                    onChange={handleDobChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ marginRight: "1rem",width:"7cm" }}
                    required
                />
                <TextField
                    id="age"
                    label="Age"
                    variant="standard"
                    value={age}
                    disabled
                    style={{width:"7cm",marginLeft:"2cm",fontSizeAdjust:"bolder"}}
                    required
                />
            </div><br/>
            <div style={{  display: "flex", flexDirection: "row", alignItems: "center" }}>
            <TextField
                id="placeofbirth"
                label="Place of Birth"
                variant="standard"
                value={placeOfBirth}
                onChange={handlePlaceOfBirthChange}
                error={!!errors.placeOfBirth}
                helperText={errors.placeOfBirth}
                style={{ marginRight: "1rem", width: "7cm" }}
                required
            />
                 <div style={{ marginLeft: "2cm" }}>
                 <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={gender}
                      onChange={handleGenderChange}
                  >
                      <FormControlLabel value="female" control={<Radio />} label="Male" />
                      <FormControlLabel value="male" control={<Radio />} label="Female" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                  {errors.gender && <FormHelperText error>{errors.gender}</FormHelperText>}
                    </div>
                    </div><br/>
               

{/* <h3><b>Contact details</b></h3> */}
<TextField
                style={{ width: "8cm" }}
                type="email"
                id="email"
                label="Email"
                variant="standard"
                required
                value={email}
                onChange={handleEmailChange}
                error={!!errors.email}
                helperText={errors.email}
                
            />
            <Button
                style={{ marginLeft: "0.5cm", backgroundColor: "rgba(17,106,162,255)", color: "white", height: "1cm", width: "2.5cm", marginTop: "0.3cm" }}
                variant="contained"
            >
                Verify
            </Button>
            <br /><br />
        
            <TextField
                style={{ width: "8cm" }}
                type="tel"
                id="number"
                label="Mobile No"
                variant="standard"
                required
                value={mobileNo}
                onChange={handleMobileNoChange}
                error={!!errors.mobileNo}
                helperText={errors.mobileNo}
                
            />
            <Button
                style={{ marginLeft: "0.5cm", backgroundColor: "rgba(17,106,162,255)", color: "white", height: "1cm", width: "2.5cm", marginTop: "0.3cm" }}
                variant="contained"
            >
                Verify
            </Button>
            <br /><br />
            <h3><b>Address</b></h3>
            <TextField
                    id="line1"
                    label=""
                    variant="standard"
                    style={{  width: "89%",paddingRight:"10%" }}
                    required
                /><br/><br/>
                <TextField
                    id="line2"
                    label=""
                    variant="standard"
                    style={{  width: "89%" }}
                /><br/><br/>
                 <div style={{  display: "flex", flexDirection: "row", alignItems: "center" }}>
                 <TextField
                    id="village"
                    label="Village"
                    variant="standard"
                    style={{  width: "7cm" }}
                    required
                    value={village}
                    onChange={handleVillageChange}
                    error={!!errors.village}
                    helperText={errors.village}
                />
                <TextField
                    id="city"
                    label="City"
                    variant="standard"
                    style={{ marginLeft: "2.5cm", width: "7cm" }}
                    required
                    value={city}
                    onChange={handleCityChange}
                    error={!!errors.city}
                    helperText={errors.city}
                />
                </div><br/>
                <div style={{  display: "flex", flexDirection: "row", alignItems: "center" }}>
                <TextField
                    id="mandal"
                    label="Mandal"
                    variant="standard"
                    style={{  width: "7cm" }}
                    required
                    value={mandal}
                    onChange={handleMandalChange}
                    error={!!errors.mandal}
                    helperText={errors.mandal}
                />
                <TextField
                    id="district"
                    label="District"
                    variant="standard"
                    style={{ marginLeft: "2.5cm", width: "7cm" }}
                    required
                    value={district}
                    onChange={handleDistrictChange}
                    error={!!errors.district}
                    helperText={errors.district}
                />
                </div><br/>
                <div style={{  display: "flex", flexDirection: "row", alignItems: "center" }}>
                <TextField
                    id="state"
                    label="State"
                    variant="standard"
                    style={{ width: "7cm" }}
                    required
                    value={state}
                    onChange={handleStateChange}
                    error={!!errors.state}
                    helperText={errors.state}
                />
                <TextField
                    id="pincode"
                    label="Pin-code"
                    variant="standard"
                    style={{ marginLeft: "2.5cm", width: "7cm" }}
                    required
                    value={pincode}
                    onChange={handlePinCodeChange}
                    error={!!errors.pincode}
                    helperText={errors.pincode}
                    
                />
                </div><br />
                <div style={{  display: "flex", flexDirection: "row", alignItems: "center" }}>
               <TextField
                id="nationality"
                label="Nationality"
                variant="standard"
                style={{ width: "7cm" }}
                select
                value={nationality}
                onChange={handleNationalityChange}
                required
              >
        <MenuItem value="none">--select--</MenuItem>    
        <MenuItem value="Afghanistan">Afghanistan</MenuItem>
        <MenuItem value="Albania">Albania</MenuItem>
        <MenuItem value="Algeria">Algeria</MenuItem>
        <MenuItem value="Andorra">Andorra</MenuItem>
        <MenuItem value="Angola">Angola</MenuItem>
        <MenuItem value="Antigua and Barbuda">Antigua and Barbuda</MenuItem>
        <MenuItem value="Argentina">Argentina</MenuItem>
        <MenuItem value="Armenia">Armenia</MenuItem>
        <MenuItem value="Australia">Australia</MenuItem>
        <MenuItem value="Austria">Austria</MenuItem>
        <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
        <MenuItem value="Bahamas">Bahamas</MenuItem>
        <MenuItem value="Bahrain">Bahrain</MenuItem>
        <MenuItem value="Bangladesh">Bangladesh</MenuItem>
        <MenuItem value="Barbados">Barbados</MenuItem>
        <MenuItem value="Belarus">Belarus</MenuItem>
        <MenuItem value="Belgium">Belgium</MenuItem>
        <MenuItem value="Belize">Belize</MenuItem>
        <MenuItem value="Benin">Benin</MenuItem>
        <MenuItem value="Bhutan">Bhutan</MenuItem>
        <MenuItem value="Bolivia">Bolivia</MenuItem>
        <MenuItem value="Bosnia and Herzegovina">Bosnia and Herzegovina</MenuItem>
        <MenuItem value="Botswana">Botswana</MenuItem>
        <MenuItem value="Brazil">Brazil</MenuItem>
        <MenuItem value="Brunei">Brunei</MenuItem>
        <MenuItem value="Bulgaria">Bulgaria</MenuItem>
        <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
        <MenuItem value="Burundi">Burundi</MenuItem>
        <MenuItem value="Cambodia">Cambodia</MenuItem>
        <MenuItem value="Cameroon">Cameroon</MenuItem>
        <MenuItem value="Canada">Canada</MenuItem>
        <MenuItem value="Central African Republic">Central African Republic</MenuItem>
        <MenuItem value="Chad">Chad</MenuItem>
        <MenuItem value="Chile">Chile</MenuItem>
        <MenuItem value="China">China</MenuItem>
        <MenuItem value="Colombia">Colombia</MenuItem>
        <MenuItem value="Comoros">Comoros</MenuItem>
        <MenuItem value="Congo">Congo</MenuItem>
        <MenuItem value="Costa Rica">Costa Rica</MenuItem>
        <MenuItem value="Côte d'Ivoire">Côte d'Ivoire</MenuItem>
        <MenuItem value="Croatia">Croatia</MenuItem>
        <MenuItem value="Cuba">Cuba</MenuItem>
        <MenuItem value="Cyprus">Cyprus</MenuItem>
        <MenuItem value="Czech Republic">Czech Republic</MenuItem>
        <MenuItem value="Denmark">Denmark</MenuItem>
        <MenuItem value="Djibouti">Djibouti</MenuItem>
        <MenuItem value="Dominica">Dominica</MenuItem>
        <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
        <MenuItem value="Ecuador">Ecuador</MenuItem>
        <MenuItem value="Egypt">Egypt</MenuItem>
        <MenuItem value="El Salvador">El Salvador</MenuItem>
        <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
        <MenuItem value="Eritrea">Eritrea</MenuItem>
        <MenuItem value="Estonia">Estonia</MenuItem>
        <MenuItem value="Ethiopia">Ethiopia</MenuItem>
        <MenuItem value="Fiji">Fiji</MenuItem>
        <MenuItem value="Finland">Finland</MenuItem>
        <MenuItem value="France">France</MenuItem>
        <MenuItem value="Gabon">Gabon</MenuItem>
        <MenuItem value="Gambia">Gambia</MenuItem>
        <MenuItem value="Georgia">Georgia</MenuItem>
        <MenuItem value="Germany">Germany</MenuItem>
        <MenuItem value="Ghana">Ghana</MenuItem>
        <MenuItem value="Greece">Greece</MenuItem>
        <MenuItem value="Grenada">Grenada</MenuItem>
        <MenuItem value="Guatemala">Guatemala</MenuItem>
        <MenuItem value="Guinea">Guinea</MenuItem>
        <MenuItem value="Guinea-Bissau">Guinea-Bissau</MenuItem>
        <MenuItem value="Guyana">Guyana</MenuItem>
        <MenuItem value="Haiti">Haiti</MenuItem>
        <MenuItem value="Honduras">Honduras</MenuItem>
        <MenuItem value="Hungary">Hungary</MenuItem>
        <MenuItem value="Iceland">Iceland</MenuItem>
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="Indonesia">Indonesia</MenuItem>
        <MenuItem value="Iran">Iran</MenuItem>
        <MenuItem value="Iraq">Iraq</MenuItem>
        <MenuItem value="Ireland">Ireland</MenuItem>
        <MenuItem value="Israel">Israel</MenuItem>
        <MenuItem value="Italy">Italy</MenuItem>
        <MenuItem value="Jamaica">Jamaica</MenuItem>
        <MenuItem value="Japan">Japan</MenuItem>
        <MenuItem value="Jordan">Jordan</MenuItem>
        <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
        <MenuItem value="Kenya">Kenya</MenuItem>
        <MenuItem value="Kiribati">Kiribati</MenuItem>
        <MenuItem value="North Korea">North Korea</MenuItem>
        <MenuItem value="South Korea">South Korea</MenuItem>
        <MenuItem value="Kosovo">Kosovo</MenuItem>
        <MenuItem value="Kuwait">Kuwait</MenuItem>
        <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
        <MenuItem value="Laos">Laos</MenuItem>
        <MenuItem value="Latvia">Latvia</MenuItem>
        <MenuItem value="Lebanon">Lebanon</MenuItem>
        <MenuItem value="Lesotho">Lesotho</MenuItem>
        <MenuItem value="Liberia">Liberia</MenuItem>
        <MenuItem value="Libya">Libya</MenuItem>
        <MenuItem value="Lithuania">Lithuania</MenuItem>
        <MenuItem value="Luxembourg">Luxembourg</MenuItem>
        <MenuItem value="Macedonia">Macedonia</MenuItem>
        <MenuItem value="Madagascar">Madagascar</MenuItem>
        <MenuItem value="Malawi">Malawi</MenuItem>
        <MenuItem value="Malaysia">Malaysia</MenuItem>
        <MenuItem value="Maldives">Maldives</MenuItem>
        <MenuItem value="Mali">Mali</MenuItem>
        <MenuItem value="Malta">Malta</MenuItem>
        <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
        <MenuItem value="Mauritania">Mauritania</MenuItem>
        <MenuItem value="Mauritius">Mauritius</MenuItem>
        <MenuItem value="Mexico">Mexico</MenuItem>
        <MenuItem value="Micronesia">Micronesia</MenuItem>
        <MenuItem value="Moldova">Moldova</MenuItem>
        <MenuItem value="Monaco">Monaco</MenuItem>
        <MenuItem value="Mongolia">Mongolia</MenuItem>
        <MenuItem value="Montenegro">Montenegro</MenuItem>
        <MenuItem value="Morocco">Morocco</MenuItem>
        <MenuItem value="Mozambique">Mozambique</MenuItem>
        <MenuItem value="Myanmar">Myanmar</MenuItem>
        <MenuItem value="Namibia">Namibia</MenuItem>
        <MenuItem value="Nauru">Nauru</MenuItem>
        <MenuItem value="Nepal">Nepal</MenuItem>
        <MenuItem value="Netherlands">Netherlands</MenuItem>
        <MenuItem value="New Zealand">New Zealand</MenuItem>
        <MenuItem value="Nicaragua">Nicaragua</MenuItem>
        <MenuItem value="Niger">Niger</MenuItem>
        <MenuItem value="Nigeria">Nigeria</MenuItem>
        <MenuItem value="Norway">Norway</MenuItem>
        <MenuItem value="Oman">Oman</MenuItem>
        <MenuItem value="Pakistan">Pakistan</MenuItem>
        <MenuItem value="Palau">Palau</MenuItem>
        <MenuItem value="Panama">Panama</MenuItem>
        <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
        <MenuItem value="Paraguay">Paraguay</MenuItem>
        <MenuItem value="Peru">Peru</MenuItem>
        <MenuItem value="Philippines">Philippines</MenuItem>
        <MenuItem value="Poland">Poland</MenuItem>
        <MenuItem value="Portugal">Portugal</MenuItem>
        <MenuItem value="Qatar">Qatar</MenuItem>
        <MenuItem value="Romania">Romania</MenuItem>
        <MenuItem value="Russia">Russia</MenuItem>
        <MenuItem value="Rwanda">Rwanda</MenuItem>
        <MenuItem value="Saint Kitts and Nevis">Saint Kitts and Nevis</MenuItem>
        <MenuItem value="Saint Lucia">Saint Lucia</MenuItem>
        <MenuItem value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</MenuItem>
        <MenuItem value="Samoa">Samoa</MenuItem>
        <MenuItem value="San Marino">San Marino</MenuItem>
        <MenuItem value="Sao Tome and Principe">Sao Tome and Principe</MenuItem>
        <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
        <MenuItem value="Senegal">Senegal</MenuItem>
        <MenuItem value="Serbia">Serbia</MenuItem>
        <MenuItem value="Seychelles">Seychelles</MenuItem>
        <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
        <MenuItem value="Singapore">Singapore</MenuItem>
        <MenuItem value="Sint Maarten">Sint Maarten</MenuItem>
        <MenuItem value="Slovakia">Slovakia</MenuItem>
        <MenuItem value="Slovenia">Slovenia</MenuItem>
        <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
        <MenuItem value="Somalia">Somalia</MenuItem>
        <MenuItem value="South Africa">South Africa</MenuItem>
        <MenuItem value="South Sudan">South Sudan</MenuItem>
        <MenuItem value="Spain">Spain</MenuItem>
        <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
        <MenuItem value="Sudan">Sudan</MenuItem>
        <MenuItem value="Suriname">Suriname</MenuItem>
        <MenuItem value="Swaziland">Swaziland</MenuItem>
        <MenuItem value="Sweden">Sweden</MenuItem>
        <MenuItem value="Switzerland">Switzerland</MenuItem>
        <MenuItem value="Syria">Syria</MenuItem>
        <MenuItem value="Tajikistan">Tajikistan</MenuItem>
        <MenuItem value="Tanzania">Tanzania</MenuItem>
        <MenuItem value="Thailand">Thailand</MenuItem>
        <MenuItem value="Timor-Leste">Timor-Leste</MenuItem>
        <MenuItem value="Togo">Togo</MenuItem>
        <MenuItem value="Tonga">Tonga</MenuItem>
        <MenuItem value="Trinidad and Tobago">Trinidad and Tobago</MenuItem>
        <MenuItem value="Tunisia">Tunisia</MenuItem>
        <MenuItem value="Turkey">Turkey</MenuItem>
        <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
        <MenuItem value="Tuvalu">Tuvalu</MenuItem>
        <MenuItem value="Uganda">Uganda</MenuItem>
        <MenuItem value="Ukraine">Ukraine</MenuItem>
        <MenuItem value="United Arab Emirates">United Arab Emirates</MenuItem>
        <MenuItem value="United Kingdom">United Kingdom</MenuItem>
        <MenuItem value="United States">United States</MenuItem>
        <MenuItem value="Uruguay">Uruguay</MenuItem>
        <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
        <MenuItem value="Vanuatu">Vanuatu</MenuItem>
        <MenuItem value="Vatican City">Vatican City</MenuItem>
        <MenuItem value="Venezuela">Venezuela</MenuItem>
        <MenuItem value="Vietnam">Vietnam</MenuItem>
        <MenuItem value="Yemen">Yemen</MenuItem>
        <MenuItem value="Zambia">Zambia</MenuItem>
        <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
    </TextField>
    <TextField
          id="profession"
          label="Profession"
          variant="standard"
          style={{ width: "7cm",marginLeft:"2.5cm" }}
          select
          value={profession}
          onChange={handleProfessionChange}
          required
        >
        <MenuItem value="none">--select--</MenuItem>    
        <MenuItem value="job">Job</MenuItem>
        <MenuItem value="student">Student</MenuItem>
        <MenuItem value="bussiness">Bussiness</MenuItem>
        <MenuItem value="other">Other</MenuItem>
    </TextField>
    </div><br/>
    <div style={{  display: "flex", flexDirection: "row", alignItems: "center" }}>
    <TextField
          id="martial status"
          label="Martial - Status"
          variant="standard"
          style={{ width: "7cm" }}
          select
          value={maritalStatus}
          onChange={handleMaritalStatusChange}
          required
        >
        <MenuItem value="none">--select--</MenuItem> 
        <MenuItem value="married">Married</MenuItem>
        <MenuItem value="unmarried">Unmarried</MenuItem>
      
    </TextField>
    <TextField
            id="disability"
            label="Disability"
            variant="standard"
            style={{ width: "7cm",marginLeft:"2.5cm" }}
            select
            value={disability}
            onChange={handleDisabilityChange}
            required
          >
            <MenuItem value="none">-- select --</MenuItem>
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </TextField><br/><br/>
          </div><br/><br/>

          {disability === 'yes' && (
            <div>
              <label htmlFor="disabilityDescription">Disability Description:</label>
              <TextareaAutosize
                id="disabilityDescription"
                minRows={3}
                maxRows={6}
                style={{ width: "88%", marginTop: "0.5rem" }}
                value={disabilityDescription}
                onChange={handleDisabilityDescriptionChange}
                required
              />
            </div>
          )}
          

    <h1><b>Want to Register as Volunteer?</b></h1>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={handleRadioChange}>
          
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          
          </RadioGroup>
          
          {/* Display ID pop-up if showId is true */}
          {showId && (
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', border: '1px solid #000', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
              <p>You have successfully registerd as volunteer , here is your volunteer ID: <span>{generatedId}</span></p>
              <button onClick={closePopup}>Close</button>
            </div>
          )}

          {/* Display generated ID below the radio buttons */}
          {generatedId && !showId && <p>Your Volunteer ID: {generatedId}</p>}<br/>

          <h1><b>Subscription:</b></h1>
          <TextField
            id="subscription"
            label="Subscription plans"
            variant="standard"
            style={{ width: "6.3cm" }}
            select
            value={selectedPlan}
            onChange={handlePlanChange}
            required
          >
            <MenuItem value="none">--select--</MenuItem>
            <MenuItem value="plan">Membership</MenuItem>
          </TextField>
          <br /><br />
          {/* Display amount, discount, and total amount */}
          {selectedPlan === 'plan' && (
            <div >
              <p><b>Amount: </b><span style={{ textDecoration: 'line-through' }}>3650</span></p>
              <p><b>Discount: 90%</b></p>
              <p><b>Total Amount:</b> {totalAmount}/-</p>
            </div>
          )}
          <div style={{ display: 'flex', alignItems: "center", justifyContent: "center",marginTop:"-1.5cm" }}>
      <Button variant="contained" endIcon={<SendIcon />} >
        Paynow
      </Button>
     
</div><br/><br/><br/>

  <Button variant="contained"  size="large" style={{left: "50%", transform: "translate(-50%, -50%)"}}>Create Member</Button>


    </div>
    </form>
    </div>
    </>
    )
}

export default MemberRegistration;
