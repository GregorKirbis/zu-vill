'use client';

import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import Modal from 'react-modal';
import { Media } from "../../../../payload/payload-types";
import { blob } from 'stream/consumers';

interface ProductGallerySliderProps {
  images: { image: Media }[];
}

const ProductGallerySlider: React.FC<ProductGallerySliderProps> = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    Modal.setAppElement('#app'); // Ensure this matches the ID in your HTML structure
  }, []);

  const openModal = (image: string) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const settings = {
    dots: false,
    infinite: images.length > 2,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div>
      <Slider {...settings} className="m-b5 primary btn-style-2" id="sync1">
        {images.map((item, index) => (
          <div key={item.image.url} className="item">
            <div className="mfp-gallery">
              <div className="dlab-box">
                <div className="dlab-thum-bx dlab-img-overlay1" style={{height:"500px", backgroundColor:"#f0f0f0"}} onClick={() => openModal(item.image.url)}>


                  <Image
                    src={item.image.url}
                    alt={`Image ${item.image.url}`}
                       layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='row'>
      {images.map((item, index) => (
        <div key={index} className="col-3 pb-2">
        <div style={{ height: "110px", width: "150px", overflow: "hidden", display: "block" }}>
          <Image
            onClick={() => openModal(item.image.url)}
            src={item.image.url}
            alt={`Image ${item.image.url}`}
            height={110}
            width={150}
            style={{ objectFit: 'cover', cursor: 'pointer', width: '100%', height: '100%' }} // Ensuring the image fully covers the container
          />
        </div>
      </div>
      ))};
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 0,
            border: 'none',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 100000, // Ensure the modal is on top
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100000, // Ensure the overlay is on top
          },
        }}
      >
        <div style={{ position: 'relative' }}>
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              zIndex: 100001, // Ensure the button is on top
            }}
          >
            &times;
          </button>
          <Image
            src={currentImage}
            alt="Enlarged Image"
            width={1000}
            height={800}
            onClick={closeModal}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </Modal>
    </div>
  );
}

export default ProductGallerySlider;
