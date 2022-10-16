module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'eslint-config-prettier'
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }
    },
  },
  parser: "@typescript-eslint/parser",
  overrides: [],
  rules: {
    'max-len': ['error', { code: 300 }],
    'no-console': 'off',
    curly: ['error', 'multi-line'],
    'import/newline-after-import': ['error'],
    "react/react-in-jsx-scope": "off",
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
  },
}
