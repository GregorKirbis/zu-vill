import React from "react";
import Link from "next/link";
import { Page } from "../../../payload/payload-types";

type Props = Extract<Page["layout"][0], { blockType: "servicesBlock" }>;

const ServicesBlock: React.FC<Props & { id?: string }> = ({ services }) => {
  return (
    <div className="section-full bg-white content-inner-2">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={`${0.3 * (index + 1)}s`}
            >
              <div className="icon-bx-wraper sr-iconbox style2">
                <div className="icon-lg m-b10">
                  <Link legacyBehavior href={service.link}>
                    <a className="icon-cell">
                      <i className={service.icon}></i>
                    </a>
                  </Link>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;
