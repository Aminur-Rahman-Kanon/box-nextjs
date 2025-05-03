'use client';

import React from 'react';
import styles from './mainCategory.module.css';
import Slider, { CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow:React.FC<CustomArrowProps>= (props) => {
  const { onClick, style, className } = props;

  return (
    <div className={styles.prevBtn} style={{...style}} onClick={onClick} />
  )
}


const NextArrow:React.FC<CustomArrowProps>= (props) => {
  const { onClick, style, className } = props;

  return (
    <div className={styles.nextBtn} style={{...style}} onClick={onClick} />
  )
}


const Carousel = ({
  slides
}:{ slides:React.ReactNode[] }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
          {slides}
      </Slider>
    </div>
  );
};

export default Carousel;
