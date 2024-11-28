import axios from 'axios';

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
  
      // console.log("Найденный сайт:", siteData);
      return siteData;
    } catch (error) {
      console.error("Ошибка при запросе данных:", error);
      return null;
    }
  }
  
  
export default fetchSiteData;
