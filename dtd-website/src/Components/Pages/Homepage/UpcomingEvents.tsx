import React, { useState, useEffect } from "react";
import "/Users/vkamarthi24/Desktop/Work/College Work/delt-website/dtd-website/src/Styling/Pages/Homepage/UpcomingEvents.css";

interface CalendarEvent {
  id: string;
  summary: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
}

interface Props {
  timeRange: number; // Time range in months
}

const UpcomingEvents = ({ timeRange }: Props) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY!;
  const googleCalendarId = process.env.REACT_APP_GOOGLE_CALENDAR_ID!;

  useEffect(() => {
    const fetchEvents = async () => {
      if (!apiKey || !googleCalendarId) {
        console.error("API key or Calendar ID is undefined");
        return;
      }

      const timeMin = new Date().toISOString(); // Now
      const timeMaxDate = new Date();
      timeMaxDate.setMonth(timeMaxDate.getMonth() + timeRange); // Set months ahead based on timeRange
      const timeMax = timeMaxDate.toISOString();

      const eventsUrl = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        googleCalendarId
      )}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}`;

      try {
        const response = await fetch(eventsUrl);
        const data = await response.json();
        if (Array.isArray(data.items)) {
          setEvents(data.items as CalendarEvent[]);
        } else {
          setEvents([]); // Sets an empty array if data.items is not an array
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]); // Also set to an empty array in case of an error
      }
    };
    fetchEvents();
  }, [apiKey, googleCalendarId, timeRange]);

  return (
    <div className="upcoming-events-container">
      <h3 id="ue-title">Upcoming Events</h3>
      <div className="events-list">
        <ol>
          {events.map((event: CalendarEvent) => {
            const startDateTime = new Date(
              event.start?.dateTime || event.start?.date || ""
            );
            const monthDay = startDateTime.toLocaleDateString("en-US", {
              month: "numeric",
              day: "numeric",
            });
            const dayOfWeek = startDateTime.toLocaleDateString("en-US", {
              weekday: "long",
            });
            const time = startDateTime.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });
            const summary = event.summary || "Untitled";
            const location = event.location || "TBD";
            return (
              <li key={event.id} className="event-list-item">
                <span className="event-Name">{summary}: </span>
                <span className="event-date">{`${monthDay}, ${dayOfWeek}, `}</span>
                <span className="event-time">{time}.</span>
                <div className="event-location">
                  {" "}
                  <span id="location">Location:</span> {location}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default UpcomingEvents;
