import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const options = {
  // Стандартный язык
  fallbackLng: "ru",
  whitelist: ["ru", "en"],
  debug: false,
  // Распознавание и кэширование языковых кук
  detection: {
    order: ["localStorage", "cookies"],
    cache: ["localStorage", "cookies"],
  },
  interpolation: {
    escapeValue: false,
  },
}

i18n
  // Подключение бэкенда i18next
  .use(Backend)
  // Автоматическое определение языка
  .use(LanguageDetector)
  // модуль инициализации
  .use(initReactI18next)
  .init(options);

export default i18n;
