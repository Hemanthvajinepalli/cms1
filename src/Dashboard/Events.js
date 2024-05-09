import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const Events = () => {
    const [currentEvents, setCurrentEvents] = useState([]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get("http://localhost:8068/calendar/events");
            const currentDate = new Date();

            const futureEvents = response.data.filter(event => {
                const eventStartDate = new Date(event.start);
                return eventStartDate > currentDate;
            });

            setCurrentEvents(futureEvents.slice(0, 3)); // Limit to 3 events
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []); 

    return (
        <div style={{marginTop:"60px"}}>
            <h1 style={{ }}>Upcoming Events</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {currentEvents.length > 0 ? (
                    currentEvents.map(event => (
                        <Card key={event.id} sx={{ minWidth: 200, backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/002/852/371/small/colorful-fireworks-background-free-vector.jpg')`, color: 'whitesmoke', textAlign: "center" }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {event.title}
                                </Typography>
                                <Typography variant="body2">
                                    Start Time: {new Date(event.start).toLocaleTimeString()}
                                </Typography>
                                <Typography variant="body2">
                                    End Time: {new Date(event.end).toLocaleTimeString()}
                                </Typography>
                                <Typography variant="body2">
                                    Description: {event.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Card sx={{ minWidth: 200, textAlign: "center" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                No events available
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default Events;
