import Wrapper from "@/layout/wrapper";
import Header from "./components/leon/main-header";
import HomePage from "./components/leon/main-home-page";
import TournamentArea from "./components/leon/tournaments/tournament-area";
import TournamentListArea from "./components/leon/tournaments/tournament-list-area";
import TopRatedGamesArea from "./components/leon/area-top-rated";
import TopWinnersArea from "./components/leon/nft-item/trending-nft-items";
import TopWinnersArea2 from "./components/leon/nft-item/nft-item-area";
import FaqArea from "./components/leon/main-faq";
import Footer from "./components/leon/main-footer";
import EditorInfo from "./components/leon/editors/editor-info";
import axios from 'axios';
import SeoMeta from "@/utils/seoMeta";
import { headers } from 'next/headers';
import FetchSiteData from "@/utils/fetchSiteData";
// import SetThemeColors from "@/utils/setThemeColors"



const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;
const UID = 0

const PageSectionsRenderer = ({ pageSections, siteData }: { pageSections: any[], siteData: any }) => {
  return (
    <>
      {pageSections.map((section) => {
        switch (section.sectionName) {
          case 'MOST LUCKY PLAYERS':
            return <TopWinnersArea key={section.id} targetLink={siteData.targetLinkButton} />;
          case 'LIST OF GAMES':
            return <TournamentListArea key={section.id} targetLink={siteData.targetLinkButton} />;
          case 'OUR GAMES':
            return <TopRatedGamesArea key={section.id} targetLink={siteData.targetLinkButton} />;
          case 'Top promotions':
            return <TournamentArea key={section.id} targetLink={siteData.targetLinkButton} />;
          case 'Top winners of the day':
            return <TopWinnersArea2 key={section.id} targetLink={siteData.targetLinkButton} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default async function Home() {
  const host = headers().get('host');
  const siteData = await FetchSiteData(host || '');
  const pageSections = siteData?.page_sections || [];


  // console.log('Текущий домен (host):', host);
  // console.log('siteData:', siteData);
  

  return (
    <Wrapper>

      <SeoMeta
        title={siteData?.siteTitle || "Default Title"}
        description={siteData?.siteDescription || "Default Description"}
        favicon={siteData?.favicon || "/favicon.ico"}
      />
      <Header
        logo={siteData?.siteLogo}
        targetLink={siteData?.targetLinkButton}
        buttonText={siteData?.header?.buttonText}
      />
      {/* <main className="main--area"> */}

      <HomePage
        pretitle={siteData?.home_page?.pretitle}
        title={siteData?.home_page?.title}
        subtitle={siteData?.home_page?.subtitle}
        buttonText={siteData?.home_page?.buttonText}
        targetLink={siteData?.targetLinkButton}
        pageImg={siteData?.home_page?.pageImg}
        pageBg={siteData?.home_page?.pageBg}
      />

      <PageSectionsRenderer pageSections={pageSections} siteData={siteData} />

      {/* <TournamentArea
        targetLink={siteData?.targetLink}
      /> */}

      {/* <TournamentListArea
        targetLink={siteData?.targetLink}
      />

      <TopRatedGamesArea
        targetLink={siteData?.targetLink}
      />

      <TopWinnersArea
        targetLink={siteData?.targetLink}
      />

      <TopWinnersArea2
        targetLink={siteData?.targetLink}
      /> */}

      <EditorInfo 
        editorInfo={siteData?.editor_info?.editorInfo} 
      />


      <FaqArea 
        pretitle={siteData?.faq?.pretitle} 
        title={siteData?.faq?.title} 
        faqRow={siteData?.faq?.faqRow || []} 
      />

      <Footer 
        logo={siteData?.siteLogo}
        footerText={siteData?.siteDescription}
        socialTitle={siteData?.footer?.socialTitle}
        targetLink={siteData?.targetLink}
        siteName={siteData?.siteName}
      />
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

// // Функция для получения данных из Strapi для Footer
// async function getFooterData() {
//   try {
//     const res = await axios.get(`${httpAddress}/api/footers?populate=*`);
//     const footerData = res.data.data[0]; 
//     const logoUrl = footerData?.attributes?.logo?.data?.attributes?.url;

//     return {
//       ...footerData,
//       logoUrl: logoUrl ? `${httpAddress}${logoUrl}` : '/default-logo.png' // Проверка и добавление полного URL
//     };
//   } catch (error) {
//     console.error("Ошибка при получении данных для Footer из Strapi:", error);
//     return {
//       logoUrl: '/default-logo.png', // Логотип по умолчанию
//     };
//   };
// }

// // Функция для получения данных из Strapi для HomePage
// async function getHomePageData() {
//   try {
//     const res = await axios.get(`${httpAddress}/api/home-pages?populate=*`);
//     const homePageData = res.data.data[0];
//     const pageImg = homePageData?.attributes?.pageImg?.data?.attributes?.url;
//     // const pageBg = homePageData?.attributes?.pageBg?.data?.attributes?.url;

//     return {
//       ...homePageData,
//     };
//   } catch (error) {
//     console.error("Ошибка при получении данных из Strapi для HomePage:", error);
//     return {};
//   };
// }

// // Функция для получения данных из Strapi для EditorInfo
// async function getEditorInfoData() {
//   try {
//     const res = await axios.get(`${httpAddress}/api/editor-infos?populate=*`);
//     const EditorInfoData = res.data.data[0];
//     // console.log("Полученные данные для EditorInfoData:", EditorInfoData);

//     return EditorInfoData || {};
//   } catch (error) {
//     console.error("Ошибка при получении данных для EditorInfoData из Strapi:", error);
//   }
// }

// // Функция для получения данных из Strapi для FAQ
// async function getFaqData() {
//   try {
//     const res = await axios.get(`${httpAddress}/api/faqs?populate=*`);
//     const faqData = res.data.data[0];
//     // console.log("Полученные данные для FAQ:", faqData); // Для отладки
//     return faqData || {};

//   } catch (error) {
//     console.error("Ошибка при получении данных для FAQ из Strapi:", error);
//     return {};
//   }
// }

