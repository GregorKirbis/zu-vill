import React from "react";
import { Page } from "../../../../payload/payload-types";
import ProductList from "../ProductList";
import { Url } from "next/dist/shared/lib/router/router.js";
import Sidebar from "../Sidebar";


type Props = Extract<Page["layout"][0], { blockType: "catalogBlock" }> & { id?: string, slug?: Url };

const ProductLitWraper: React.FC<Props> = ({ id, slug, ...catalog }) => {

  let baseSlug = Array.isArray(slug) ? slug[0] : slug;

  return (
    <div className="content-area">
      <div className="container">
        <div className="row">
          <Sidebar {...catalog}  slug={baseSlug} />
          <ProductList  {...catalog} slug={slug} />;

        </div>
      </div>
    </div>
  );
};

export default ProductLitWraper;
