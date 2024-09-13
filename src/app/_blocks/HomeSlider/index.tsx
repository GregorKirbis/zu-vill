"use client";

import React, { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Image from "next/image";

import { Page } from "../../../payload/payload-types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../_css/slider-animations.css";
import "../../_css/homeslider.css";

type Props = Extract<Page["layout"][0], { blockType: "homeSlider" }>;

export const HomeSliderBlock: React.FC<Props & { id?: string }> = ({ slides }) => {
  const router = useRouter(); // Initialize the router for navigation
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (link: string) => {
    // Navigate to the specified link when a button is clicked
    if (link) {
      router.push(link);
    }
  };

  return (
    <Swiper
      className="home-slider2"
      spaceBetween={0}
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
        <SwiperSlide key={index} className="slider-content">
  <div className="image-wrapper">
    <Image
      src={slide.image?.url}
      alt={slide.title || 'Slide image'}
      layout="fill"
      objectFit="cover"
      priority={index === 0} // Load the first image with high priority
    />
  </div>
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
