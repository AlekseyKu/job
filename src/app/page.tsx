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
import SeoMeta from "@/utils/seoMeta";
import { headers } from 'next/headers';
import FetchSiteData from "@/utils/fetchSiteData";



const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;
const UID = 0


interface PageSection {
  id: string | number; // Уникальный идентификатор секции
  sectionName: string; // Название секции
  // [key: string]: any;  // Другие свойства, которые могут присутствовать
}


const PageSectionsRenderer = ({ pageSections, siteData }: { pageSections: PageSection[], siteData: any }) => {
  return (
    <>
      {pageSections.map((section) => {
        if (section.sectionName === 'MOST LUCKY PLAYERS') return null; // Исключаем рендер этого блока здесь

        switch (section.sectionName) {
          // case 'MOST LUCKY PLAYERS':
          //   return <TournamentArea 
          //   key={section.id} 
          //   targetLink={siteData.targetLinkButton} 
          //   buttonText={siteData?.home_page.buttonText}
          //   pretitle={siteData.attributes?.mostLuckyPlayers.pretitle}
          //   title={siteData.attributes?.mostLuckyPlayers.title}
          //   />;
          case 'LIST OF GAMES':
            return <TournamentListArea 
              key={section.id} 
              targetLink={siteData.targetLinkButton} 
              buttonText={siteData.attributes?.ButtonText}
              pretitle={siteData.attributes?.listOfGames.pretitle}
              title={siteData.attributes?.listOfGames.title}
          />;
          case 'OUR GAMES':
            return <TopRatedGamesArea 
              key={section.id} 
              targetLink={siteData.targetLinkButton} 
              buttonText={siteData.attributes?.ButtonText}
              pretitle={siteData.attributes?.topGames.pretitle}
              title={siteData.attributes?.topGames.title}
          />;
          case 'Top promotions':
            return <TopPromotions 
              key={section.id} 
              targetLink={siteData.targetLinkButton}
              buttonText={siteData.attributes?.ButtonText}
              promoImages={siteData.promoImg}
              sectionTitle={siteData.attributes?.topPromotionsTitle}
            />;
          case 'Top winners of the day':
            return <TopWinners 
              key={section.id} 
              targetLink={siteData.targetLinkButton} 
              buttonText={siteData.attributes?.ButtonText}
              sectionTitle={siteData.attributes?.topWinnersTitle}
          />;
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
  const pageSections: PageSection[] = siteData?.page_sections || [];

  const mostLuckyPlayersSection = pageSections.find(
    (section) => section.sectionName === 'MOST LUCKY PLAYERS'
  );

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
        sizeLogo={siteData?.sizeLogo}
        targetLink={siteData?.targetLinkButton}
        buttonText={siteData.attributes?.ButtonText} // Используем текст из кэша
        />
      {/* <main className="main--area"> */}

      <HomePage
        pretitle={siteData?.home_page?.pretitle}
        title={siteData?.home_page?.title}
        subtitle={siteData?.home_page?.subtitle}
        buttonText={siteData.attributes?.ButtonText}
        targetLink={siteData?.targetLinkButton}
        pageImg={siteData?.home_page?.pageImg}
        pageBg={siteData?.home_page?.pageBg}
        colorTitleMain={siteData?.colorTitleMain}
      />

      <PageSectionsRenderer 
        pageSections={pageSections} 
        siteData={siteData}
      />

      <EditorInfo 
        editorInfo={siteData?.editor_info?.editorInfo} 
        titleMain={siteData?.H1}
      />

      {/* Рендер блока 'MOST LUCKY PLAYERS' после EditorInfo */}
      {mostLuckyPlayersSection && (
        <TournamentArea
          key={mostLuckyPlayersSection.id}
          targetLink={siteData.targetLinkButton}
          buttonText={siteData.attributes?.ButtonText}
          pretitle={siteData.attributes?.mostLuckyPlayers.pretitle}
          title={siteData.attributes?.mostLuckyPlayers.title}
        />
      )}


      {/* Условный рендеринг блока FaqArea */}
      {siteData?.faq && (
        <FaqArea 
          pretitle={siteData?.faq?.pretitle} 
          title={siteData?.faq?.title} 
          faqRow={siteData?.faq?.faqRow || []} 
        />
      )}

      <Footer 
        logo={siteData?.siteLogo}
        footerText={siteData?.siteDescription}
        socialTitle={siteData.attributes?.footerSocialText}
        targetLink={siteData?.targetLink}
        siteName={siteData?.siteName}
      />
    </Wrapper>
  );
}

