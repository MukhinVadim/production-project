module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'ignore',
        exceptions: ['NavLink', 'Button', 'IconButton', 'Input'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        caughtErrors: 'all',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'webpack.config.ts',
          'config/**',
          '**/*.test.{ts,tsx}',
          '**/*.stories.{ts,tsx}',
        ],
      },
    ],
    'i18next/no-literal-string': [
      'error',
      {
        exclude: ['**/*.test.{ts,tsx}', '**/*.stories.{ts,tsx}'],
      },
    ],
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 100,
      },
    ],
  },
  globals: {
    __IS_DEV__: 'readable',
    React: 'readable',
    JSX: 'readable',
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}', '**/*.stories.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
