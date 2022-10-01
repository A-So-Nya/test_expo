module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
  ],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
  }
}
