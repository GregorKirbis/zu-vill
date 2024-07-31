'use client';

import React from 'react';
import Slider from "react-slick";
import Image from 'next/image'; // Import the Next.js Image component
import { Media } from "../../../../payload/payload-types";



// Define the props type
interface ProductGallerySliderProps {
  images: { image: Media }[];
}

const ProductGallerySlider: React.FC<ProductGallerySliderProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  }

  return (
    <Slider {...settings} className="m-b5 primary btn-style-2" id="sync1">
      {images.map((item, index) => (
        <div key={index} className="item">
          <div className="mfp-gallery">
            <div className="dlab-box">
              <div className="dlab-thum-bx dlab-img-overlay1">
                <Image
                  src={item.image.url}
                  alt={`Image ${item.image.url}`}
                  width={700}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default ProductGallerySlider;
