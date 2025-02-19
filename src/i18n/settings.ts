// src/i18n/settings.ts
import { InitOptions } from 'i18next';
import type { Locale } from '@/types/locales';

// Импортируем все возможные локали
import { locales } from '@/types/locales';

export const fallbackLng: Locale = 'en';

// Получаем список локалей динамически
export const languages: Locale[] = Object.keys(locales) as Locale[];

export const defaultNS = 'common';

export function getOptions(lng: Locale = fallbackLng): InitOptions {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns: ['common'],
  };
}
