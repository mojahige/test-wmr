module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['preact', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
