"use client";

import React, { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../_css/slider-animations.css";
import "../../_css/homeslider.css";

type Slide = {
  image: {
    url: string;
    alt?: string;
  };
  title: string;
  description: string;
  button: {
    title: string;
    link: string;
  }[];
};

type HomeSliderBlockProps = {
  slides: Slide[];
};

const HomeSliderBlock: React.FC<HomeSliderBlockProps> = ({ slides }) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (link: string) => {
    console.log(link);
  };

  return (
    <Swiper
      className="home-slider2"
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Pagination, Autoplay]}
      onBeforeInit={(swiper) => {
        // Assign navigation elements after swiper instance is initialized
        if (typeof swiper.params.navigation !== "boolean") {
          const navigation = swiper.params.navigation;
          if (navigation) {
            navigation.prevEl = navigationPrevRef.current;
            navigation.nextEl = navigationNextRef.current;
          }
        }
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slider-content" style={{ background: `url('${slide.image.url}') no-repeat center center` }}>
          <div className={`inner sliderStyle5`}>
            {slide.title && <h1 data-swiper-parallax="-500">{slide.title}</h1>}
            {slide.description && <p data-swiper-parallax="-1000">{slide.description}</p>}
            {slide.button.map((btn, btnIndex) => (
              <button key={btnIndex} data-swiper-parallax="-1500" className="site-button" onClick={() => handleButtonClick(btn.link)}>
                {btn.title}
              </button>
            ))}
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button" style={{ zIndex: 1 }}>
        <div className="swiper-button-prev previousButton" ref={navigationPrevRef}>
          <i className="las la-angle-left"></i>
        </div>
        <div className="swiper-button-next nextButton" ref={navigationNextRef}>
          <i className="las la-angle-right"></i>
        </div>
      </div>
    </Swiper>
  );
};

export default HomeSliderBlock;
