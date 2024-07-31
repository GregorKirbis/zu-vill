import { Block } from 'payload/types';
import richText from '../../fields/richText';

export const SimpleText: Block = {
  slug: 'simpleText',
  labels: {
    singular: 'Simple Text Block',
    plural: 'Simple Text Block',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    richText(),
  ],
};
