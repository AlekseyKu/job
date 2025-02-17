import Wrapper from "@/layout/wrapper";
import Header from "./components/leon/main-header";
import HomePage from "./components/leon/main-home-page";
import Footer from "./components/leon/main-footer";
import FaqArea from "./components/leon/main-faq";
import PageSectionsRenderer from "./components/PageSections";
import FetchSiteData from "@/utils/fetchSiteData";
import { getCurrency } from "@/hooks/useCurrency";
import { headers } from "next/headers";

export default async function Home() {
  const host = headers().get("host");
  const siteData = await FetchSiteData(host || "");

  // Если siteData отсутствует, возвращаем fallback UI (например, сообщение об ошибке)
  if (!siteData) {
    return <div>Error: Site data not available</div>;
  }

  const { currencySymbol, exchangeRate } = getCurrency(siteData.localeLang || "en");
  const pageSections = siteData.page_sections || [];

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

      {/* Рендер всех секций, включая EditorInfo и TournamentArea */}
      <PageSectionsRenderer
        pageSections={pageSections}
        siteData={siteData}
        currencySymbol={currencySymbol}
        exchangeRate={exchangeRate}
      />

      {/* FAQ */}
      {siteData.faq && (
        <FaqArea
          pretitle={siteData.faq.pretitle}
          title={siteData.faq.title}
          faqRow={siteData.faq.faqRow || []}
        />
      )}

      {/* Footer */}
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
