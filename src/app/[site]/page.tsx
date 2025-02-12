// src/app/[site]/page.tsx
export const revalidate = 60; // ISR обновление страницы раз в 60 секунд

import React from "react";
import { notFound } from "next/navigation";
import fetchSiteData from "@/utils/fetchSiteData";
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
import { currencyData } from "@/data/currency-data";

// Интерфейс параметров
interface Params {
  site: string;
}

// **Используем `generateStaticParams()` для генерации статических маршрутов**
export async function generateStaticParams(): Promise<Params[]> {
  try {
    const response = await fetch("https://cmsbase24.top/api/all-sites?populate=*", { cache: "no-cache" });
    const data = await response.json();
    const allSites = data?.data || [];

    return allSites.map((site: { siteDomain: string }) => ({ site: site.siteDomain.replace(/^https?:\/\//, '').split(':')[0] }));
  } catch (error) {
    console.error("Ошибка при получении списка сайтов:", error);
    return [];
  }
}

// **Асинхронный серверный компонент**
export default async function Home({ params }: { params: Params }) {
  const siteData = await fetchSiteData(params.site);

  if (!siteData) {
    notFound();
  }

  const locale = siteData.locale;
  const currencyInfo = currencyData[locale as keyof typeof currencyData] || currencyData["en"];
  const currencySymbol = currencyInfo.currencySymbol;
  const exchangeRate = currencyInfo.exchangeRate;

  const pageSections = siteData.page_sections || [];
  const mostLuckyPlayersSection = pageSections.find((section: any) => section.sectionName === 'MOST LUCKY PLAYERS');

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

      {pageSections.map((section: any) => {
        if (section.sectionName === 'MOST LUCKY PLAYERS') return null;
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

      {siteData.editor_info && (
        <EditorInfo 
          editorInfo={siteData.editor_info.editorInfo} 
          titleMain={siteData.H1}
        />
      )}

      {mostLuckyPlayersSection && (
        <TournamentArea
          key={mostLuckyPlayersSection.id}
          targetLink={siteData.targetLinkButton}
          buttonText={siteData.attributes.buttonText ?? "PLAY NOW"}
          pretitle={siteData.attributes.mostLuckyPlayers.pretitle}
          title={siteData.attributes.mostLuckyPlayers.title}
          currencySymbol={currencySymbol}
          exchangeRate={exchangeRate}
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
