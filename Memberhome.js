

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
// import { Box, Card, CardContent, Typography, Grid, Modal } from '@mui/material';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import ServiceForm from './ServiceForm'; 
// import "./Memberdashboard.css";

// const Memberhome = () => {
//   const [audioData, setAudioData] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [dailyQuote, setDailyQuote] = useState("");
//   const imageTimer = useRef();
//   const quoteTimer = useRef();
//   const [currentEvents, setCurrentEvents] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     fetchEvents();
//     fetchAudio();
//     startTimers();

//     return () => {
//       clearInterval(imageTimer.current);
//       clearInterval(quoteTimer.current);
//     };
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get("http://localhost:8068/calendar/events");
//       setCurrentEvents(response.data);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   const fetchAudio = async () => {
//     try {
//       const response = await axios.get("http://localhost:8086/api/files/1", {
//         responseType: "arraybuffer",
//       });

//       setAudioData(response.data);
//     } catch (error) {
//       console.error("Error fetching audio:", error);
//     }
//   };

//   const startTimers = () => {
//     imageTimer.current = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 30000); // 30 seconds in milliseconds

//     quoteTimer.current = setInterval(() => {
//       updateDailyQuote();
//     }, 30000); // 30 seconds in milliseconds
//   };

//   const updateDailyQuote = () => {
//     const index = Math.floor(Math.random() * quotes.length);
//     setDailyQuote(quotes[index]);
//   };

//   useEffect(() => {
//     localStorage.setItem("lastImageIndex", currentImageIndex.toString());
//   }, [currentImageIndex]);

//   const images = [
//     "https://i.pinimg.com/564x/b9/91/2a/b9912aa16e26fbd403b02f5180210e29.jpg",
//     "https://i.pinimg.com/564x/63/1b/94/631b94628d25ce9bcd8e8823e28a6125.jpg",
//   ];

//   const quotes = [
//     "Jesse just posted for the first time in a while.",
//     "Playing the latest version of Candy Crush",
//     "Then you’re probably familiar with this notification",
//     "You now have full lives! Tap here to continue your saga.",
//     "Did you download the Starbucks app",
//   ];

//   const handleCardClick = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div style={{ height: "80vh", overflow: "auto", overflowX: "auto" }}>
//       <Grid container spacing={2} paddingLeft={20}>
//         <Grid item lg={8} md={12} sm={12} xs={12} style={{ paddingLeft: "20px" }}>
//           <Card
//             className="choir-background"
//             style={{
//               width: "90%",
//               height: "70%",
//               marginLeft: "2%",
//               backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/11/27/07/32/choir-5781096_1280.jpg")',
//               backgroundSize: "cover",
//               color: "white",
//               border: "5rem",
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" component="div" style={{ textAlign: "center", fontWeight: "bold" }}>
//                 Choir
//               </Typography>
//             </CardContent>
//           </Card>

//           <div className="quote-container" style={{ paddingTop: "3%" }}>
//             <h4 className="notification-heading">
//               <NotificationsActiveIcon /> Notification:
//             </h4>
//             <h5 className="daily-quote">{dailyQuote}</h5>
//           </div>
//         </Grid>

//         <Grid className="audio-grip" item lg={4} md={12} sm={12} xs={12} style={{ marginTop: "30px" }}>
//           <div className="glass-card audio-card" style={{ backgroundColor: "skyblue", borderRadius: "10vh", height: "12vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "-7%" }}>
//             <h4 style={{ textAlign: "center" }}>Pastor's Audio</h4>
//             <audio controls style={{ justifyContent: "center" }}>
//               <source style={{ backgroundColor: "skyblue", justifyContent: "center" }} src="Church.mp3" type="audio/mpeg" />
//               Your browser does not support the audio element.
//             </audio>
//             {audioData && (
//               <audio controls>
//                 <source src={URL.createObjectURL(new Blob([audioData]))} type="Church.mp3" style={{ width: "8%" }} />
//                 Your browser does not support the audio element.
//               </audio>
//             )}
//           </div>

