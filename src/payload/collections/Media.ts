import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import type { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: path.resolve(__dirname, "../../../media"),
    formatOptions: {
      format: 'webp',
      options: {
        quality: 90,
        nearLossless: true,
      },
    },
    imageSizes: [
      {
        name: 'original',
        width: undefined,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'medium',
        width: 700,
        height: 500,
        position: 'centre',
      },
    ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "richText",
      editor: slateEditor({
        admin: {
          elements: ["link"],
        },
      }),
    },
  ],
};
