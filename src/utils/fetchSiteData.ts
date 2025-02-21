// src/utils/fetchSiteData.ts
import { getSpinText } from "../services/spinTextService";
import { extractLocale } from "@/utils/localeUtils";
import combinedData from "@/data/combined-data";

// Интерфейсы для типизации
interface SiteData {
  siteDomain: string;
  localeLang?: string;
  attributes: any;
  [key: string]: any;
}

interface FetchedSiteData extends SiteData {
  locale: string;
  attributes: {
    buttonText: string;
    footerSocialText: string;
    topPromotionsTitle: string;
    topWinnersTitle: string;
    listOfGames: {
      pretitle: string;
      title: string;
    };
    mostLuckyPlayers: {
      pretitle: string;
      title: string;
    };
    topGames: {
      pretitle: string;
      title: string;
    };
    promo: {
      title: string;
      subtitle: string;
      price: string;
    };
    tournament_box: {
      sub: string[];
      title: string[];
      pre: string[];
    };
    [key: string]: any;
  };
}

// ✅ Функция нормализации домена (гарантируем, что вернет `string`)
function normalizeDomain(domain: string | undefined): string {
  if (!domain) return ""; // Если `undefined`, возвращаем пустую строку
  return domain.replace(/^https?:\/\//, "").split(":")[0] ?? "";
}

// ✅ Глобальный кеш (fallback, если Redis не используется)
let globalCache: { [key: string]: FetchedSiteData | null } = {};

// ✅ Функция получения данных (используется во время SSG)
export async function fetchSiteData(host: string): Promise<FetchedSiteData | null> {
  const cleanHost = normalizeDomain(host);

  // ✅ Если `cleanHost` пустой, возвращаем `null`
  if (!cleanHost) {
    console.warn("Получен пустой домен");
    return null;
  }

  // ✅ Проверяем глобальный кеш, если данных нет, возвращаем `null`
  if (globalCache[cleanHost] !== undefined) {
    return globalCache[cleanHost] || null;
  }

  try {
    const response = await fetch("https://cmsbase24.top/api/all-sites?populate=*");
    // Кэш больше 2МБ (5.5MB) TODO ограничить запрос API, сделать для запроса siteDomain отдельный модуль.
    const allSites = await response.json();

    if (!allSites || !Array.isArray(allSites.data)) {
      console.error("Некорректный формат данных от Strapi:", allSites);
      return null;
    }

    const siteData = allSites.data.find((site: any) => normalizeDomain(site.siteDomain) === cleanHost);

    if (!siteData) {
      console.warn("Не найден сайт для текущего домена:", cleanHost);
      globalCache[cleanHost] = null; // ✅ Кешируем отсутствие данных
      return null;
    }

    const localeLang = siteData.localeLang || "en-US";
    const locale = extractLocale(localeLang);

    // Генерация локализованного контента
    const localizedTexts = {
      buttonText: getSpinText("button_text", localeLang),
      footerSocialText: getSpinText("footer_our_social_networks", localeLang),
      topPromotionsTitle: getSpinText("top_promotions", localeLang),
      topWinnersTitle: getSpinText("top_winners_of_the_day", localeLang),
      listOfGames: {
        pretitle: getSpinText("list_of_games.pretitle", localeLang),
        title: getSpinText("list_of_games.title", localeLang),
      },
      mostLuckyPlayers: {
        pretitle: getSpinText("most_lucky_players.pretitle", localeLang),
        title: getSpinText("most_lucky_players.title", localeLang),
      },
      topGames: {
        pretitle: getSpinText("top_games.pretitle", localeLang),
        title: getSpinText("top_games.title", localeLang),
      },
      promo: {
        title: getSpinText("promo.title", localeLang) || [],
        subtitle: getSpinText("promo.subtitle", localeLang) || [],
        price: getSpinText("promo.price", localeLang) || "Total Win",
      },
      tournament_box: {
        sub: Array.isArray(combinedData.spin.tournament_box.sub[locale as keyof typeof combinedData.spin.tournament_box.sub])
          ? combinedData.spin.tournament_box.sub[locale as keyof typeof combinedData.spin.tournament_box.sub]
          : [combinedData.spin.tournament_box.sub.en],

        title: Array.isArray(combinedData.spin.tournament_box.title[locale as keyof typeof combinedData.spin.tournament_box.title])
          ? combinedData.spin.tournament_box.title[locale as keyof typeof combinedData.spin.tournament_box.title]
          : [combinedData.spin.tournament_box.title.en],

        pre: Array.isArray(combinedData.spin.tournament_box.pre[locale as keyof typeof combinedData.spin.tournament_box.pre])
          ? combinedData.spin.tournament_box.pre[locale as keyof typeof combinedData.spin.tournament_box.pre]
          : [combinedData.spin.tournament_box.pre.en],
      },
    };

    const finalData: FetchedSiteData = {
      ...siteData,
      locale,
      attributes: {
        ...siteData.attributes,
        ...localizedTexts,
      },
    };

    // ✅ Сохраняем в глобальный кеш (fallback)
    globalCache[cleanHost] = finalData;

    return finalData;
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
    return null; // ✅ Теперь гарантированно возвращаем `null` в случае ошибки
  }
}
