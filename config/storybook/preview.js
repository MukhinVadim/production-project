import { withRouter } from 'storybook-addon-react-router-v6';
import { withThemes } from 'storybook-addon-themes/react';
import '../../src/app/styles/index.scss';
import i18n from './i18n';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: ['app', 'light'], color: '#FFF' },
      { name: 'dark', class: ['app', 'dark'], color: '#2d3748' },
    ],
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ru: 'Russian',
  },
};

export const decorators = [
  withRouter,
  withThemes,
];