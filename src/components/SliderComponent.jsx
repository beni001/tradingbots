import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import wallpaper1 from '../assets/wallpaper1.jpg';
import wallpaper2 from '../assets/wallpaper2.jpg';
import wallpaper3 from '../assets/wallpaper3.jpg';
import wallpaper4 from '../assets/wallpaper4.jpg';
import animatedImage1 from '../assets/IMG_1765.jpg';
import animatedImage2 from '../assets/IMG_1771.jpg';
import animatedImage3 from '../assets/IMG_1786.jpg';
import animatedImage4 from '../assets/IMG_2892.jpg';

const SliderComponent = () => {
  const mainImages = [
    wallpaper1, wallpaper2, wallpaper3, wallpaper4
  ];

  const animatedImages = [
    animatedImage1, animatedImage2, animatedImage3, animatedImage4
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % mainImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImage, mainImages.length]);

 // ... (previous code)

return (
  <div className="relative w-full h-96 md:h-144 lg:h-screen overflow-hidden">
    {/* Animated Images Div - Left Side */}
    <div className="absolute top-1/4 left-6 w-1/2 md:w-1/2 h-2/3 overflow-hidden z-10 rounded-lg flex flex-col items-center justify-center px-4 mt-4 md:mt-0">
      {animatedImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Animated Image ${index + 1}`}
          className={`w-full h-full object-cover absolute transition-opacity duration-400 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ display: index === currentImage ? 'block' : 'none' }}
        />
      ))}
    </div>

    {/* Text Div - Right Side */}
    <div className="absolute top-1/4 right-6 w-1/2 md:w-1/2 h-2/3 flex flex-col items-center justify-center text-white z-10 rounded-lg bg-black bg-opacity-50 mt-4 md:mt-0">
      <h1 className="text-4xl font-bold">Meet Nilote Kenya</h1>
    </div>

    {/* Main Images Div */}
    {mainImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Main Image ${index + 1}`}
        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
          index === currentImage ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ display: index === currentImage ? 'block' : 'none' }}
      />
    ))}
  </div>
);



};

export default SliderComponent;
