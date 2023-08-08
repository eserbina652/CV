import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {pageEN, pagePL, pageUK} from "./locales";

const resources = {
    en: {
        account: pageEN,
    },
    uk: {
        account: pageUK
    },
    pl: {
        account: pagePL
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: resources,
        ns: ['account'],
    });

export default i18n;

