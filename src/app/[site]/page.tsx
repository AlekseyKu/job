// src/app/[site]/page.tsx
export const revalidate = 60;

import React from "react";
import { notFound } from "next/navigation";
import FetchSiteData from "@/utils/fetchSiteData";
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
import fetchMinimalSiteData, { MinimalSiteData } from "@/utils/fetchMinimalSiteData";


// Определяем интерфейс для секций (оставляем ваш код без изменений)
interface PageSection {
  id: string | number;
  sectionName: string;
}

// Функция для нормализации домена (также можно использовать реализацию из fetchSiteData)
function normalizeDomain(domain: string | undefined): string {
  if (!domain) return "";
  return domain.replace(/^https?:\/\//, '').split(':')[0];
}

// Функция generateStaticParams должна вернуть все параметры для генерации статических страниц
export async function generateStaticParams() {
  try {
    const response = await fetch("https://cmsbase24.top/api/all-sites?populate=*");
    const data = await response.json();
    const allSites = data?.data;
    
    if (!Array.isArray(allSites)) {
      console.error("Некорректный формат данных от Strapi:", allSites);
      return [];
    }
    
    // Извлекаем и нормализуем домены
    const sites = allSites
      .map((siteItem: any) => {
        return siteItem.siteDomain ? normalizeDomain(siteItem.siteDomain) : null;
      })
      .filter((domain: string | null) => domain !== null);
    
    // Убираем дубликаты
    const uniqueSites = Array.from(new Set(sites)) as string[];
    
    // Возвращаем массив объектов параметров, соответствующих динамическому сегменту [site]
    return uniqueSites.map((site) => ({ site }));
  } catch (error) {
    console.error("Ошибка при получении списка сайтов:", error);
    return [];
  }
}

export default async function Home({ params }: { params: { site: string } }) {
  const { site } = params;
  
  // Получаем данные сайта по идентификатору (домена)
  const siteData = await FetchSiteData(site);
  if (!siteData) {
    // Если данных нет, можно вернуть notFound(), чтобы отобразить страницу 404
    notFound();
  }
  
  const locale = siteData.locale;
  const currencyInfo = currencyData[locale as keyof typeof currencyData] || currencyData["en"];
  const currencySymbol = currencyInfo.currencySymbol;
  const exchangeRate = currencyInfo.exchangeRate;

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
        colorTitleMain={siteData.colorTitleMain}
      />

      {pageSections.map((section) => {
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
