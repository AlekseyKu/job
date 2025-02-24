// srс/app/page.tsx
import Wrapper from "@/layout/wrapper";
import Header from "./components/leon/main-header";
import HomePage from "./components/leon/main-home-page";
import TournamentArea from "./components/leon/tournaments/most-lucky-players";
import TournamentListArea from "./components/leon/tournaments/list-of-games";
import TopRatedGamesArea from "./components/leon/area-top-rated";
import TopPromotions from "./components/leon/nft-item/top-promotions";
import TopWinners from "./components/leon/nft-item/top-winners";
import FaqArea from "./components/leon/main-faq";
import Footer from "./components/leon/main-footer";
import EditorInfo from "./components/leon/editors/editor-info";
// import SeoMeta from "@/utils/seoMeta";
import { headers } from 'next/headers';
import FetchSiteData from "@/utils/fetchSiteData";
// import { getCurrencySymbol } from "@/services/currencyService";
import { currencyData } from "@/data/currency-data";

interface PageSection {
  id: string | number; // Уникальный идентификатор секции
  sectionName: string; // Название секции
}

const PageSectionsRenderer = ({
  pageSections,
  siteData,
  currencySymbol,
  exchangeRate,
}: {
  pageSections: PageSection[],
  siteData: any, // TODO Можно заменить any на конкретный тип, если потребуется
  currencySymbol: string,
  exchangeRate: number,
}) => {
  return (
    <>
      {pageSections.map((section) => {
        if (section.sectionName === 'MOST LUCKY PLAYERS') return null; // Исключаем этот блок и переносим после EditorInfo

        switch (section.sectionName) {
          case 'LIST OF GAMES':
            return (
              <TournamentListArea 
                key={section.id} 
                targetLink={siteData.targetLinkButton} 
                buttonText={siteData.attributes.buttonText}
                pretitle={siteData.attributes.listOfGames.pretitle}
                title={siteData.attributes.listOfGames.title}
                currencySymbol={currencySymbol}
                exchangeRate={exchangeRate}
                tournamentBoxData={siteData.attributes.tournament_box}
              />
            );
          case 'OUR GAMES':
            return (
              <TopRatedGamesArea 
                key={section.id} 
                targetLink={siteData.targetLinkButton} 
                buttonText={siteData.attributes.buttonText}
                pretitle={siteData.attributes.topGames.pretitle}
                title={siteData.attributes.topGames.title}
              />
            );
          case 'Top promotions':
            return (
              <TopPromotions 
                key={section.id} 
                targetLink={siteData.targetLinkButton}
                buttonText={siteData.attributes.buttonText}
                promoImages={siteData.promoImg}
                sectionTitle={siteData.attributes.topPromotionsTitle}
                // promoData={siteData.attributes.promo}
                promoTitle={siteData.attributes.promo.title}
                promoSubtitle={siteData.attributes.promo.subtitle}
                promoPrice={siteData.attributes.promo.price}
                localeLang={siteData.localeLang}
                currencySymbol={currencySymbol}
                exchangeRate={exchangeRate}
              />
            );
          case 'Top winners of the day':
            return (
              <TopWinners 
                key={section.id} 
                targetLink={siteData.targetLinkButton} 
                buttonText={siteData.attributes.buttonText}
                sectionTitle={siteData.attributes.topWinnersTitle}
                currencySymbol={currencySymbol}
                exchangeRate={exchangeRate}
              />
            );
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

  // Если siteData отсутствует, возвращаем fallback UI (например, сообщение об ошибке)
  if (!siteData) {
    return <div>Error: Site data not available</div>;
  }

  // const locale = siteData.localeLang ? siteData.localeLang.split("-")[0] : "en"; 
  // const currencyInfo = currencyData[locale as keyof typeof currencyData] || currencyData["en"];
  // const currencySymbol = currencyInfo.currencySymbol;
  // const exchangeRate = currencyInfo.exchangeRate;

  // Обработчик курса и символа валюты
  const locale = siteData.localeLang?.split("-")[0] || "en";
  const { currencySymbol, exchangeRate } = currencyData[locale as keyof typeof currencyData] ?? currencyData.en;


  // if (typeof window === "undefined") {
  //   console.log("Server log:", locale);
  //   console.log("Server log:", currencySymbol);
  //   console.log("Server log:", exchangeRate);
  // }

  const pageSections: PageSection[] = siteData.page_sections || [];
  const mostLuckyPlayersSection = pageSections.find(
    (section) => section.sectionName === 'MOST LUCKY PLAYERS'
  );

  return (
    <Wrapper>
      {/* <SeoMeta
        title={siteData.siteTitle || "Default Title"}
        description={siteData.siteDescription || "Default Description"}
        favicon={siteData.favicon || "/favicon.ico"}
      /> */}
      <Header
        logo={siteData.siteLogo}
        sizeLogo={siteData.sizeLogo}
        targetLink={siteData.targetLinkButton}
        buttonText={siteData.attributes.buttonText ?? "PLAY NOW"}
      />
      <HomePage
        pretitle={siteData.home_page?.pretitle}
        title={siteData.home_page?.title}
        subtitle={siteData.home_page?.subtitle}
        buttonText={siteData.attributes.buttonText ?? "PLAY NOW"}
        targetLink={siteData.targetLinkButton}
        pageImg={siteData.home_page?.pageImg}
        pageBg={siteData.home_page?.pageBg}
        // colorTitleMain={siteData.colorTitleMain}
      />

      <PageSectionsRenderer 
        pageSections={pageSections} 
        siteData={siteData}
        currencySymbol={currencySymbol}
        exchangeRate={exchangeRate}
      />

      {siteData.editor_info && (
        <EditorInfo 
          editorInfo={siteData.editor_info.editorInfo} 
          titleMain={siteData.H1}
        />
      )}

      {/* Блок для MOST LUCKY PLAYERS */}
      {mostLuckyPlayersSection && (
        <TournamentArea
          key={mostLuckyPlayersSection.id}
          targetLink={siteData.targetLinkButton}
          buttonText={siteData.attributes.buttonText ?? "PLAY NOW"}
          pretitle={siteData.attributes.mostLuckyPlayers.pretitle}
          title={siteData.attributes.mostLuckyPlayers.title}
          currencySymbol={currencySymbol}
          exchangeRate={exchangeRate}
          tournamentBoxData={siteData.attributes.tournament_box}
        />
      )}

      {siteData.faq && (
        <FaqArea 
          pretitle={siteData.faq.pretitle} 
          title={siteData.faq.title} 
          faqRow={siteData.faq.faqRow || []} 
        />
      )}

      <Footer 
        logo={siteData.siteLogo}
        footerText={siteData.siteDescription}
        socialTitle={siteData.attributes.footerSocialText ?? ""}
        targetLink={siteData.targetLinkButton}
        siteName={siteData.siteName}
      />
    </Wrapper>
  );
}
