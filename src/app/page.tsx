import Wrapper from "@/layout/wrapper";
import Header from "./components/leon/main-header";
import HomePage from "./components/leon/main-home-page";
import TournamentArea from "./components/leon/tournaments/tournament-area";
import TournamentListArea from "./components/leon/tournaments/tournament-list-area";
import TopRatedGamesArea from "./components/leon/area-top-rated";
// import UpcomingMatches from "./components/leon/upcoming-matches";
import TopWinnersArea from "./components/leon/nft-item/trending-nft-items";
import TopWinnersArea2 from "./components/leon/nft-item/nft-item-area";
import FaqArea from "./components/leon/main-faq";
import Footer from "./components/leon/main-footer";

import EditorInfo from "./components/leon/editors/editor-info";

import axios from 'axios';
import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import fetchSiteData from "@/utils/fetchSiteData";



const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;
const UID = 0

// export default async function Home() {
//   // Получение данных на стороне сервера с помощью axios
//   const HeaderData = await getHeaderData();
//   const HomePageData = await getHomePageData();
//   const FooterData = await getFooterData();
//   const EditorInfoData = await getEditorInfoData();
//   const FaqData = await getFaqData();

//   const AllSiteData = await getAllSiteData();

  // Лог после получения данных для проверки
  // console.log("Полученные данные для Header:", HeaderData);

export default async function Home() {
  const host = headers().get('host');
  const siteData = await fetchSiteData(host || '');
  // console.log('Текущий домен (host):', host);
  // console.log('siteData:', siteData);
  

  return (
    <Wrapper>
      {/* <Header
        logo={siteData?.header?.logo}
        buttonText={siteData?.header?.buttonText}
      /> */}
      {/* <main className="main--area"> */}

      {/* <HomePage
        pretitle={siteData?.home_page?.pretitle}
        title={siteData?.home_page?.title}
        subtitle={siteData?.home_page?.subtitle}
        buttonText={siteData?.home_page?.buttonText}
        pageImg={siteData?.home_page?.pageImg}
        // pageBg={HomePageData?.pageBg}
      /> */}

        {/* Подключение других блоков с полученными данными */}
        {/* <TopRatedGamesArea data={streamersData} /> */}
        {/* <LeonMain data={mainContentData} /> */}
      {/* </main> */}

      <TournamentArea

      />

      <TournamentListArea

      />

      <TopRatedGamesArea

      />

      <TopWinnersArea

      />

      <TopWinnersArea2

      />

      {/* <EditorInfo 
        // editorInfo={EditorInfoData?.editorInfo} 
      /> */}

      {/* <InfoCasino 
        pretitle={InfoCasinoData?.pretitle}
        title={InfoCasinoData?.title}
        subtitle={InfoCasinoData?.subtitle}
        tableInfoCasino={InfoCasinoData?.tableInfoCasino || []}
      /> */}

      {/* <SecurityAndLicense
        title={SecurityAndLicenseData?.title}
        descriptionBlock={SecurityAndLicenseData?.descriptionBlock}
        description={SecurityAndLicenseData?.description}
        description2={SecurityAndLicenseData?.description2}
        backgroundImage={SecurityAndLicenseData?.backgroundImage}
      /> */}

      {/* <FaqArea 
        pretitle={FaqData?.pretitle} 
        title={FaqData?.title} 
        faqRow={FaqData?.faqRow || []} 
      />

      <Footer 
        logo={FooterData?.logo}
        footerText={FooterData?.footerText}
        socialTitle={FooterData?.socialTitle}
        footerLinksTitle={FooterData?.footerLinksTitle}
      /> */}
    </Wrapper>
  );
}


// async function fetchSiteData(host: string) {
//   const response = await axios.get('https://cmsbase24.top/api/all-sites', {
//     params: { siteDomain: `https://${host}` },
//   });
//   return response.data?.data || null;
// }

