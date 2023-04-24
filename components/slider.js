import images from "../exports/images";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearTimeout(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="slider-container" style={{ position: "relative" }}>
      <div className="slider">
        {images.map((image, index) => (
          <motion.div
            key={index}
            src={image}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              transition: { duration: 1 },
            }}
          >
            {image}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
