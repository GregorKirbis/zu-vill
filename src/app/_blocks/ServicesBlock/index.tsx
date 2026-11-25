import React from "react";
import Link from "next/link";
import { Page } from "../../../payload/payload-types";

type Props = Extract<Page["layout"][0], { blockType: "servicesBlock" }>;

const ServicesBlock: React.FC<Props & { id?: string }> = ({ services }) => {
  return (
    <div className="section-full bg-white content-inner-2">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-6 d-flex wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={`${0.2 * (index + 1)}s`}
            >
              <div
                className="icon-bx-wraper sr-iconbox style2 w-100"
                style={{
                  borderRadius: 0,
                  border: "1px solid #ececec",
                  padding: "30px 24px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div className="icon-lg m-b15">
                  <Link legacyBehavior href={service.link || "/kontakt"}>
                    <a className="icon-cell">
                      <i className={service.icon}></i>
                    </a>
                  </Link>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte m-b10">
                    <Link legacyBehavior href={service.link || "/kontakt"}>
                      <a style={{ color: "inherit", textDecoration: "none" }}>{service.title}</a>
                    </Link>
                  </h4>
                  <p className="m-b0">{service.description}</p>
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
