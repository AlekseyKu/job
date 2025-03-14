// src/utils/fetchSiteData.ts
import { getSpinText } from "../services/spinTextService";
import { extractLocale } from "@/utils/localeUtils";
import combinedData from "@/data/combined-data";

// Определяем интерфейсы для типизации
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

// ✅ Функция нормализации домена
function normalizeDomain(domain: string): string {
  return domain.replace(/^https?:\/\//, "").split(":")[0];
}

// ✅ Переписанный `fetchSiteData.ts` на `fetch()`
export async function fetchSiteData(host: string): Promise<FetchedSiteData | null> {
  try {
    const response = await fetch("https://cmsbase24.top/api/all-sites?populate=*", {
      cache: "no-store", // ✅ Отключаем кэширование, всегда свежие данные
    });

    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных Strapi: ${response.status} ${response.statusText}`);
    }

    const jsonData = await response.json();
    const allSites: SiteData[] = jsonData.data;

    if (!Array.isArray(allSites)) {
      console.error("❌ Некорректный формат данных от Strapi:", allSites);
      return null;
    }

    const cleanHost = normalizeDomain(host);
    const siteData = allSites.find((site) => normalizeDomain(site.siteDomain) === cleanHost);

    if (!siteData) {
      console.warn(`⚠️ Не найден сайт для домена: ${cleanHost}`);
      return null;
    }

    const localeLang = siteData.localeLang || "en-US";
    const locale = extractLocale(localeLang);

    // ✅ Группировка локализованных текстов
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

    return {
      ...siteData,
      locale,
      attributes: {
        ...siteData.attributes,
        ...localizedTexts,
      },
    };
  } catch (error) {
    console.error("❌ Ошибка при запросе данных из Strapi:", error);
    return null;
  }
}

export default fetchSiteData;
