import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(HttpApi)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    load: "languageOnly",
    debug: false,
    supportedLangs: ["en", "fa"],
    fallbackLng: "en",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    // react: { useSuspense: false },
    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // },
    // This section is used when we are not using the httpApi .
    // resources: {
    //     // here we will place our translations...
    //   en: {
    //     translation:"" },
    //   fa: {
    //     translation:"" },
    // },
  });

export default i18n;
