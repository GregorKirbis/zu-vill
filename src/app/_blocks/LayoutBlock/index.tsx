import React, { Fragment } from "react";

import { Page } from "../../../payload/payload-types.js";
import { ArchiveBlock } from "../../_blocks/ArchiveBlock";
import { CallToActionBlock } from "../../_blocks/CallToAction";
import { CommentsBlock, type CommentsBlockProps } from "../../_blocks/Comments/index";
import { ContentBlock } from "../../_blocks/Content";
import { HomeSliderBlock } from "../../_blocks/HomeSlider";
import { MediaBlock } from "../../_blocks/MediaBlock";
import { RelatedPosts, type RelatedPostsProps } from "../../_blocks/RelatedPosts";
import { toKebabCase } from "../../_utilities/toKebabCase";
import AboutUsBlock from "../../_blocks/AboutUsBlock";
import ContactActionBlock from "../../_blocks/ContactActionBlock";
import ServicesBlock from "../../_blocks/ServicesBlock";
import CatalogBlock from "../../_blocks/CatalogBlock";
import ContactFormBlock from "../../_blocks/ContactFormBlock";
import { CardBlock } from "../CardBlock";
import  ServicesBigBlock  from "..//ServicesBigBlock";

const blockComponents = {
  catalogBlock: CatalogBlock,
  servicesBlock: ServicesBlock,
  contactActionBlock: ContactActionBlock,
  aboutUsBlock: AboutUsBlock,
  homeSlider: HomeSliderBlock,
  cta: CallToActionBlock,
  content: ContentBlock,
  mediaBlock: MediaBlock,
  archive: ArchiveBlock,
  relatedPosts: RelatedPosts,
  comments: CommentsBlock,
  contactFormBlock: ContactFormBlock,
  cardBlock: CardBlock,
  servicesBigBlock: ServicesBigBlock,
};

type Props = Extract<Page["layout"][0], { blockType: "layoutBlock" }>;

export const LayoutBlock: React.FC<Props & { id?: string; }> = (props) => {


  const { blockType, column } = props;
  const columnArray = Array.isArray(column) ? column : [];

  console.log(columnArray.column);

  return (
    <div className="section-full content-inner contact-page-8 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">

            <div className="row">


              {columnArray[0].column.map((block, index) => {
                const { blockName, blockType } = block;

                if (blockType && blockType in blockComponents) {
                  const Block = blockComponents[blockType];

                  if (Block) {
                    return (
                      <Block id={toKebabCase(blockName)} {...block} />
                    );
                  }
                }
                return null;
              })}

            </div>
          </div>

          <div className="col-lg-8 col-md-12 m-b30">
            {columnArray[1].column.map((block, index) => {
              const { blockName, blockType } = block;

              if (blockType && blockType in blockComponents) {
                const Block = blockComponents[blockType];

                if (Block) {
                  return (
                    <Block id={toKebabCase(blockName)} {...block} />
                  );
                }
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>

  );
};
