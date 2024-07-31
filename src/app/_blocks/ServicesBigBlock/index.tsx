import React from "react";
import Link from "next/link";
import { Page } from "../../../payload/payload-types";

type Props = Extract<Page["layout"][0], { blockType: "servicesBigBlock" }>;

const ServicesBigBlock: React.FC<Props & { id?: string }> = ({ title, description, services }) => {
  return (

    <div className="">
      <div className="section-head text-black">
        <h2 className="title">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="section-content row">

        {services.map((service, index) => {
          return (
            <div key={index} className="col-lg-6 col-md-6 service-box style3">
              <div className="icon-bx-wraper" data-name={`0${index + 1}`}>
                <div className="icon-lg">
                  <i className={service.icon}></i>
                </div>
                <div className="icon-content">
                  <h2 className="dlab-tilte">{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          );
        })};


      </div>
    </div>
  );
};

export default ServicesBigBlock;
