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
import SeoMeta from "@/utils/seoMeta";
import { headers } from 'next/headers';
import FetchSiteData from "@/utils/fetchSiteData";



const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;
const UID = 0


const PageSectionsRenderer = ({ pageSections, siteData }: { pageSections: any[], siteData: any }) => {
  return (
    <>
      {pageSections.map((section) => {
        switch (section.sectionName) {
          case 'MOST LUCKY PLAYERS':
            return <TopWinnersArea 
              key={section.id} 
              targetLink={siteData.targetLinkButton}
              buttonText={siteData?.home_page.buttonText}
              promoImages={siteData.promoImg}
            />;
          case 'LIST OF GAMES':
            return <TournamentListArea 
              key={section.id} 
              targetLink={siteData.targetLinkButton} 
              buttonText={siteData?.home_page.buttonText}
          />;
          case 'OUR GAMES':
            return <TopRatedGamesArea 
              key={section.id} 
              targetLink={siteData.targetLinkButton} 
              buttonText={siteData?.home_page.buttonText}
          />;
          case 'Top promotions':
            return <TournamentArea 
              key={section.id} 
              targetLink={siteData.targetLinkButton} 
              buttonText={siteData?.home_page.buttonText} 
            />;
          case 'Top winners of the day':
            return <TopWinnersArea2 
              key={section.id} 
              targetLink={siteData.targetLinkButton} 
              buttonText={siteData?.home_page.buttonText}
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
        // buttonText={siteData?.header?.buttonText}
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

      <PageSectionsRenderer 
        pageSections={pageSections} 
        siteData={siteData}
      />

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
        // socialTitle={siteData?.footer?.socialTitle}
        targetLink={siteData?.targetLink}
        siteName={siteData?.siteName}
      />
    </Wrapper>
  );
}

