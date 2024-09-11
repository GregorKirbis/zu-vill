import { CollectionConfig } from 'payload/types';

const AnalyticsData: CollectionConfig = {
  slug: 'analyticsData',
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'pageSlug',
      type: 'text',
      required: true,
    },
    {
      name: 'views',
      type: 'number',
      required: true,
    },
    {
      name: 'sessions',
      type: 'number',
      required: true,
    },
    {
      name: 'sessionDuration',
      type: 'number',
    },
  ],
};

export default AnalyticsData;
