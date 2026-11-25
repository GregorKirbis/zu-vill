import { Block } from "payload/types";

export const VideoBlock: Block = {
  slug: "videoBlock",
  labels: {
    singular: "YouTube Video Block",
    plural: "YouTube Video Blocks",
  },
  fields: [
    {
      name: "smallTitle",
      type: "text",
      required: false,
      label: "Small Title",
    },
    {
      name: "title",
      type: "text",
      required: false,
      label: "Title",
    },
    {
      name: "description",
      type: "textarea",
      required: false,
      label: "Description",
    },
    {
      name: "youtubeUrl",
      type: "text",
      required: true,
      label: "YouTube URL or Video ID",
    },
  ],
};
