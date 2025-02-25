// src/types/locales.ts
export type Locale = "en" | "pl" | "es" | "fr" | "de" | "nl" | "el" | "it" | "ro" | "pt";
// export type Locale = "en-Gb" | "pl-PL" | "es-ES" | "fr-FR" | "de-DE" | "nl-NL" | "el-GR" | "it-IT" | "ro-RO" | "pt-Pt";
// при добавлении новой локали не забудь добавить currencySymbol и exchangeRate в src\data\currency-data.ts

export const locales: Record<Locale, string> = {
    en: "English",
    pl: "Polski",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    nl: "Nederlands",
    el: "Ελληνικά",
    it: "Italiano",
    ro: "Română",
    pt: "Português"
  };