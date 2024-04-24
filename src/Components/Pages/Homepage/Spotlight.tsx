import React from "react";
import { Carousel } from "react-bootstrap";
import "../../../Styling/Pages/Homepage/Spotlight.css";
import spotlightElement1 from "../../../Materials/SpotlightPictures/Spotlight1.png";
import spotlightElement2 from "../../../Materials/SpotlightPictures/Spotlight2.png";
import spotlightElement3 from "../../../Materials/SpotlightPictures/Spotlight3.png";
// Add more images as needed

const spotlightElements = [
  { id: "spotlight1", src: spotlightElement1, alt: "Spotlight 1" },
  { id: "spotlight2", src: spotlightElement2, alt: "Spotlight 2" },
  { id: "spotlight3", src: spotlightElement3, alt: "Spotlight 3" },
  // Add more elements as needed
];

const BrotherhoodSpotlight = () => {
  return (
    <div className="brotherhood-spotlight">
      <div className="spotlight-carousel">
        <Carousel>
          {spotlightElements.map((item) => (
            <Carousel.Item key={item.id}>
              <img className="d-block w-100" src={item.src} alt={item.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="spotlight-description-container">
        <div className="spotlight-text">
          <h2 id="title">YabBeeaasstt</h2>
          <p className="spotlight-description">
            A rising influencer, chef, and a true inspiration.
          </p>
          <p className="spotlight-details">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            repudiandae reiciendis perferendis rem ducimus quae iure debitis
            quibusdam beatae. At molestias rem rerum! Consequuntur illum eveniet
            labore dolore corporis incidunt?Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Rerum repudiandae reiciendis
            perferendis rem ducimus quae iure debitis quibusdam beatae. At
            molestias rem rerum! Consequuntur illum eveniet labore dolore
            corporis incidunt?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Rerum repudiandae reiciendis perferendis rem
            ducimus quae iure debitis quibusdam beatae. At molestias rem rerum!
            Consequuntur illum eveniet labore dolore corporis incidunt?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            repudiandae reiciendis perferendis rem ducimus quae iure debitis
            quibusdam beatae. At molestias rem rerum! Consequuntur illum eveniet
            labore dolore corporis incidunt?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrotherhoodSpotlight;
