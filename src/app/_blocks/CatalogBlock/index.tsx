import React from "react";
import { Page } from "../../../payload/payload-types";
import ProductLitWraper  from "./ProductLitWraper";
import ProductItem from "./ProductItem";
import { Url } from "next/dist/shared/lib/router/router.js";


type Props = Extract<Page["layout"][0], { blockType: "catalogBlock" }> & { id?: string, slug?: Url };

const reservedWords = ['c','s',]

const CatalogBlock: React.FC<Props> = ({ id, slug, ...catalog }) => {

  const isSingle = Array.isArray(slug) && slug.length>1 && !reservedWords.includes(slug[1])? true : false;


  return (
  (!isSingle ? <ProductLitWraper  {...catalog} slug={slug} /> : <ProductItem {...catalog}  slug={slug} /> )
);
};

export default CatalogBlock;
