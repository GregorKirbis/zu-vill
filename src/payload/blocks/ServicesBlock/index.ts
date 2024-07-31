import { Block } from 'payload/types';

export const ServicesBlock: Block = {
  slug: 'servicesBlock',
  labels: {
    singular: 'Services Block',
    plural: 'Services Blocks',
  },
  fields: [
    {
      name: 'services',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          label: 'Icon Class',
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
          name: 'link',
          type: 'text',
          required: true,
          label: 'Link',
        },
      ],
    },
  ],
};
