import { withRouter } from 'storybook-addon-react-router-v6';
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
    onChange: (theme) => {
      document.body.className = theme.class.replace(',', ' ');
    },
    list: [
      {
        name: 'light',
        class: ['app', 'light_theme'],
        color: '#FFF',
      },
      {
        name: 'dark',
        class: ['app', 'dark_theme'],
        color: '#2d3748',
      },
    ],
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ru: 'Russian',
  },
};

export const decorators = [withRouter];
