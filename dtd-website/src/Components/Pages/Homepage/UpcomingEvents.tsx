import React, { useState, useEffect } from "react";
import "../../../Styling/Pages/Homepage/UpcomingEvents.css";

interface CalendarEvent {
  id: string;
  summary: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
}

interface EventItemProps {
  event: CalendarEvent;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const startDateTime = new Date(
    event.start?.dateTime || event.start?.date || "TBD"
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
    <li className="event-list-item">
      <span className="event-name">{summary}: </span>
      <span className="event-date">{`${monthDay}, ${dayOfWeek}, `}</span>
      <span className="event-time">{time}.</span>
      <div className="event-location">
        <span id="location">Location:</span> {location}
      </div>
    </li>
  );
};

interface Props {
  timeRange: number; // Time range in months
}

const UpcomingEvents: React.FC<Props> = ({ timeRange }) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY!;
  const googleCalendarId = process.env.REACT_APP_GOOGLE_CALENDAR_ID!;

  useEffect(() => {
    (async () => {
      if (!apiKey || !googleCalendarId) {
        console.error("API key or Calendar ID is undefined");
        return;
      }

      const timeMin = new Date().toISOString();
      const timeMaxDate = new Date();
      timeMaxDate.setMonth(timeMaxDate.getMonth() + timeRange);
      const timeMax = timeMaxDate.toISOString();

      const eventsUrl = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        googleCalendarId
      )}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}`;

      try {
        const response = await fetch(eventsUrl);
        if (!response.ok) throw new Error("Failed to fetch events.");
        const { items = [] } = await response.json();
        setEvents(
          items.map((item: Partial<CalendarEvent>) => ({
            ...item,
            start: item.start || {},
          })) as CalendarEvent[]
        );
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      }
    })();
  }, [apiKey, googleCalendarId, timeRange]);

  return (
    <div className="upcoming-events-container">
      <h3 id="ue-title">Upcoming Events</h3>
      <div className="events-list">
        <ol>
          {events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default UpcomingEvents;
