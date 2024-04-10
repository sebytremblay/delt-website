import React, { useEffect, useCallback } from "react";
import "../../../Styling/Pages/Homepage/Home.css";
import Calendar from "./Calendar";
import Carousel from "./Carousel";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
  // Calculate and return the aspect ratio of the whole window
  const calculateAspectRatio = useCallback(
    () => window.innerWidth / window.innerHeight,
    []
  );

  // Calculate and return the adjusted height percentage based on the aspect ratio
  const calculateAdjustedHeightPercentage = useCallback(
    (aspectRatio: number) => {
      const basePercentage = 0.95; // Base height percentage
      const heightAdjustmentFactor = 0.05; // Height adjustment per increment
      const aspectRatioStep = 0.25; // Aspect ratio incrememnt
      const maxAspectRatio = 2; // Maximum aspect ratio

      let adjustedHeightPercentage =
        basePercentage -
        Math.floor((maxAspectRatio - aspectRatio) / aspectRatioStep) *
          heightAdjustmentFactor;

      // Ensure the percentage is not less than 60%
      return Math.max(adjustedHeightPercentage, 0.6);
    },
    []
  );

  // Adjust the max height of the events list
  const adjustEventsListMaxHeight = useCallback(() => {
    const calendarContainer = document.querySelector(
      ".calendar-container"
    ) as HTMLElement;
    const orderedList = document.querySelector(".ordered-list") as HTMLElement;

    if (calendarContainer && orderedList) {
      const aspectRatio = calculateAspectRatio();
      const calendarHeight = calendarContainer.offsetHeight;
      const adjustedHeightPercentage =
        calculateAdjustedHeightPercentage(aspectRatio);
      const adjustedHeight = calendarHeight * adjustedHeightPercentage;

      orderedList.style.maxHeight = `${adjustedHeight}px`;
      orderedList.style.overflowY = "auto";
    }
  }, [calculateAspectRatio, calculateAdjustedHeightPercentage]);

  // Observe changes to adjust the events list height
  useEffect(() => {
    adjustEventsListMaxHeight();

    const calendarContainer = document.querySelector(
      ".calendar-container"
    ) as HTMLElement;
    if (calendarContainer) {
      const observer = new MutationObserver(adjustEventsListMaxHeight);
      observer.observe(calendarContainer, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      });

      // Resize event listener
      const updateOnResize = () => adjustEventsListMaxHeight();
      window.addEventListener("resize", updateOnResize);

      // Teardown the observer and event listener
      return () => {
        observer.disconnect();
        window.removeEventListener("resize", updateOnResize);
      };
    }
  }, [adjustEventsListMaxHeight]);

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
