import { combinedData } from "../data/combined-data";
import { extractLocale } from "../utils/localeUtils";
import { Locale } from "../types/locales";

interface Cache {
  [key: string]: string; // Кэш формата: "ключ_локаль"
}

const cache: Cache = {}; // Простой объект для хранения кэша

/**
 * Получает текст из кэша или генерирует новый, если в кэше нет значения.
 * @param key Ключ для поиска в spinData (например, "header_button_text" или "list_of_games.pretitle").
 * @param localeLang Локаль в формате "xx-XX" (например, "es-ES").
 * @returns Сохранённый или случайно выбранный текст.
 */
export function getSpinText(key: string, localeLang: string): string {
  const locale = extractLocale(localeLang) as Locale;
  const cacheKey = `${key}_${locale}`;

  // Проверяем наличие в кэше
  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  // Получаем данные из combinedData.spin, включая вложенные ключи
  const options = resolveSpinDataKey(key)?.[locale] || resolveSpinDataKey(key)?.en;

  if (!options || !Array.isArray(options)) {
    throw new Error(`Данные для ключа "${key}" или локали "${locale}" не найдены`);
  }

  // Выбираем случайное значение
  const selectedText = options[Math.floor(Math.random() * options.length)];

  // Сохраняем в кэш
  cache[cacheKey] = selectedText;

  return selectedText;
}

/**
 * Разрешает вложенные ключи, такие как "list_of_games.pretitle".
 * @param key Ключ для разрешения.
 * @returns Найденный объект или undefined.
 */
function resolveSpinDataKey(key: string): Record<Locale, string[]> | undefined {
  const keys = key.split(".");
  let data: any = combinedData.spin;

  for (const k of keys) {
    if (data && typeof data === "object" && k in data) {
      data = data[k];
    } else {
      return undefined; // Ключ не найден
    }
  }

  return data;
}

/**
 * Сбрасывает кэш для заданного ключа.
 * @param key Ключ для сброса.
 * @param localeLang Локаль в формате "xx-XX".
 */
export function clearSpinTextCache(key: string, localeLang: string): void {
  const locale = extractLocale(localeLang) as Locale;
  const cacheKey = `${key}_${locale}`;
  delete cache[cacheKey];
  console.log(`[CACHE] Сбросили текст для ключа: ${cacheKey}`);
}