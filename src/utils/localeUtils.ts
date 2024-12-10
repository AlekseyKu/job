export function extractLocale(localeLang: string): string {
    return localeLang.split('-')[0]; // Извлекаем часть до дефиса
}
