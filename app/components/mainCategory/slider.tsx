'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './mainCategory.module.css';

interface CarouselProps {
  items: React.ReactNode[];
  itemsPerSlide?: number;
  autoPlayInterval?: number;
}

const Slider: React.FC<CarouselProps> = ({
  items,
  itemsPerSlide = 5,
  autoPlayInterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (autoPlayInterval > 0) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [autoPlayInterval]);

  const getVisibleItems = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;

    if (end <= items.length) {
      return items.slice(start, end);
    }

    // Wrap-around case
    return [...items.slice(start), ...items.slice(0, end - items.length)];
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.navButton} onClick={nextSlide}>›</button>
      <div className={styles.carouselTrack}>
        {getVisibleItems().map((item, index) => (
            <div key={index} className={styles.carouselItem}>
            {item}
          </div>
        ))}
      </div>
      <button className={styles.navButton} onClick={prevSlide}>‹</button>
    </div>
  );
};

export default Slider;
