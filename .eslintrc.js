module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    `plugin:react/recommended`,
    `plugin:@typescript-eslint/eslint-recommended`,
    `plugin:@typescript-eslint/recommended`,
    `eslint-config-prettier/@typescript-eslint`,
  ],
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin', 'react'],
    },
  ],
};