// async function fetchSiteData(host: string) {
//   const response = await axios.get('https://cmsbase24.top/api/all-sites?populate=*');
//   // Находим сайт с соответствующим доменом
//   const siteData = response.data?.data.find((site: any) =>
//     site.attributes?.siteDomain === `http://${host}` || 
//     site.attributes?.siteDomain === `https://${host}`
//   );
//   return siteData || null; // Возвращаем только один объект данных, а не массив
// }



// Функция для получения данных из Strapi для AllSite
// async function getAllSiteData() {
//   try {
//     const res = await axios.get(`${httpAddress}/api/all-sites?populate=*`);
//     const allSiteData = res.data.data[UID]; 
//     // const logoUrl = headerData?.attributes?.logo?.data?.attributes?.url;

//     return {
//       ...allSiteData,
//       // logoUrl: logoUrl ? `${httpAddress}${logoUrl}` : '/default-logo.png' // Проверка и добавление полного URL
//     };
//   } catch (error) {
//     console.error("Ошибка при получении данных для Header из Strapi:", error);
//     return {
//       logoUrl: '/default-logo.png', // Логотип по умолчанию
//       buttonText: 'Sign In', // Текст по умолчанию
//     };
//   };
// }

// // Функция для получения данных из Strapi для Header
// async function getHeaderData() {
//   try {
//     const res = await axios.get(`${httpAddress}/api/headers?populate=*`);
//     const headerData = res.data.data[0]; 
//     const logoUrl = headerData?.attributes?.logo?.data?.attributes?.url;

//     return {
//       ...headerData,
//       logoUrl: logoUrl ? `${httpAddress}${logoUrl}` : '/default-logo.png' // Проверка и добавление полного URL
//     };
//   } catch (error) {
//     console.error("Ошибка при получении данных для Header из Strapi:", error);
//     return {
//       logoUrl: '/default-logo.png', // Логотип по умолчанию
//       buttonText: 'Sign In', // Текст по умолчанию
//     };
//   };
// }

// Функция для получения данных из Strapi для Footer
async function getFooterData() {
  try {
    const res = await axios.get(`${httpAddress}/api/footers?populate=*`);
    const footerData = res.data.data[0]; 
    const logoUrl = footerData?.attributes?.logo?.data?.attributes?.url;

    return {
      ...footerData,
      logoUrl: logoUrl ? `${httpAddress}${logoUrl}` : '/default-logo.png' // Проверка и добавление полного URL
    };
  } catch (error) {
    console.error("Ошибка при получении данных для Footer из Strapi:", error);
    return {
      logoUrl: '/default-logo.png', // Логотип по умолчанию
    };
  };
}

// Функция для получения данных из Strapi для HomePage
async function getHomePageData() {
  try {
    const res = await axios.get(`${httpAddress}/api/home-pages?populate=*`);
    const homePageData = res.data.data[0];
    const pageImg = homePageData?.attributes?.pageImg?.data?.attributes?.url;
    // const pageBg = homePageData?.attributes?.pageBg?.data?.attributes?.url;

    return {
      ...homePageData,
    };
  } catch (error) {
    console.error("Ошибка при получении данных из Strapi для HomePage:", error);
    return {};
  };
}

// Функция для получения данных из Strapi для EditorInfo
async function getEditorInfoData() {
  try {
    const res = await axios.get(`${httpAddress}/api/editor-infos?populate=*`);
    const EditorInfoData = res.data.data[0];
    // console.log("Полученные данные для EditorInfoData:", EditorInfoData);

    return EditorInfoData || {};
  } catch (error) {
    console.error("Ошибка при получении данных для EditorInfoData из Strapi:", error);
  }
}

// Функция для получения данных из Strapi для FAQ
async function getFaqData() {
  try {
    const res = await axios.get(`${httpAddress}/api/faqs?populate=*`);
    const faqData = res.data.data[0];
    // console.log("Полученные данные для FAQ:", faqData); // Для отладки
    return faqData || {};

  } catch (error) {
    console.error("Ошибка при получении данных для FAQ из Strapi:", error);
    return {};
  }
}
