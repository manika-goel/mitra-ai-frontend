"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import en from "@/i18n/en";
import hi from "@/i18n/hi";
export type TranslationKey = keyof typeof en;

type Language = "en" | "hi";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof en) => string;
};

const translations = { en, hi };

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLangState] = useState<Language>("en");

  // Load saved language on first render
  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (language: Language) => {
    localStorage.setItem("app_lang", language);
    setLangState(language);
  };

  const t = (key: keyof typeof en) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
