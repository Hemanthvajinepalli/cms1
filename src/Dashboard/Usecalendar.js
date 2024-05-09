import React, { useState, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import "./UserCalendar.css";
import { Box, List, ListItem, ListItemText, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, useTheme } from "@mui/material";
// import { tokens } from "./theme";
import { formatDate } from "@fullcalendar/core";

const UserCalendar = () => {
    //   const theme = useTheme();
    //   const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [editEventData, setEditEventData] = useState(null);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get("http://localhost:8068/calendar/events");
            setCurrentEvents(response.data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    return (
        <Box id="Calendar-styles" style={{ }}>
            <Box style={{ }}>
                <Box style={{ marginTop: "10%" }}>
                    <FullCalendar
                        height="27vh"
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,listMonth" }}
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
                                    fontSize: "10px"
                                }
                            }
                        }}
                        className="custom-calendar"
                    />



                </Box>
            </Box>
        </Box>
    );
};

export default UserCalendar;
