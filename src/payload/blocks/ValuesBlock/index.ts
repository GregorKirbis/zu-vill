import { Block } from 'payload/types';

export const ValuesBlock: Block = {
  slug: 'valuesBlock',
  labels: {
    singular: 'Values Block',
    plural: 'Values Blocks',
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
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'values',
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
