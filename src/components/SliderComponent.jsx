import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import wallpaper1 from '../assets/wallpaper1.jpg';
import wallpaper2 from '../assets/wallpaper2.jpg';
import wallpaper3 from '../assets/wallpaper3.jpg';
import wallpaper4 from '../assets/wallpaper4.jpg';

const SliderComponent = () => {
  const images = [
    wallpaper1, wallpaper2, wallpaper3, wallpaper4
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentImage, images.length]);

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-screen">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default SliderComponent;
