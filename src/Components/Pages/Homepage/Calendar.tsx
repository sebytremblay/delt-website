import React from "react";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../../Styling/Pages/Homepage/Calendar.css";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const GOOGLE_CALENDAR_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID;

const Calendar = () => {
  console.log(`API_KEY: ${API_KEY ? API_KEY : "undefined"}`);
  console.log(`GOOGLE_CALENDAR_ID: ${GOOGLE_CALENDAR_ID ? GOOGLE_CALENDAR_ID : "undefined"}`);

  return (
    <div className="calendar-container">
      <h2 id="calendar-title">Calendar</h2>
      <FullCalendar
        plugins={[googleCalendarPlugin, dayGridPlugin]}
        googleCalendarApiKey={API_KEY}
        events={{ googleCalendarId: GOOGLE_CALENDAR_ID }}
        initialView="dayGridMonth"
        buttonText={{
          today: "Return to Current Month",
        }}
      />
    </div>
  );
};

export default Calendar;
