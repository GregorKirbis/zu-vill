import React from "react";
import { Page } from "../../../payload/payload-types";
import RichText from "../../_components/RichText";
import "./index.css";

type Props = Extract<Page["layout"][0], { blockType: "simpleText" }>;

const SimpleText: React.FC<Props & { id?: string }> = ({ title, richText }) => {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="simple-text-card">
              {title && <h2 className="title simple-text-title">{title}</h2>}
              <div className="dlab-separator bg-primary m-b20"></div>
              <div className="simple-text-body">
                <RichText content={richText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleText;
