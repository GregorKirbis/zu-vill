import type { Block } from "payload/types";
import richText from "../../fields/richText";

export const SmallCardBlock: Block = {
  slug: "smallCardBlock",
  labels: {
    singular: "Small Card",
    plural: "Small Card",
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      required: true,
      fields: [

        {
          name: "title",
          type: "text",
          required: true,
          label: "Title",
        },
        {
          name: "cssClass",
          type: "text",
          required: true,
          label: "Class",
        },
        richText(),
      ],
    },
  ],
};
