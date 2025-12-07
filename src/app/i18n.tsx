"use client"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      supportedLngs: ['en', 'fr'],
      debug: false,
      ns: ['translation'],
      defaultNS: 'translation',
      nonExplicitSupportedLngs: true,
      interpolation: {
        escapeValue: false, // React already does escaping
      },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json', // important: public/locales/...
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;