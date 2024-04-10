import React from "react";
import { Carousel } from "react-bootstrap";
import "../../../Styling/Pages/Homepage/Carousel.css";
import image1 from "../../../Materials/CarouselPictures/Carousel1.png";
import image2 from "../../../Materials/CarouselPictures/Carousel2.png";
import image3 from "../../../Materials/CarouselPictures/Carousel3.png";
import image4 from "../../../Materials/CarouselPictures/Carousel4.png";

const carouselElements = [
  { id: "image1", src: image1, alt: "First slide" },
  { id: "image2", src: image2, alt: "Second slide" },
  { id: "image3", src: image3, alt: "Third slide" },
  { id: "image4", src: image4, alt: "Fourth slide" },
];

const MyCarousel = () => {
  return (
    <Carousel>
      {carouselElements.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
