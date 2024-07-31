import { Block } from "payload/types";

export const AboutUsBlock: Block = {
  slug: 'aboutUsBlock',
  labels: {
    singular: 'About Us Block',
    plural: 'About Us Blocks',
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
      name: 'yearsExperience',
      type: 'number',
      required: true,
      label: 'Years of Experience',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      label: 'Button Text',
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
      label: 'Button Link',
    },
  ],
};
