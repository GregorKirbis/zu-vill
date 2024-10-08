import { webpackBundler } from "@payloadcms/bundler-webpack";
import { postgresAdapter } from "@payloadcms/db-postgres";
import nestedDocs from "@payloadcms/plugin-nested-docs";
import redirects from "@payloadcms/plugin-redirects";
import seo from "@payloadcms/plugin-seo";
import type { GenerateTitle } from "@payloadcms/plugin-seo/types";
import { slateEditor } from "@payloadcms/richtext-slate";
import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";

import Categories from "./collections/Categories";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Catalog } from "./collections/Catalog";
import Users from "./collections/Users";
import BeforeLogin from "./components/BeforeLogin";
import { Footer } from "./globals/Footer";
import { Header } from "./globals/Header";
import { Settings } from "./globals/Settings";
import { Requests }  from "./collections/Requests";

//import dashboardAnalytics from '@nouance/payload-dashboard-analytics';
//import type { GoogleProvider } from '@nouance/payload-dashboard-analytics/dist/types/providers'
//import AnalyticsData from "./collections/AnalyticsData";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

/*const googleProvider: GoogleProvider = {
  source: "google",
  credentials: "./zu-vil-a8a55630e382.json",
  propertyId: "457994266",
};*/

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: [BeforeLogin],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: [],
    },
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          dotenv: path.resolve(__dirname, "./dotenv.js"),
          [path.resolve(__dirname, "./endpoints/seed")]: path.resolve(__dirname, "./emptyModuleMock.js"),
        },
      },
    }),
  },
  editor: slateEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Pages, Catalog, Categories, Requests, Media, Users],
  globals: [Settings, Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ""].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ""].filter(Boolean),
  endpoints: [],
  plugins: [
    redirects({
      collections: ["pages"],
    }),
    nestedDocs({
      collections: ["categories","pages"],
    }),
    seo({
      collections: ["pages", "catalog"],
      uploadsCollection: "media",
    }),
  ],
});
