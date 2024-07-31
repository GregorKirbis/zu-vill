import { Block } from "payload/types";
import linkGroup from "../../fields/linkGroup";

export const HomeSlider: Block = {
  slug: "homeSlider",
  labels: {
    singular: "Home Slider",
    plural: "Home Sliders",
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
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Description",
        },
        {
          name: "button",
          type: "array",
          label: "Buttons",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              label: "Button Title",
            },
            {
              name: "link",
              type: "text",
              required: true,
              label: "Button Link",
            },
          ],
        },
      ],
    },
  ],
};
