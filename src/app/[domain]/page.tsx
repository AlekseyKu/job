// srс/app/page.tsx
import Wrapper from "@/layout/wrapper";
import Header from "../components/leon/main-header";
import HomePage from "../components/leon/main-home-page";
import TournamentArea from "../components/leon/tournaments/most-lucky-players";
import TournamentListArea from "../components/leon/tournaments/list-of-games";
import TopRatedGamesArea from "../components/leon/area-top-rated";
import TopPromotions from "../components/leon/nft-item/top-promotions";
import TopWinners from "../components/leon/nft-item/top-winners";
import FaqArea from "../components/leon/main-faq";
import Footer from "../components/leon/main-footer";
import EditorInfo from "../components/leon/editors/editor-info";
// import SeoMeta from "@/utils/seoMeta";
import { headers } from 'next/headers';
import { fetchSiteData } from "@/utils/fetchSiteData";
// import { getCurrencySymbol } from "@/services/currencyService";
import { currencyData } from "@/data/currency-data";

interface PageSection {
  id: string | number; // Уникальный идентификатор секции
  sectionName: string; // Название секции
}

// ✅ Генерируем статические пути для всех сайтов
export async function generateStaticParams() {
  const response = await fetch("https://cmsbase24.top/api/all-sites?populate=*");
  const allSites = await response.json();

  if (!allSites || !Array.isArray(allSites.data)) {
    console.error("Ошибка получения списка сайтов");
    return [];
  }

  // ✅ Оставляем только нужные сайты
  const allowedSites = ["localhost", "unique-casino1.fr"]; // 👈 Укажи нужные домены
  const filteredSites = allSites.data.filter((site: any) => 
    allowedSites.includes(site.siteDomain.replace(/^https?:\/\//, "").replace(/\/$/, ""))
  );

  return filteredSites.map((site: any) => ({
    domain: site.siteDomain.replace(/^https?:\/\//, "").replace(/\/$/, ""),
  }));

  // return allSites.data.map((site: any) => ({
  //   domain: site.siteDomain.replace(/^https?:\/\//, "").replace(/\/$/, ""),
  // }));
}

// ✅ Загружаем данные сайта для SSG
export default async function Home({ params }: { params: { domain: string } }) {
  const siteData = await fetchSiteData(params.domain);

  if (!siteData) {
    return <div>Hmmm: Site data not available</div>;
  }

  const locale = siteData.localeLang?.split("-")[0] || "en";
  const { currencySymbol, exchangeRate } =
    currencyData[locale as keyof typeof currencyData] ?? currencyData.en;

  const pageSections: PageSection[] = siteData.page_sections || [];
  const mostLuckyPlayersSection = pageSections.find(
    (section) => section.sectionName === "MOST LUCKY PLAYERS"
  );

  return (
    <Wrapper>
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
        colorTitleMain={siteData.colorTitleMain}
      />

      {/* ✅ Вернул PageSectionsRenderer, теперь всё на месте */}
      <PageSectionsRenderer
        pageSections={pageSections}
        siteData={siteData}
        currencySymbol={currencySymbol}
        exchangeRate={exchangeRate}
      />

      {siteData.editor_info && (
        <EditorInfo editorInfo={siteData.editor_info.editorInfo} titleMain={siteData.H1} />
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

// ✅ Вернул PageSectionsRenderer
const PageSectionsRenderer = ({
  pageSections,
  siteData,
  currencySymbol,
  exchangeRate,
}: {
  pageSections: PageSection[];
  siteData: any;
  currencySymbol: string;
  exchangeRate: number;
}) => {
  return (
    <>
      {pageSections.map((section) => {
        if (section.sectionName === "MOST LUCKY PLAYERS") return null;

        switch (section.sectionName) {
          case "LIST OF GAMES":
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
          case "OUR GAMES":
            return (
              <TopRatedGamesArea
                key={section.id}
                targetLink={siteData.targetLinkButton}
                buttonText={siteData.attributes.buttonText}
                pretitle={siteData.attributes.topGames.pretitle}
                title={siteData.attributes.topGames.title}
              />
            );
          case "Top promotions":
            return (
              <TopPromotions
                key={section.id}
                targetLink={siteData.targetLinkButton}
                buttonText={siteData.attributes.buttonText}
                promoImages={siteData.promoImg}
                sectionTitle={siteData.attributes.topPromotionsTitle}
                promoTitle={siteData.attributes.promo.title}
                promoSubtitle={siteData.attributes.promo.subtitle}
                promoPrice={siteData.attributes.promo.price}
                localeLang={siteData.localeLang}
                currencySymbol={currencySymbol}
                exchangeRate={exchangeRate}
              />
            );
          case "Top winners of the day":
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
