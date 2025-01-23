import axios from 'axios';
import { getSpinText } from "../services/spinTextService";


async function fetchSiteData(host: string) {
    try {
      const response = await axios.get('https://cmsbase24.top/api/all-sites?populate=*');
      const allSites = response.data?.data;
  
      // console.log("Полученный массив сайтов:", allSites);
      // console.log("Текущий домен (host):", host);
  
      if (!Array.isArray(allSites)) {
        console.error("Некорректный формат данных от Strapi:", allSites);
        return null;
      }
  
      // Удаление префиксов и порта для корректного сравнения
      const cleanHost = host.replace(/^https?:\/\//, '').split(':')[0]; // Убираем порт, если он есть
  
      const siteData = allSites.find((site: any) => {
        const siteDomain = site.siteDomain.replace(/^https?:\/\//, '').split(':')[0];
        return siteDomain === cleanHost;
      });
  
      if (!siteData) {
        console.warn("Не найден сайт для текущего домена:", cleanHost);
        return null;
      }

      // Извлекаем локаль и получаем текст кнопки
      const localeLang = siteData.localeLang || "en-US";
      const ButtonText = getSpinText("button_text", localeLang);
      const footerSocialText = getSpinText("footer_our_social_networks", localeLang);
      const topPromotionsTitle = getSpinText("top_promotions", localeLang);
      const topWinnersTitle = getSpinText("top_winners_of_the_day", localeLang);
      const listOfGamesPretitle = getSpinText("list_of_games.pretitle", localeLang);
      const listOfGamesTitle = getSpinText("list_of_games.title", localeLang);
      const mostLuckyPlayersPretitle = getSpinText("most_lucky_players.pretitle", localeLang);
      const mostLuckyPlayersTitle = getSpinText("most_lucky_players.title", localeLang);
      const topGamesPretitle = getSpinText("top_games.pretitle", localeLang);
      const topGamesTitle = getSpinText("top_games.title", localeLang);


      

      // console.log(ButtonText)

      return {
        ...siteData,
        attributes: {
          ...siteData.attributes,
          ButtonText, // Передаём уже выбранный текст
          footerSocialText,
          topPromotionsTitle,
          topWinnersTitle,
          listOfGames: {
            pretitle: listOfGamesPretitle,
            title: listOfGamesTitle,
          },
          mostLuckyPlayers: {
            pretitle: mostLuckyPlayersPretitle,
            title: mostLuckyPlayersTitle,
          },
          topGames: {
            pretitle: topGamesPretitle,
            title: topGamesTitle,
          },
        },
      };
  
      // console.log("Найденный сайт:", siteData);
      // return siteData;
    } catch (error) {
      console.error("Ошибка при запросе данных:", error);
      return null;
    }
  }
  
  
export default fetchSiteData;
