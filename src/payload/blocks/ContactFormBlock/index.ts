// blocks/ContactFormBlock.js

import { Block } from 'payload/types';

const ContactFormBlock: Block    = {
  slug: 'contactFormBlock',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Naslov',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Opis',
    },
    {
      name: 'successMessage',
      type: 'text',
      required: true,
      label: 'Sporočilo ob uspešni oddaji',
    },
  ],
};

export default ContactFormBlock;
