import React from "react";
import "../../../Styling/Pages/Homepage/Home.css";
import Calendar from "./Calendar";
import Carousel from "./Carousel";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
  return (
    <div className="home-layout">
      <div className="schedule-container">
        <div className="calendar">
          <Calendar />
        </div>
        <div className="upcoming-events">
          <UpcomingEvents timeRange={4} />
        </div>
      </div>
      <div className="homepage-carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
