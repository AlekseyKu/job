// src/utils/fetchSiteData.ts
import { getSpinText } from "../services/spinTextService";
import { extractLocale } from "@/utils/localeUtils";

interface SiteData {
  siteDomain: string;
  localeLang?: string;
  attributes: any;
  [key: string]: any;
}

export interface FetchedSiteData extends SiteData {
  locale: string;
  attributes: {
    buttonText: string;
    footerSocialText: string;
    topPromotionsTitle: string;
    topWinnersTitle: string;
    listOfGames: {
      pretitle: string;
      title: string;
    };
    mostLuckyPlayers: {
      pretitle: string;
      title: string;
    };
    topGames: {
      pretitle: string;
      title: string;
    };
    [key: string]: any;
  };
}

function normalizeDomain(domain: string): string {
  return domain.replace(/^https?:\/\//, "").split(":")[0];
}

async function fetchSiteData(host: string): Promise<FetchedSiteData | null> {
  try {
    // Запрашиваем только нужные поля: siteDomain, localeLang и attributes
    const res = await fetch(
      "https://cmsbase24.top/api/all-sites?fields[0]=siteDomain&fields[1]=localeLang&fields[2]=attributes",
      { cache: "force-cache" }
    );
    const data = await res.json();
    const allSites: SiteData[] = data?.data;
    if (!Array.isArray(allSites)) {
      console.error("Invalid data format:", allSites);
      return null;
    }
    const cleanHost = normalizeDomain(host);
    const siteData = allSites.find(
      (site) => normalizeDomain(site.siteDomain) === cleanHost
    );
    if (!siteData) {
      console.warn("Site not found for domain:", cleanHost);
      return null;
    }
    const localeLang = siteData.localeLang || "en-US";
    const locale = extractLocale(localeLang);
    const localizedTexts = {
      buttonText: getSpinText("button_text", localeLang),
      footerSocialText: getSpinText("footer_our_social_networks", localeLang),
      topPromotionsTitle: getSpinText("top_promotions", localeLang),
      topWinnersTitle: getSpinText("top_winners_of_the_day", localeLang),
      listOfGames: {
        pretitle: getSpinText("list_of_games.pretitle", localeLang),
        title: getSpinText("list_of_games.title", localeLang),
      },
      mostLuckyPlayers: {
        pretitle: getSpinText("most_lucky_players.pretitle", localeLang),
        title: getSpinText("most_lucky_players.title", localeLang),
      },
      topGames: {
        pretitle: getSpinText("top_games.pretitle", localeLang),
        title: getSpinText("top_games.title", localeLang),
      },
    };
    return {
      ...siteData,
      locale,
      attributes: {
        ...siteData.attributes,
        ...localizedTexts,
      },
    };
  } catch (error) {
    console.error("Error fetching site data:", error);
    return null;
  }
}

export default fetchSiteData;
