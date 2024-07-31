import type { CollectionConfig } from "payload/types";



export const Requests: CollectionConfig = {
  slug: 'requests',
  labels: {
    singular: 'Povraševanja',
    plural: 'Povpraševanje',
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
      label: 'Ime',
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      label: 'Priimek',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Telefon',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Sporočilo',
    },
    {
      name: 'productLink',
      type: 'text',
      required: false,
      label: 'Produkt',
    },
  ],
};