//           <Box m="5px" id="Calendar-styles" style={{ paddingTop: "5%" }}>
//             <Box display="flex" justifyContent="space-between" style={{ width: "100%" }}>
//               <Box flex="1 1 100%" ml="0px" style={{ marginTop: "5%" }}>
//                 <FullCalendar
//                   height="40vh"
//                   plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
//                   headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth" }}
//                   initialView="dayGridMonth"
//                   editable={false}
//                   selectable={false}
//                   selectMirror={true}
//                   dayMaxEvents={true}
//                   events={currentEvents}
//                   themeSystem="bootstrap"
//                   theme={{
//                     toolbar: {
//                       title: {
//                         color: "white",
//                         fontSize: "10px",
//                       },
//                     },
//                   }}
//                   className="custom-calendar"
//                 />
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>

      // <Grid container spacing={-1} paddingLeft={12}>
      //   {[
      //     {
      //       title: 'Baptism',
      //       imageUrl: 'https://www.neverthirsty.org/wp-content/uploads/2023/06/is-baptism-immersion-essential-for-salvation.jpg',
      //     },
      //     {
      //       title: 'Burial',
      //       imageUrl: 'https://miltonfieldsgeorgia.com/wp-content/uploads/2019/12/burial-cemetery-countryside-cross-116909-1080x675.jpg',
      //     },
      //     {
      //       title: 'Home visit',
      //       imageUrl: 'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?cs=srgb&dl=pexels-sebastians-731082.jpg&fm=jpg',
      //     },
      //     {
      //       title: 'Weekly services',
      //       imageUrl: 'https://cpmfiles1.com/harvestbc.com/sunday-worship-1080-x-700-px-4.png',
      //     },
      //     {
      //       title: 'Events',
      //       imageUrl: 'https://st.depositphotos.com/1106664/1212/i/450/depositphotos_12122802-stock-photo-picnic.jpg',
      //     },
      //     {
      //       title: 'Donations',
      //       imageUrl: 'https://i0.wp.com/audience.co/wp-content/uploads/2022/06/church-donation-letter-for-continued-support-1-1.jpg',
      //     },
      //     {
      //       title: 'Confession',
      //       imageUrl: 'https://t4.ftcdn.net/jpg/03/99/40/37/360_F_399403754_FmDIpV0Y8Iw2Ey9YyUnaW3xH7hA7hXwn.jpg',
      //     },
      //     {
      //       title: 'Others',
      //       imageUrl: 'https://plus.unsplash.com/premium_photo-1683134190069-6f8d826f7383?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdG9yfGVufDB8fDB8fHww',
      //     },
      //   ].map((item, index) => (
      //     <Grid item lg={1.5} md={4} sm={6} xs={6} key={index} style={{ marginTop: "1%", marginLeft: '-0.3%' }}>
      //       <Card style={{ width: '9rem', height: '7rem', backgroundImage: `url("${item.imageUrl}")`, backgroundSize: 'cover', color: 'white', marginLeft: "40%", cursor: "pointer" }} onClick={handleCardClick}>
      //         <CardContent>
      //           <Typography variant="h6" component="div" style={{ textAlign: 'center', fontWeight: 'bold' }}>
      //             {item.title}
      //           </Typography>
      //         </CardContent>
      //       </Card>
      //     </Grid>
      //   ))}
      // </Grid>

//       <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
//   style={{
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }}
// >
//   <Box style={{ width: '100vw', maxHeight: '90vh', overflowY: 'auto' }}>
//     <ServiceForm handleClose={handleClose} />
//   </Box>
// </Modal>

//     </div>
//   );
// };

// export default Memberhome;


import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, Card, CardContent, Typography, Grid, Modal, Button } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ServiceForm from './ServiceForm'; 
import "./Memberdashboard.css";

