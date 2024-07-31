import type { GlobalConfig } from "payload/types";

import link from "../fields/link";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "navItems4",
      type: "array",
      maxRows: 6,
      label: "Meni",
      labels: {
        singular: "Element",
        plural: "Elementi",
      },
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: "navItems5",
      type: "array",
      maxRows: 6,
      label: "Linki",
      labels: {
        singular: "Element",
        plural: "Elementi",
      },
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: "info",
      type: "array",
      maxRows: 6,
      label: "Linki",
      labels: {
        singular: "Element",
        plural: "Elementi",
      },
      fields: [
        {
          name:"ClassName",
          label:"Class Name",
          type:"text"
        },
        {
          name:"label",
          label:"naslov",
          type:"text"
        },
        {
          name:"value",
          label:"Text",
          type:"text"
        },

      ],
    },
  ],
};

