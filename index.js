module.exports = {
  extends: ['standard', 'standard-jsx', 'plugin:react-hooks/recommended', 'plugin:import/errors', 'prettier'],
  plugins: ['import', 'graphql'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    babelOptions: { presets: ['babel-preset-gatsby'] },
    requireConfigFile: false,
  },
  rules: {
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'import/no-webpack-loader-syntax': [0],
    'graphql/template-strings': ['error', { env: 'relay', tagName: 'graphql' }],
    'react/no-children-prop': 'off',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
    __TRAILING_SLASH__: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [require.resolve('./typescript.js'), 'prettier'],
    },
  ],
  settings: {
    'import/core-modules': [],
    react: { version: 'detect' },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] },
    },
  },
}
