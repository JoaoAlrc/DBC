import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import { LanguageDetectorAsyncModule } from 'i18next';

import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';
import { Locales } from './interfaces/locales';

const resources: { [lang: string]: { translation: Locales } } = {
  "pt-BR": { translation: pt },
  en: { translation: en },
  es: { translation: es },
};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => { },
  detect: (callback: (locale: string) => void) => {
    callback(Localization.locale);
  },
  cacheUserLanguage: () => { },
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    fallbackLng: 'en',
    resources,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;
