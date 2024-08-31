"use client"

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

interface CarouselProps {
  imageUrls: string[]; // Updated prop name
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  imageUrls, // Updated prop name
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  }, [imageUrls.length]);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  }, [imageUrls.length]);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [nextSlide, autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Fixed string interpolation
      >
        {imageUrls.map((image, index) => ( // Updated prop name
          <div key={index} className="w-full h-full flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index}`} // Fixed alt text formatting
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imageUrls.map((_, index) => ( // Updated prop name
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
