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
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-missing-import': [
      'error',
      {
        allowModules: [],
        resolvePaths: ['/path/to/a/modules/directory'],
        tryExtensions: ['.js', '.json', '.node', '.ts']
      }
    ]
  },
  overrides: [
    {
      files: ['tests/**/*'],
      env: {mocha: true},
      rules: {
        'node/no-unpublished-import': 0
      }
    },
    {
      files: ['rollup.config.ts'],
      rules: {
        'node/no-unpublished-import': 0
      }
    }
  ]
};
