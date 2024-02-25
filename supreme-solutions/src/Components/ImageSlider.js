// ImageSlider.js
import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Adjust the delay (in milliseconds) based on your requirement

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images]); // Re-run effect when images change

  return (
    <div className="image-container">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
    </div>
  );
};

export default ImageSlider;
