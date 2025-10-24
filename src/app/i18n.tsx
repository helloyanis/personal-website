"use client"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    debug: false,
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;