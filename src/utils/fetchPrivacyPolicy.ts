export async function fetchPrivacyPolicy(locale: string) {
  try {
    const apiUrl = `https://cmsbase24.top/api/privacy-policies?filters[language][$contains]=${locale}-`;

    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // ✅ Оставляем только ISR (каждый час)
    });

    const data = await response.json();

    if (data?.data?.length) {
      return data.data[0]; // ✅ Возвращаем найденную политику
    }

    console.warn(`❌ Политика конфиденциальности не найдена для: ${locale}`);
    return null;
  } catch (error) {
    console.error("❌ Ошибка загрузки политики конфиденциальности:", error);
    return null;
  }
}
