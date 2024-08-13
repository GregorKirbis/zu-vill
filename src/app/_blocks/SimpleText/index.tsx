import React from "react";
import { Page } from "../../../payload/payload-types";
import RichText from "../../_components/RichText";


type Props = Extract<Page["layout"][0], { blockType: "simpleText" }>;

const SimpleText: React.FC<Props & { id?: string }> = ({ title, richText}) => {
  return (
    <div className={`section-full content-inner`}>
      <div className="container">
        <div className="row">
      <div className="col-lg-12">
          <div className=" clearfix"><h1 className="title">{title}</h1></div>
          <div className="dlab-separator bg-primary"></div>
          <div><RichText content={richText}/></div>

      </div>
    </div>
</div>
    </div>
  );
};

export default SimpleText;
