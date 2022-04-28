/* eslint-env node */
module.exports = {
  extends: [
    'plugin:@shopify/typescript',
    'plugin:@shopify/react',
    'plugin:@shopify/prettier',
    'plugin:@shopify/polaris',
    'plugin:@shopify/jest',
    'plugin:react/jsx-runtime',
    'plugin:jest-formatting/strict',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@shopify/jsx-no-hardcoded-content': 'off',

        // cloned from node_modules/@shopify/eslint-plugin/lib/config/rules/typescript.js
        // keep camelCase naming convention and PascalCase class
        // toss interface names
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'default',
            filter: {
              match: true,
              // Allow double underscores and React UNSAFE_ (for lifecycle hooks that are to be deprecated)
              regex: '^(__|UNSAFE_).+$',
            },
            format: null,
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          // {
          //   selector: 'typeParameter',
          //   format: ['PascalCase'],
          //   prefix: ['T'],
          // },
          // {
          //   selector: 'interface',
          //   format: ['PascalCase'],
          //   custom: {
          //     regex: '^I[A-Z]',
          //     match: false,
          //   },
          // },
        ],
      },
    },
  ],
};
