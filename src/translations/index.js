import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as resources from './resources';

const mapTranslations = (translations) => ({
  ...Object.entries(translations).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        translation: value,
      },
    }),
    {},
  ),
});

i18n.use(initReactI18next).init({
  resources: mapTranslations(resources),
  lng: 'en',
});

export default i18n;
