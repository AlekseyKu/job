// // src/utils/fetchMinimalSiteData.ts
// import axios from 'axios';

// export interface MinimalSiteData {
//   siteDomain: string;
// }

// async function fetchMinimalSiteData(): Promise<MinimalSiteData[] | null> {
//   try {
//     // Запрашиваем только поле siteDomain
//     const response = await axios.get('https://cmsbase24.top/api/all-sites?fields[0]=siteDomain');
//     const data = response.data?.data;
//     if (!data || !Array.isArray(data)) {
//       console.error("Неверный формат данных, полученных от Strapi:", data);
//       return null;
//     }
//     // В ответе каждое значение должно быть объектом с полем siteDomain
//     return data.map((item: any) => ({
//       siteDomain: item.siteDomain,
//     }));
//   } catch (error) {
//     console.error("Ошибка при запросе минимальных данных:", error);
//     return null;
//   }
// }

// export default fetchMinimalSiteData;
