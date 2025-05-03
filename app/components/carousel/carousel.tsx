'use client';

import React, { useCallback, useEffect, useState } from 'react';
import styles from './carousel.module.css';
import type { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface EmblaCarouselProps {
  slides: string[]
}

const Carousel:React.FC<EmblaCarouselProps> = ({ slides }) => {

  const [ emblaRef, emblaApi ] = useEmblaCarousel({loop: true}, [
    Autoplay({ delay: 3000 })
  ]);
  const [ embla, setEmbla ] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (emblaApi){
      setEmbla(emblaApi);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    embla?.scrollNext();
  }, [embla]);

  const scrollPrev = useCallback(() => {
    embla?.scrollPrev();
  }, [embla]);

  
  return (
    <div className={styles.embla}>
      <div className={styles.emblaViewPort} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((src, index) => (
            <div className={styles.emblaSlide} key={index}>
              <img className={styles.emblaSlideImage} src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollPrev} className={styles.btn}>‹</button>
      <button onClick={scrollNext} className={styles.btn}>›</button>
      {/* <div className={styles.emblaButtons}>
      </div> */}
    </div>
  );
}

export default Carousel