const Memberhome = () => {
  const [audioData, setAudioData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dailyQuote, setDailyQuote] = useState("");
  const imageTimer = useRef();
  const quoteTimer = useRef();
  const [currentEvents, setCurrentEvents] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchEvents();
    fetchAudio();
    startTimers();

    return () => {
      clearInterval(imageTimer.current);
      clearInterval(quoteTimer.current);
    };
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8068/calendar/events");
      setCurrentEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchAudio = async () => {
    try {
      const response = await axios.get("http://localhost:8086/api/files/1", {
        responseType: "arraybuffer",
      });

      setAudioData(response.data);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  const startTimers = () => {
    imageTimer.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000); // 30 seconds in milliseconds

    quoteTimer.current = setInterval(() => {
      updateDailyQuote();
    }, 30000); // 30 seconds in milliseconds
  };

  const updateDailyQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setDailyQuote(quotes[index]);
  };

  useEffect(() => {
    localStorage.setItem("lastImageIndex", currentImageIndex.toString());
  }, [currentImageIndex]);

  const images = [
    "https://i.pinimg.com/564x/b9/91/2a/b9912aa16e26fbd403b02f5180210e29.jpg",
    "https://i.pinimg.com/564x/63/1b/94/631b94628d25ce9bcd8e8823e28a6125.jpg",
  ];

  const quotes = [
    "Jesse just posted for the first time in a while.",
    "Playing the latest version of Candy Crush",
    "Then you’re probably familiar with this notification",
    "You now have full lives! Tap here to continue your saga.",
    "Did you download the Starbucks app",
  ];

  const handleClickOpenSubscription = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ height: "80vh", overflow: "auto", overflowX: "auto" }}>
      <Grid container spacing={2} paddingLeft={20}>
        <Grid item lg={8} md={12} sm={12} xs={12} style={{ paddingLeft: "20px" }}>
          <Card
            className="choir-background"
            style={{
              width: "90%",
              height: "70%",
              marginLeft: "2%",
              backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/11/27/07/32/choir-5781096_1280.jpg")',
              backgroundSize: "cover",
              color: "white",
              border: "5rem",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" style={{ textAlign: "center", fontWeight: "bold" }}>
                Choir
              </Typography>
            </CardContent>
          </Card>

          <div className="quote-container" style={{ paddingTop: "3%" }}>
            <h4 className="notification-heading">
              <NotificationsActiveIcon /> Notification:
            </h4>
            <h5 className="daily-quote">{dailyQuote}</h5>
          </div>
        </Grid>

        <Grid className="audio-grip" item lg={4} md={12} sm={12} xs={12} style={{ marginTop: "30px" }}>
          <div className="glass-card audio-card" style={{ backgroundColor: "skyblue", borderRadius: "10vh", height: "12vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "-7%" }}>
            <h4 style={{ textAlign: "center" }}>Pastor's Audio</h4>
            <audio controls style={{ justifyContent: "center" }}>
              <source style={{ backgroundColor: "skyblue", justifyContent: "center" }} src="Church.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            {audioData && (
              <audio controls>
                <source src={URL.createObjectURL(new Blob([audioData]))} type="Church.mp3" style={{ width: "8%" }} />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>

          <Box m="5px" id="Calendar-styles" style={{ paddingTop: "5%" }}>
            <Box display="flex" justifyContent="space-between" style={{ width: "100%" }}>
              <Box flex="1 1 100%" ml="0px" style={{ marginTop: "5%" }}>
                <FullCalendar
                  height="40vh"
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                  headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth" }}
                  initialView="dayGridMonth"
                  editable={false}
                  selectable={false}
                  selectMirror={true}
                  dayMaxEvents={true}
                  events={currentEvents}
                  themeSystem="bootstrap"
                  theme={{
                    toolbar: {
                      title: {
                        color: "white",
                        fontSize: "10px",
                      },
                    },
                  }}
                  className="custom-calendar"
                />
              </Box>
            </Box>
          </Box>

          <Box display="flex" justifyContent="flex-end" mt={2} mb={2} pr={2}>
          <Button
            onClick={handleClickOpenSubscription}
            sx={{
              marginLeft: "60%",
              '&:hover': {
                backgroundColor: 'rgba(17,106,162,255)',
                color: "whitesmoke"
              },
            }}
          >
              Add Service Request
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={-1} paddingLeft={12}>
        {[
          {
            title: 'Baptism',
            imageUrl: 'https://www.neverthirsty.org/wp-content/uploads/2023/06/is-baptism-immersion-essential-for-salvation.jpg',
          },
          {
            title: 'Burial',
            imageUrl: 'https://miltonfieldsgeorgia.com/wp-content/uploads/2019/12/burial-cemetery-countryside-cross-116909-1080x675.jpg',
          },
          {
            title: 'Home visit',
            imageUrl: 'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?cs=srgb&dl=pexels-sebastians-731082.jpg&fm=jpg',
          },
          {
            title: 'Weekly services',
            imageUrl: 'https://cpmfiles1.com/harvestbc.com/sunday-worship-1080-x-700-px-4.png',
          },
          {
            title: 'Events',
            imageUrl: 'https://st.depositphotos.com/1106664/1212/i/450/depositphotos_12122802-stock-photo-picnic.jpg',
          },
          {
            title: 'Donations',
            imageUrl: 'https://i0.wp.com/audience.co/wp-content/uploads/2022/06/church-donation-letter-for-continued-support-1-1.jpg',
          },
          {
            title: 'Confession',
            imageUrl: 'https://t4.ftcdn.net/jpg/03/99/40/37/360_F_399403754_FmDIpV0Y8Iw2Ey9YyUnaW3xH7hA7hXwn.jpg',
          },
          {
            title: 'Others',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1683134190069-6f8d826f7383?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdG9yfGVufDB8fDB8fHww',
          },
        ].map((item, index) => (
          <Grid item lg={1.5} md={4} sm={6} xs={6} key={index} style={{ marginTop: "1%", marginLeft: '-0.3%' }}>
            <Card style={{ width: '9rem', height: '7rem', backgroundImage: `url("${item.imageUrl}")`, backgroundSize: 'cover', color: 'white', marginLeft: "20%", cursor: "pointer" }} >
              <CardContent>
                <Typography variant="h6" component="div" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>


      <Modal open={open} onClose={handleClose}>
        <div>
          <ServiceForm handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
};

export default Memberhome;
