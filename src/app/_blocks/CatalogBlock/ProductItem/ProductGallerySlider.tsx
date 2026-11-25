'use client';

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Modal from "react-modal";
import { Media } from "../../../../payload/payload-types";

interface ProductGallerySliderProps {
  images: { image: Media }[];
}

const ProductGallerySlider: React.FC<ProductGallerySliderProps> = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    Modal.setAppElement("#app");
  }, []);

  const validImages = (images || []).filter((item) => item?.image?.url);

  const openModal = (image: string) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);
    sliderRef.current?.slickGoTo(index);
  };

  const settings = {
    dots: false,
    infinite: validImages.length > 1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (_current: number, next: number) => setActiveIndex(next),
  };

  if (validImages.length === 0) {
    return (
      <div className="product-gallery-main d-flex align-items-center justify-content-center">
        <span style={{ color: "#888" }}>Ni fotografij</span>
      </div>
    );
  }

  return (
    <div>
      <Slider
        ref={sliderRef}
        {...settings}
        className="m-b5 primary btn-style-2"
        id="sync1"
      >
        {validImages.map((item, index) => (
          <div key={item.image.url || index} className="item">
            <div
              className="product-gallery-main"
              onClick={() => openModal(item.image.url)}
            >
              <Image
                src={item.image.url}
                alt={item.image.alt || `Slika ${index + 1}`}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>
        ))}
      </Slider>

      {validImages.length > 1 && (
        <div className="product-gallery-thumbs">
          {validImages.map((item, index) => (
            <button
              type="button"
              key={item.image.url || index}
              className={`product-gallery-thumb ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleThumbClick(index)}
              aria-label={`Prikaži sliko ${index + 1}`}
            >
              <Image
                src={item.image.url}
                alt={item.image.alt || `Predogled ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </button>
          ))}
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Povečana fotografija"
        style={{
          content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            padding: 0,
            border: "none",
            borderRadius: 0,
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: 100000,
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100000,
          },
        }}
      >
        <div style={{ position: "relative" }}>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Zapri"
            style={{
              position: "absolute",
              top: "10px",
              right: "14px",
              background: "rgba(0,0,0,0.6)",
              border: "none",
              color: "white",
              fontSize: "26px",
              lineHeight: 1,
              padding: "4px 10px",
              cursor: "pointer",
              zIndex: 100001,
            }}
          >
            &times;
          </button>
          {currentImage && (
            <Image
              src={currentImage}
              alt="Povečana fotografija"
              width={1000}
              height={800}
              onClick={closeModal}
              style={{ cursor: "pointer", objectFit: "contain", maxHeight: "88vh", width: "auto" }}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ProductGallerySlider;
