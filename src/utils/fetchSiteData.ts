  // src/utils/fetchSiteData.ts
  import axios from 'axios';
  import { getSpinText } from "../services/spinTextService";
  import { extractLocale } from "@/utils/localeUtils";

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
      // Дополнительные поля можно добавить здесь
      [key: string]: any;
    };
  }

  // Функция для нормализации домена
  function normalizeDomain(domain: string): string {
    return domain.replace(/^https?:\/\//, '').split(':')[0];
  }

  async function fetchSiteData(host: string): Promise<FetchedSiteData | null> {
    try {
      // const start = Date.now();
      const response = await axios.get('https://cmsbase24.top/api/all-sites?populate=*');
      // const end = Date.now();
      // console.log(`API запрос занял ${end - start} мс`);
      const allSites: SiteData[] = response.data?.data;

      if (!Array.isArray(allSites)) {
        console.error("Некорректный формат данных от Strapi:", allSites);
        return null;
      }

      const cleanHost = normalizeDomain(host);
      const siteData = allSites.find((site) => normalizeDomain(site.siteDomain) === cleanHost);

      if (!siteData) {
        console.warn("Не найден сайт для текущего домена:", cleanHost);
        return null;
      }

      // console.log(siteData)


      const localeLang = siteData.localeLang || "en-US";
      const locale = extractLocale(localeLang);

      // Группировка локализованных текстов в один объект
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
      console.error("Ошибка при запросе данных:", error);
      return null;
    }
  }

  export default fetchSiteData;
