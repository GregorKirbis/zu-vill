import { Block } from "payload/types";

export const AboutUsBigBlock: Block = {
  slug: 'aboutUsBigBlock',
  labels: {
    singular: 'About Us Big Block',
    plural: 'About Us Big Blocks',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Assuming you have a media collection
      required: true,
      label: 'Image',
    },
    {
      name: 'smallTitle',
      type: 'text',
      required: true,
      label: 'Small title',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Main Title',
    },
    {
      name: 'caption',
      type: 'text',
      required: true,
      label: 'Caption',
    },
    {
      name: 'paragraph1',
      type: 'textarea',
      required: true,
      label: 'First paragraph',
    },
    {
      name: 'paragraph2',
      type: 'textarea',
      required: true,
      label: 'Second paragraph',
    },
  ],
};
