import type { GlobalConfig } from "payload/types";

import link from "../fields/link";

export const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "navItems",
      type: "array",
      maxRows: 6,
      label: "Glavni meni",
      labels: {
        singular: "Element menija",
        plural: "Elementi menija",
      },
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: "navItems2",
      type: "array",
      maxRows: 6,
      label: "Top meni",
      labels: {
        singular: "Element menija",
        plural: "Elementi menija",
      },
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: "navItems3",
      type: "array",
      maxRows: 6,
      label: "Contact meni",
      labels: {
        singular: "Element menija",
        plural: "Elementi menija",
      },
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
};
