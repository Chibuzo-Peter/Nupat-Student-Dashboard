import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'; 

function DailySchedule() {
  return (
    <div style={{fontSize:"12px"}}>
      <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView="timeGridWeek" 
        events={[
          { title: 'Design Systems', start: '2024-05-13T08:00:00', end: '2024-05-13T10:00:00' },
          { title: 'User Testing & Usability', start: '2024-05-13T12:00:00', end: '2024-05-13T14:00:00' },
        ]}
      />
    </div>
  );
}

export default DailySchedule;
