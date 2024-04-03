import React from "react";
import { Carousel } from "react-bootstrap";
import "../../../Styling/Pages/Homepage/Carousel.css";
import image1 from "../../../Materials/CarouselPictures/Carousel1.png";
import image2 from "../../../Materials/CarouselPictures/Carousel2.png";
import image3 from "../../../Materials/CarouselPictures/Carousel3.png";
import image4 from "../../../Materials/CarouselPictures/Carousel4.png";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item key="image1">
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item key="image2">
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item key="image3">
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item key="image4">
        <img className="d-block w-100" src={image4} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
