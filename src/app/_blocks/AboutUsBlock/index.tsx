"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { Page } from "../../../payload/payload-types";


type Props = Extract<Page["layout"][0], { blockType: "aboutUsBlock" }>;

const AboutUsBlock: React.FC<Props & { id?: string } > = ({
  image,
  yearsExperience,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  const router = useRouter();

  const handleButtonClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="content-block">
      <div className="section-full content-inner const-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
              <div className="radius-sm m-b30 img-ho1">
                <img src={image?.url} alt={image?.alt} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">
              <div className="content-bx1">
                <div className="about-year">
                  <span>{yearsExperience}</span>
                  <p>Let<br />izkušenj<br /></p>
                </div>
                <div className="section-head style2">
                  <h2 className="title">{title}</h2>
                  <p>{description}</p>
                </div>
                <button className="site-button black m-b10 btnhover20" onClick={() => handleButtonClick(buttonLink)}>
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBlock;
