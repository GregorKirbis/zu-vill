import type { Block } from "payload/types";
import richText from "../../fields/richText";

export const CardBlock: Block = {
  slug: "cardBlock",
  labels: {
    singular: "Card",
    plural: "Card",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Title",
    },
    {
      name: "icon",
      type: "select",
      options: [
        {
          label: "address",
          value: "ti-location-pin",
        },
        {
          label: "Mail",
          value: "ti-email",
        },
        {
          label: "Phone",
          value: "ti-mobile",
        },
      ],
      required: true,
    },
    richText(),
  ],
};
