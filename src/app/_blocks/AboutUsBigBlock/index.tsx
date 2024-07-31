"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { Page } from "../../../payload/payload-types";

type Props = Extract<Page["layout"][0], { blockType: "aboutUsBigBlock" }>;

const AboutUsBigBlock : React.FC<Props & { id?: string } > = ({
  image,
  smallTitle,
  title,
  caption,
  paragraph1,
  paragraph2,
}) => {
  const router = useRouter();

  const handleButtonClick = (link: string) => {
    router.push(link);
  };

  return (  <div className="section-full content-inner bg-white">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 m-b30">
                <div className="our-story">
                    <span>{smallTitle}</span>
                    <h2 className="title">{title}<br/><span className="text-primary">{caption}</span></h2>
                    <h4 className="title">{paragraph1}</h4>
                    <p>{paragraph2}</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 m-b30 our-story-thum">
              <img src={image?.url} alt={image?.alt} />
            </div>
        </div>
    </div>
</div>);
};

export default AboutUsBigBlock;
