'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './carousel.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

type Slide = {
  id: number;
  img: string;
};

const animations = {
  initial: { x: -300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 300, opacity: 0 },
  // {
  //   initial: { scale: 0.8, opacity: 0 },
  //   animate: { scale: 1, opacity: 1 },
  //   exit: { scale: 0.8, opacity: 0 },
  // }, // zoom
  // {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   exit: { opacity: 0 },
  // }, // fade
};

interface AnimatedCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export default function AnimatedCarousel({
  slides,
  autoPlayInterval = 7000,
}: AnimatedCarouselProps) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(next, autoPlayInterval);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={styles.carouselContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={animations.initial}
          animate={animations.animate}
          exit={animations.exit}
          transition={{ duration: 0.8 }}
          className={styles.slideWrapper}
        >
            <div className={styles.imgContainer}>
                <Image src={slides[index].img} alt='boxdelabonita' width={0} height={0} unoptimized quality={100} className={styles.img}/>
            </div>
          {/* {slides[index].img} */}
        </motion.div>
      </AnimatePresence>

      <button className={`${styles.navButton} ${styles.leftButton}`} onClick={prev}>
        <ChevronLeft size={'3rem'}/>
      </button>
      <button className={`${styles.navButton} ${styles.rightButton}`} onClick={next}>
        <ChevronRight size={'3rem'}/>
      </button>
    </div>
  );
}
