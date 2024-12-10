import { InitOptions } from 'i18next';

export const fallbackLng = 'en';
export const languages = ['en', 'es', 'fr', 'de', 'pl', 'nl'];

export const defaultNS = 'common';

export function getOptions(lng = fallbackLng): InitOptions {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns: ['common'],
  };
}