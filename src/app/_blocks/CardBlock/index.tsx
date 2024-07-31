import React from "react";

import { Page } from "../../../payload/payload-types";
import { Gutter } from "../../_components/Gutter";
import { CMSLink } from "../../_components/Link";
import RichText from "../../_components/RichText";
import { VerticalPadding } from "../../_components/VerticalPadding";

type Props = Extract<Page["layout"][0], { blockType: "cardBlock" }>;

export const CardBlock: React.FC<Props & { id?: string; }> = ({ title, icon, richText }) => {
  return (<>
    <div className="col-lg-12 col-md-12 m-b30">
      <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
        <div className="icon-content">
          <h5 className="dlab-tilte">
            <span className="icon-sm text-primary"><i className={icon.replace(/_/g, '-')}></i></span>
            {title}
          </h5>
          <div style={{paddingLeft:'40px'}}><RichText content={richText}/></div>
        </div>
      </div>
    </div>
    </>
  );
};
