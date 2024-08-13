import React, { Fragment } from "react";
import { Page } from "../../../payload/payload-types.js";
import { ArchiveBlock } from "../../_blocks/ArchiveBlock";
import { CallToActionBlock } from "../../_blocks/CallToAction";
import { ContentBlock } from "../../_blocks/Content";
import { HomeSliderBlock } from "../../_blocks/HomeSlider";
import { MediaBlock } from "../../_blocks/MediaBlock";
import { RelatedPosts, type RelatedPostsProps } from "../../_blocks/RelatedPosts";
import { toKebabCase } from "../../_utilities/toKebabCase";
import { BackgroundColor } from "../BackgroundColor";
import { VerticalPadding, VerticalPaddingOptions } from "../VerticalPadding";
import AboutUsBlock from "../../_blocks/AboutUsBlock";
import ContactActionBlock from "../../_blocks/ContactActionBlock";
import ServicesBlock from "../../_blocks/ServicesBlock";
import CatalogBlock  from "../../_blocks/CatalogBlock";
import ContactFormBlock from "../../_blocks/ContactFormBlock";
import { Url } from "next/dist/shared/lib/router/router.js";
import { LayoutBlock }  from "../../_blocks/LayoutBlock";
import { CardBlock } from "../../_blocks/CardBlock";
import { SmallCardBlock } from "../../_blocks/SmallCardBlock";
import  AboutUsBigBlock  from "../../_blocks/AboutUsBigBlock";
import ValuesBlock from "../../_blocks/ValuesBlock";
import SimpleText from "../../_blocks/SimpleText";
import ServicesBigBlock from "../../_blocks/ServicesBigBlock";
import { LogoSliderBlock } from "../../_blocks/LogoSliderBlock";

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
  contactFormBlock: ContactFormBlock,
  layoutBlock: LayoutBlock,
  cardBlock: CardBlock,
  smallCardBlock: SmallCardBlock,
  aboutUsBigBlock: AboutUsBigBlock,
  valuesBlock: ValuesBlock,
  simpleText: SimpleText,
  servicesBigBlock: ServicesBigBlock,
  logoSliderBlock:LogoSliderBlock,
};


export const Blocks: React.FC<{
  blocks: Page["layout"][0];
  disableTopPadding?: boolean;
  slug?: Url;
}> = (props) => {
  const { disableTopPadding, blocks, slug } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <div className="content-block">
        {blocks.map((block, index) => {
          const { blockName, blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                    <Block key={index} id={toKebabCase(blockName)} {...block} slug = {slug} />
              );
            }
          }
          return null;
        })}
      </div>
    );
  }

  return null;
};
