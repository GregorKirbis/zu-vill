import type { CollectionConfig } from "payload/types";

import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
import { CallToAction } from "../../blocks/CallToAction";
import { Content } from "../../blocks/Content";
import { MediaBlock } from "../../blocks/MediaBlock";
import { slugField } from "../../fields/slug";

export const Product: CollectionConfig = {
  slug: "product",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/projects/${doc?.slug}`)}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`;
    },
  },
  hooks: {},
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
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "layout",
      type: "blocks",
      required: true,
      blocks: [CallToAction, Content], // blocks: [CallToAction, Content, MediaBlock],
    },
    slugField(),
  ],
};
