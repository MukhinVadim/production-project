import 'react-i18next';
import translation from '../../../public/locales/ru/translation.json';
import about from '../../../public/locales/ru/about.json';
import main from '../../../public/locales/ru/main.json';
import profile from '../../../public/locales/ru/profile.json';

declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    translation: typeof translation;
    about: typeof about;
    main: typeof main;
    profile: typeof profile;
  }
}
