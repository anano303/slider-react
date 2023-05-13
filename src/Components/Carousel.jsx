import "./Carousel.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./Images";
import left from "./left arrow.png";
import right from "./right arrow.png";

export default function Carousel(props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });
  const scrollRef = useRef(null);

  return (
    <div className="Carousel">
      <div
        className="header"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <h1>{props.headerText}</h1>
      </div>

      <motion.div
        ref={scrollRef}
        className="carousel1"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div className="btns">
          <button
            onClick={() => {
              scrollRef.current.scrollLeft -= 100;
            }}
          >
            <img src={left} />
          </button>
          <button
            onClick={() => {
              scrollRef.current.scrollLeft += 100;
            }}
          >
            <img src={right} />
          </button>
        </motion.div>
        <motion.div
          ref={carousel}
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
