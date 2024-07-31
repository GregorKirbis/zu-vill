import React from "react";

import { Page } from "../../../payload/payload-types";
import RichText from "../../_components/RichText";


type Props = Extract<Page["layout"][0], { blockType: "smallCardBlock" }>;

export const SmallCardBlock: React.FC<Props & { id?: string; }> = ({ cards }) => {
  const cardsArray = Array.isArray(cards) ? cards : [];

  return (

    <div className="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar site-footer">
      <div className="container">
        <div className="row">
          {cardsArray.map((card, index) => {
            const { title, cssClass, richText } = card;
            return (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm"><i className={cssClass}></i></span>
                      {title}
                    </h5>
                    <div className="op7"><RichText content={richText}/></div>
                  </div>
                </div>
              </div>
            );
          })
          }
        </div>
      </div>
    </div>
  )
};
