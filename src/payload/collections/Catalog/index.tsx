
import React from 'react';
import type { CollectionConfig } from "payload/types";

import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
import { slugField } from "../../fields/slug";
import { NumberField } from '@nouance/payload-better-fields-plugin'
import AutocompleteInput from '../../components/AutocompleteInput';
import FormattedNumberField from '../../components/FormattedNumberField';
import { slateEditor } from '@payloadcms/richtext-slate';


const predefinedProperties = [
  { label: 'Color', value: 'color' },
  { label: 'Size', value: 'size' },
  { label: 'Weight', value: 'weight' },
  // Add more predefined properties here
];

export const Catalog: CollectionConfig = {
  slug: "catalog",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== "home" ? doc.slug : ""}`)}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`;
    },
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    /*{
      name: 'image',
      label: 'Slika',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },*/
    {
      name: 'images',
      label: 'Slike',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Slika',
          type: 'upload',
          relationTo: 'media', // Make sure 'media' is configured for image uploads
        },
      ],
      admin: {
        description: 'Upload images related to the product.',
      },
    },
    {
      name: 'title',
      label: 'Ime',
      type: 'text',
      required: true,
    },
    {
      name: 'year',
      label: 'Letnik',
      type: 'number',
      required: true,
    },
    /*{
      name: 'price',
      label: 'Cena',
      type: 'number',
      required: true,
      admin: {
        components: {
          Field: FormattedNumberField,
        },
      },
    },*/
    ...NumberField(
      {
        name: 'price',
        label: 'Cena',
        required: true,
      },
      {
        prefix: '',
        suffix: ' €',
        thousandSeparator: ' ',
        decimalSeparator: '.',
        decimalScale: 2,
        fixedDecimalScale: true,
      },
    ),
    {
      name: 'ddv',
      type: 'checkbox',
      label: '+ DDV',
      defaultValue: true,
    },
    {
      name: 'additionalProperties',
      label: 'Lastnosti',
      type: 'array',
      fields: [
        {
          name: 'property',
          label: 'Lastnost',
          type: 'text',
          required: true,
          /*admin: {
            components: {
              Field: (props) => (
                <AutocompleteInput
                  {...props}
                  options={predefinedProperties.map((prop) => prop.value)}
                />
              ),
            },
          },*/
        },
        {
          name: 'value',
          label: 'Vrednost',
          type: 'richText',
          required: true,
        },
      ],
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: 'offerType',
      label: 'Vrsta Ponudbe',
      type: 'select',
      admin: {
        position: "sidebar",
      },
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
    {
      name: 'description',
      label: 'Opis',
      type: 'richText',
      required: false,
    },
    slugField(),
  ],
};

