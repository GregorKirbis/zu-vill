import React from "react";
import Image from 'next/image';
import { Page } from "../../../payload/payload-types";

type Props = Extract<Page["layout"][0], { blockType: "contactActionBlock" }>;

const ContactActionBlock: React.FC<Props & { id?: string }> = ({
  backgroundImage,
  title,
  contactNumber,
  description,
  image,
}) => {
  return (
    <div
      className={`section-full bg-img-fix content-inner-4 overlay-black-dark contact-action style2`}
      style={{
        backgroundImage: `url(${backgroundImage.url})`,
        backgroundSize: 'cover',  // Ensures the image covers the container
        backgroundPosition: 'center',  // Centers the background image
      }}
    >
      <div className="container">
        <div className="row relative">
          <div className="col-md-12 col-lg-8 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="contact-no-area">
              <h2 className="title">{title}</h2>
              <div className="contact-no">
                <div className="contact-left">
                  <h3 className="no no-break">
                    <i className="sl-call-in"></i>
                    {contactNumber}
                  </h3>
                </div>
                <div className="contact-right">{description}</div>
              </div>
            </div>
          </div>
          <div
            className="col-md-12 col-lg-4 contact-img-bx wow fadeInRight relative"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <Image
              src={image?.url}
              alt={image?.alt || 'Servis viličarjev'}
              width={500}  // Set appropriate width
              height={300} // Set appropriate height
              objectFit="cover" // Adjust if needed
              loading="lazy" // Lazy loading (default behavior)
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactActionBlock;
