"use client";

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const images = [
    "/images/hat1.jpg",
    "/images/Black_Bucket_Hat.png",
    "/images/New_York_Yankees_MLB_Classic_Baseball_Hat.png",
    "/images/Couple_Heart_Embroidery_Bucket_Hat.png",
    "/images/Two_Tone_Plaid_Pattern_Bucket_Hat.png",
    "/images/another_hat.jpg",
    "/images/yet_another_hat.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [nextSlide, autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
      <div className={`absolute inset-0 flex transition-transform duration-700 ease-in-out transform-carousel-${currentIndex}`}>
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        title="Previous slide"
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        title="Next slide"
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            title={`Go to slide ${index + 1}`}
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
