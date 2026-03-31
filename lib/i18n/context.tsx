"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import en from "./en";
import fr from "./fr";

type Language = "en" | "fr";

const STORAGE_KEY = "gotl-lang";
const DICTS: Record<Language, Record<string, string>> = { en, fr };

interface I18nContextValue {
  lang: Language;
  t: (key: string) => string;
  setLang: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  t: (key) => key,
  setLang: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") {
      setLangState(stored);
    }
  }, []);

  function setLang(next: Language) {
    localStorage.setItem(STORAGE_KEY, next);
    setLangState(next);
  }

  function t(key: string): string {
    const dict = DICTS[lang];
    if (key in dict) return dict[key];
    if (lang !== "en" && key in DICTS["en"]) {
      console.warn(`[i18n] Missing key "${key}" in "${lang}", falling back to "en".`);
      return DICTS["en"][key];
    }
    console.warn(`[i18n] Missing key "${key}" in all dictionaries.`);
    return key;
  }

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
