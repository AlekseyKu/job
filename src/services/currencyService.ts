import { currencyData } from "@/data/currency-data";
import { Locale } from "@/types/locales";

/**
 * Возвращает символ валюты для локали.
 * @param locale - Локаль.
 * @returns Символ валюты.
 */
export function getCurrencySymbol(locale: Locale): string {
  return currencyData[locale]?.currencySymbol || currencyData.en.currencySymbol;
}

/**
 * Конвертирует сумму в зависимости от локали.
 * @param amount - Сумма в базовой валюте (USD).
 * @param locale - Локаль.
 * @returns Конвертированная сумма.
 */
export function convertCurrency(amount: number, locale: Locale): number {
  const currency = currencyData[locale] || currencyData.en;
  return parseFloat((amount * currency.exchangeRate).toFixed(2));
}
