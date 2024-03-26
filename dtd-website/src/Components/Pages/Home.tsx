import React from "react";
import "/Users/vkamarthi24/Desktop/Work/College Work/delt-website/dtd-website/src/Styling/Homepage.css";
import Calendar from "./Calendar";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
  return (
    <div className="home-layout">
      <div className="calendar">
        <Calendar />
      </div>
      <div className="upcoming-events">
        <UpcomingEvents timeRange={3} />
      </div>
    </div>
  );
};

export default Home;
