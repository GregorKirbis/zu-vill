module.exports = {
  root: true,
  extends: [
    "plugin:@next/next/recommended",
    "@payloadcms",
    "prettier", // Ensure this is added to extend Prettier configuration
  ],
  ignorePatterns: ["**/payload-types.ts"],
  plugins: ["prettier"], // Ensure the prettier plugin is included
  rules: {
    "prettier/prettier": [
    ],
  },
};
