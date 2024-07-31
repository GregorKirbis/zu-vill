import React from 'react';
import type { Media as MediaType } from "../../../payload/payload-types";
import Breadcrumb from './Breadcrumb';  // Ensure the correct import path

type PageProps = {
  title: string;
  url: string;
};

const Hero: React.FC<{ image: MediaType; page: PageProps }> = ({ image, page }) => {
  if (!image || !image.filename) {
    console.error("Media or media filename is missing.");
    return null; // or you can return a fallback UI
  }

  return (
      <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_SERVER_URL}/media/${image.filename})` }}>
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">{page.title}</h1>
            <Breadcrumb page={page} />
          </div>
        </div>
      </div>
  );
};

export default Hero;
