import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const MyCalendar = () => {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      initialView="dayGridMonth"
      events={[
        { title: 'Event 1', date: '2022-05-01' },
        { title: 'Event', date: '2024-05-10' }
        // Add more events as needed
      ]}
    />
  );
};

export default MyCalendar;
