import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetectors from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import App from "./App";
import "./index.css";

i18n
  .use(initReactI18next)
  .use(LanguageDetectors)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fa"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });
ReactDOM.render(<App />, document.getElementById("root"));
