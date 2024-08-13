// collections/Pages.js
import { Block } from 'payload/types';


export const CatalogBlock: Block = {
  slug: 'catalogBlock',
  labels: {
    singular: 'Catalog Block',
    plural: 'Catalog Blocks',
  },
  fields: [
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: false,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Najem',
          value: 'najem',
        },
        {
          label: 'Prodaja',
          value: 'prodaja',
        },
        {
          label: 'Oboje',
          value: 'oboje',
        },
      ],
      required: true,
    },
  ],
};

