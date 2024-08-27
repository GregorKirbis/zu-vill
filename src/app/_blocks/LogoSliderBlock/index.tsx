"use client";

import React from "react";

import { Page } from "../../../payload/payload-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import "./LogoSliderBlock.css"; // Import the custom CSS

type Props = Extract<Page["layout"][0], { blockType: "logoSliderBlock" }>;

type Media = {
  url: string;
  alt: string;
};

export const LogoSliderBlock: React.FC<Props & { id?: string }> = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <div className="section-full content-inner bg-gray">

      <div className="container logo-slider-container">
      <div className="logo-slider-fade-left"></div> {/* Left fade */}
      <div className="logo-slider-fade-right"></div> {/* Right fade */}
        <Slider {...settings} className="testimonial-six dots-long d-primary btn-style-1">
          {slides.map((item, id) => (
            <div key={id} className="item logo-slider-item">
              <div className="testimonial-8">
                <div className="testimonial-detail clearfix logo-slider-content">
                  <div>
                    <Image
                      src={(item.image as Media).url}
                      width={160}
                      height={80}
                      alt={(item.image as Media).alt}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
