import { Block } from 'payload/types';

export const ServicesBigBlock: Block = {
  slug: 'servicesBigBlock',
  labels: {
    singular: 'Services Big Block',
    plural: 'Services Big Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
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
      ],
    },
  ],
};
