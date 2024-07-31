import React from "react";
import Link from "next/link";
import { Page } from "../../../payload/payload-types";

type Props = Extract<Page["layout"][0], { blockType: "valuesBlock" }>;

const ValuesBlock: React.FC<Props & { id?: string }> = ({ values, image, title }) => {

  const valuesArray = Array.isArray(values) ? values : [];
  console.log(image);
  return (
    <div className="section-full box-about-list">
      <div className="row spno">
        <div className="col-lg-6 col-md-12">
        <img src={image?.url} alt={image?.alt} className="img-cover" />
        </div>
        <div className="col-lg-6 col-md-12 bg-primary">
          <div className="max-w700 m-auto p-tb50 p-lr20">
            <div className="text-white">
              <h2>{title}</h2>
            </div>
            {valuesArray.map((value, index) => (

              <div className="icon-bx-wraper m-b30 left" key={index}>
                <div className="icon-md">
                  <div className="icon-cell text-white">
                    <i className="flaticon-factory"></i>
                  </div>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesBlock;
