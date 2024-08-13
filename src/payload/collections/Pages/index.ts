import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
import { Content } from "../../blocks/Content";
import { HomeSlider } from "../../blocks/HomeSlider";
import { MediaBlock } from "../../blocks/MediaBlock";
import { ServicesBlock } from "../../blocks/ServicesBlock";
import { AboutUsBlock } from "../../blocks/AboutUsBlock";
import { ContactActionBlock } from "../../blocks/ContactActionBlock";
import { slugField } from "../../fields/slug";
import { revalidatePage } from "./hooks/revalidatePage";
import { CatalogBlock } from "../../blocks/CatalogBlock";

import type { CollectionConfig } from "payload/types";
import ContactFormBlock from "../../blocks/ContactFormBlock";
import { LayoutBlock } from "../../blocks/LayoutBlock";
import { CardBlock } from "../../blocks/CardBlock";
import { SmallCardBlock } from "../../blocks/SmallCardBlock";
import { AboutUsBigBlock } from "../../blocks/AboutUsBigBlock";
import { ValuesBlock } from "../../blocks/ValuesBlock";
import { SimpleText } from "../../blocks/SimpleText";
import { ServicesBigBlock } from "../../blocks/ServicesBigBlock";
import { LogoSliderBlock } from "../../blocks/LogoSliderBlock";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "parent", "updatedAt"],
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== "home" ? doc.slug : ""}`)}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`;
    },
  },
  hooks: {
    afterChange: [revalidatePage],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              required: true,
              blocks: [HomeSlider, SimpleText, Content, MediaBlock, AboutUsBlock, AboutUsBigBlock, ContactActionBlock, ServicesBlock, ServicesBigBlock, CatalogBlock, ContactFormBlock, LayoutBlock, CardBlock, SmallCardBlock, ValuesBlock, LogoSliderBlock],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
};
