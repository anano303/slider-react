import "./Carousel.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./Images";
import left from "./left arrow.png";
import right from "./right arrow.png";

export default function Slider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });
  return (
    <div className="Carousel">
      <motion.div className="btns">
        <button>
          <img src={left} />
        </button>
        <button>
          <img src={right} />
        </button>
      </motion.div>
      <div className="header">
        <h1>საბავშვო ბაღი</h1>
      </div>
      <motion.div
        ref={carousel}
        className="carousel1"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div className="item" key={image.url}>
                <img src={image.url} />
                <span style={{ marginLeft: "20px" }}>{image.name}</span>
                <br />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
