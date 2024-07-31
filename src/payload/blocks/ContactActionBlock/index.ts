import { Block } from 'payload/types';

export const ContactActionBlock: Block = {
  slug: 'contactActionBlock',
  labels: {
    singular: 'Contact Action Block',
    plural: 'Contact Action Blocks',
  },
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media', // Assuming you have a media collection
      required: true,
      label: 'Background Image',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'contactNumber',
      type: 'text',
      required: true,
      label: 'Contact Number',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Assuming you have a media collection
      required: true,
      label: 'Image',
    },
  ],
};
