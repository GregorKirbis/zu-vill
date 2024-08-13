"use client";

import React from "react";

import { Page } from "../../../payload/payload-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">

        <Slider {...settings} className="testimonial-six dots-long d-primary btn-style-1">
          {slides.map((item, id) => (
            <div key={id} className="item">
              <div className="testimonial-8">
                <div className="testimonial-detail clearfix">
                  <div className=""><Image src={(item.image as Media).url} width={160} height={80} alt={(item.image as Media).alt}/></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
