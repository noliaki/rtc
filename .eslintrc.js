module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
}
