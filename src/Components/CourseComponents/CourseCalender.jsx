import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Schedule() {
  return (
    <div style={{fontSize:"12px"}}>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'Design Systems',  start: '2024-05-06T08:00:00', end: '2024-05-10T10:00:00'},
        ]}
      />
    </div>
  );
}

export default Schedule;
