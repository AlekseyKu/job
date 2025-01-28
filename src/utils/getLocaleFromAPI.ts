// src/utils/getLocaleFromAPI.ts
import axios from "axios";
import { extractLocale } from "@/utils/localeUtils";
// import { Locale } from "@/types/locales";

async function getLocaleFromApi(host: string) {
  try {
    const response = await axios.get("https://cmsbase24.top/api/all-sites?populate=*");
    const allSites = response.data?.data;

    if (!Array.isArray(allSites)) {
      console.error("Некорректный формат данных от Strapi:", allSites);
      return null;
    }

    const cleanHost = host.replace(/^https?:\/\//, "").split(":")[0];

    const siteData = allSites.find((site: any) => {
      const siteDomain = site.siteDomain.replace(/^https?:\/\//, "").split(":")[0];
      return siteDomain === cleanHost;
    });

    if (!siteData) {
      console.warn("Не найден сайт для текущего домена:", cleanHost);
      return null;
    }

    // Извлекаем локаль
    const localeLang = siteData.localeLang || "en-US";
    const locale = extractLocale(localeLang);

    return {
      ...siteData,
      locale, // Добавляем локаль для дальнейшего использования
    };
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
    return null;
  }
}

export default getLocaleFromApi;
