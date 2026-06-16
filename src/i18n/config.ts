import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './lang/en.json';
import my from './lang/my.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    my: { translation: my },
  },
  lng: 'en',
  fallbackLng: 'en',
  interjection: true,
  returnNull: false,
});

export default i18n;
