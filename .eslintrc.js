module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:eslint-plugin/recommended', 'plugin:node/recommended'],
  plugins: ['@typescript-eslint'],
  env: {
    node: true
  },
  rules: {
    'node/no-unsupported-features/es-syntax': 0
  },
  overrides: [
    {
      files: ['tests/**/*'],
      env: {mocha: true}
    },
    {
      files: ['rollup.config.ts'],
      rules: {
        'node/no-unpublished-import': 0
      }
    }
  ]
};
