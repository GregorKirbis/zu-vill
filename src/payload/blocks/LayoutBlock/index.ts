import { Block } from "payload/types";
import ContactFormBlock from "../ContactFormBlock";
import { CardBlock } from "../CardBlock";
import { ServicesBigBlock } from "../ServicesBigBlock";

export const LayoutBlock: Block = {
  slug: "layoutBlock",
  fields: [
    {
      name: "columnWidth",
      type: "select",
      options: [
        {
          label: "1/3",
          value: "1/3",
        },
        {
          label: "1/2",
          value: "1/2",
        },
        {
          label: "1",
          value: "1",
        },
      ],
      required: true,
    },
    {
      name: "column",
      label: "Kolone",
      type: "array",
      maxRows: 2,
      fields: [
        {
          name: "column",
          label: "Kolona",
          type: "blocks",
          required: false,
          blocks: [ContactFormBlock, CardBlock, ServicesBigBlock],
        },
      ]
    }
  ],
};
