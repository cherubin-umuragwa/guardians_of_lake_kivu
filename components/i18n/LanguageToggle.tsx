"use client";

import { useI18n } from "@/lib/i18n/context";

export default function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  function toggle() {
    setLang(lang === "en" ? "fr" : "en");
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${lang === "en" ? "French" : "English"}`}
      className="px-3 py-1.5 rounded-md border border-water-teal text-water-teal text-sm font-semibold hover:bg-water-teal hover:text-white transition-colors min-h-[44px]"
    >
      {t("nav.lang")}
    </button>
  );
}
