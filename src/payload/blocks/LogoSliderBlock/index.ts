import { Block } from "payload/types";

export const LogoSliderBlock: Block = {
  slug: "logoSliderBlock",
  labels: {
    singular: "Logo",
    plural: "Logos",
  },
  fields: [
    {
      name: "slides",
      type: "array",
      required: true,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media", // Assuming you have a media collection
          required: true,
          label: "Image",
        }
      ],
    },
  ],
};
