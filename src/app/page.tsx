import Wrapper from "@/layout/wrapper";
import LeonHeader from "./components/leon/leon-header";
import LeonMain from "./leon-main/page";
import LeonHeroBanner from "./components/leon/leon-hero-banner";
import TournamentArea from "./components/leon/tournaments/tournament-area";
import TournamentListArea from "./components/leon/tournaments/tournament-list-area";
import LeonStreamersArea from "./components/leon/area-top-rated";
import UpcomingMatches from "./components/leon/upcoming-matches";
import TrendingNftItems from "./components/leon/nft-item/trending-nft-items";
import NftItemArea from "./components/leon/nft-item/nft-item-area";
import InfoCasino from "./components/leon/info-casino";
import SecurityAndLicense from "./components/leon/security-and-license";
import LeonFaq from "./components/leon/leon-faq";
import LeonFooter from "./components/leon/leon-footer";
import axios from 'axios';

const httpAddress = "http://62.84.182.126:1337";

export default async function Home() {
  // Получение данных на стороне сервера с помощью axios
  const HeaderData = await getHeaderData();
  const BisonCasinoHomePageData = await getBisonCasinoHomePageData();
  const InfoCasinoData = await getInfoCasinoData();
  const SecurityAndLicenseData = await getSecurityAndLicense();
  const FooterData = await getFooterData();

  // Логи после получения данных
  // console.log("Полученные данные для Header:", HeaderData);
  // console.log("Полученные данные для BisonCasinoHomePage:", BisonCasinoHomePageData);
  // console.log("Полученные данные для Footer:", FooterData);

  
  // В будущем, добавить запросы для других компонентов: TODO
  // const streamersData = await getStreamersData();
  // const mainContentData = await getMainContentData();

  return (
    <Wrapper>
      <LeonHeader 
        logo={HeaderData?.logo}
        buttonText={HeaderData?.buttonText}
      />
      <main className="main--area">

        <LeonHeroBanner
          pretitle={BisonCasinoHomePageData?.pretitle}
          title={BisonCasinoHomePageData?.title}
          subtitle={BisonCasinoHomePageData?.subtitle}
          buttonText={BisonCasinoHomePageData?.buttonText}
          pageImg={BisonCasinoHomePageData?.pageImg}
          // pageBg={BisonCasinoHomePageData?.pageBg}
        />

        {/* Подключение других блоков с полученными данными */}
        {/* <LeonStreamersArea data={streamersData} /> */}
        {/* <LeonMain data={mainContentData} /> */}
      </main>

      <TournamentArea

      />

      <TournamentListArea

      />

      <LeonStreamersArea

      />

      <UpcomingMatches

      />

      <TrendingNftItems

      />

      <NftItemArea

      />

      <InfoCasino 
        pretitle={InfoCasinoData?.pretitle}
        title={InfoCasinoData?.title}
        subtitle={InfoCasinoData?.subtitle}
        tableInfoCasino={InfoCasinoData?.tableInfoCasino || []}
      />

      <SecurityAndLicense
        title={SecurityAndLicenseData?.title}
        descriptionBlock={SecurityAndLicenseData?.descriptionBlock}
        description={SecurityAndLicenseData?.description}
        description2={SecurityAndLicenseData?.description2}
        backgroundImage={SecurityAndLicenseData?.backgroundImage}
      />

      <LeonFaq

      />

      <LeonFooter 
        logo={FooterData?.logo}
        footerText={FooterData?.footerText}
        socialTitle={FooterData?.socialTitle}
        footerLinksTitle={FooterData?.footerLinksTitle}
      />
    </Wrapper>
  );
}

// Функция для получения данных из Strapi
// async function getBisonCasinoHomePageData() {
//   try {
//     const res = await axios.get(`http://62.84.182.126:1337/api/bison-casino-home-pages?populate=*`);
//     return res.data.data[0] || {};
//   } catch (error) {
//     console.error("Ошибка при получении данных hero-banner из Strapi:", error);
//     return {};
//   }
// }

async function getBisonCasinoHomePageData() {
  try {
    const res = await axios.get(`${httpAddress}/api/home-pages?populate=*`);
    const homePageData = res.data.data[0];
    const pageImg = homePageData?.attributes?.pageImg?.data?.attributes?.url;
    // const pageBg = homePageData?.attributes?.pageBg?.data?.attributes?.url;

    return {
      ...homePageData,
    };
  } catch (error) {
    console.error("Ошибка при получении данных для Header из Strapi:", error);
    return {};
  };
}

    // return heroData || {};


// Функция для получения данных для Header из Strapi
async function getHeaderData() {
  try {
    const res = await axios.get(`${httpAddress}/api/headers?populate=*`);
    const headerData = res.data.data[0]; 
    const logoUrl = headerData?.attributes?.logo?.data?.attributes?.url;

    return {
      ...headerData,
      logoUrl: logoUrl ? `${httpAddress}${logoUrl}` : '/default-logo.png' // Проверка и добавление полного URL
    };
  } catch (error) {
    console.error("Ошибка при получении данных для Header из Strapi:", error);
    return {
      logoUrl: '/default-logo.png', // Логотип по умолчанию
      buttonText: 'Sign In', // Текст по умолчанию
    };
  };
}

// Функция для получения данных для Footer из Strapi
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

// Функция для получения данных из Strapi для InfoCasino
async function getInfoCasinoData() {
  try {
    const res = await axios.get(`${httpAddress}/api/info-casinos?populate=*`);
    const infoCasinoData = res.data.data[0];

    return infoCasinoData || {};
  } catch (error) {
    console.error("Ошибка при получении данных для InfoCasino из Strapi:", error);
    return {};
  }
}

// Функция для получения данных из Strapi для SecurityAndLicense
async function getSecurityAndLicense() {
  try {
    const res = await axios.get(`${httpAddress}/api/security-and-licenses?populate=*`);
    const SecurityAndLicense = res.data.data[0];

    return SecurityAndLicense || {};
  } catch (error) {
    console.error("Ошибка при получении данных для SecurityAndLicense из Strapi:", error);
    return {};
  }
}