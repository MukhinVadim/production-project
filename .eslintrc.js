module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': ['warn', {
      html: 'ignore',
      exceptions: ['NavLink'],
    }],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'webpack.config.ts',
        'config/**',
        '**/*.test.ts',
      ],
    }],
    'no-shadow': 'off',
    'no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: true,
      caughtErrors: 'all',
    }],
    'no-underscore-dangle': 'off',
    'max-len': ['error', { ignoreComments: true, code: 100 }],
  },
  globals: {
    __IS_DEV__: 'writable',
  },
};
