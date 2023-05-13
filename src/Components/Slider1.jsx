import React, { useState } from "react";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider1.css";
import desktop from "./desktop.png";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import slider4 from "./slider4.jpg";
import slider5 from "./slider5.jpg";
import slider6 from "./slider6.jpg";

const slideImages = [
  { url: desktop },
  { url: slider2 },
  { url: slider3 },
  { url: slider4 },
  { url: slider5 },
  { url: slider6 },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "400px",
};

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="slide-container">
      <Slide
        autoplay={true}
        duration={3000}
        transitionDuration={1000}
        indicators={true}
        indicatorContainerProps={{
          style: { marginRight: "500px" },
        }}
        arrows={false}
        onChange={(oldIndex, newIndex) => setActiveIndex(newIndex)}
      >
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
