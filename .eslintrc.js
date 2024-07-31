//module.exports = {
//  root: true,
//  extends: [
//    "plugin:@next/next/recommended",
//    "@payloadcms",
//    "prettier", // Ensure this is added to extend Prettier configuration
//  ],
//  ignorePatterns: ["**/payload-types.ts"],
//  plugins: ["prettier"], // Ensure the prettier plugin is included
//  rules: {
//    "prettier/prettier": [
//    ],
//  },
//};

module.exports = {
  root: true,
  extends: 'next', // Extend the Next.js ESLint configuration
  rules: {
    '@next/next/no-html-link-for-pages': 'off', // Disable no-html-link-for-pages rule
    'react/react-in-jsx-scope': 'off',         // Disable react-in-jsx-scope rule
    'jsx-a11y/anchor-is-valid': 'off',         // Disable anchor-is-valid rule
    '@typescript-eslint/no-explicit-any': 'off', // Disable no-explicit-any rule
    // Add any other rules you want to disable or override
  },
};
