import React, { useState, useEffect } from "react";

interface CalendarEvent {
  id: string;
  summary: string;
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
      <ol>
        {events.map((event: CalendarEvent) => {
          const start = event.start?.dateTime || event.start?.date || "";
          const summary = event.summary || "Untitled";
          return (
            <li key={event.id}>
              {summary}:{" "}
              {start
                ? new Date(start).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })
                : "No start time"}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default UpcomingEvents;
