// src/data/currency-data.ts
import { Locale } from "../types/locales"

type CurrencyData = {
  currencySymbol: string; // Символ валюты
  exchangeRate: number;  // Курс валюты относительно USD
};

export const currencyData: Record<Locale, CurrencyData> = {
  en: {
    currencySymbol: "£",
    exchangeRate: 1,
  },
  pl: {
    currencySymbol: "zł",
    exchangeRate: 4.5,
  },
  es: {
    currencySymbol: "€",
    exchangeRate: 1,
  },
  fr: {
    currencySymbol: "€",
    exchangeRate: 1,
  },
  de: {
    currencySymbol: "€",
    exchangeRate: 1,
  },
  nl: {
    currencySymbol: "€",
    exchangeRate: 1,
  },
  el: {
    currencySymbol: "€",
    exchangeRate: 1,
  },
  it: {
    currencySymbol: "€",
    exchangeRate: 1,
  },
  ro: {
    currencySymbol: "L",
    exchangeRate: 5,
  },
  pt: {
    currencySymbol: "€",
    exchangeRate: 1,
  },
};