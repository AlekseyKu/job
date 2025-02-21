// src/app/layout.tsx
// import "./globals.scss";
import "../../app/globals.scss"
import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import { fetchSiteData } from "@/utils/fetchSiteData";
import Script from "next/script";
import Image from "next/image";
import { Metadata } from "next";

// Константа для API Strapi
const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;

// ✅ Генерация метаданных (SSG-friendly)
export async function generateMetadata({ params }: { params: { domain: string } }): Promise<Metadata> {
  const siteData = await fetchSiteData(params.domain);

  if (!siteData) {
    return {
      title: "Default Title",
      description: "Default Description",
      icons: { icon: "/favicon.ico" },
    };
  }

  const faviconUrl = siteData.favicon?.url ? `${httpAddress}${siteData.favicon.url}` : "/favicon.ico";

  return {
    title: siteData.siteTitle || "Default Title",
    description: siteData.siteDescription || "Default Description",
    icons: { icon: faviconUrl },
    alternates: { canonical: `https://${params.domain}` },
  };
}

// ✅ Генерация статических путей
export async function generateStaticParams() {
  const response = await fetch("https://cmsbase24.top/api/all-sites?populate=*");
  const allSites = await response.json();

  if (!allSites || !Array.isArray(allSites.data)) {
    console.error("Ошибка получения списка сайтов");
    return [];
  }

  return allSites.data.map((site: any) => ({
    domain: site.siteDomain.replace(/^https?:\/\//, "").replace(/\/$/, ""),
  }));
}

// ✅ Основной компонент Layout
export default async function RootLayout({
  children,
  params: { domain, lng },
}: {
  children: React.ReactNode;
  params: { domain: string; lng?: string };
}) {
  // Теперь мы загружаем данные статически!
  const siteData = await fetchSiteData(domain);
  const localeLang = lng || siteData?.localeLang || "en";

  // Устанавливаем fallback цвета, если данные отсутствуют
  const primaryColor = siteData?.themePrimaryColor || "#defaultPrimary";
  const secondaryColor = siteData?.themeSecondaryColor || "#defaultSecondary";
  const PrimaryColorBG = siteData?.themeBGPrimaryColor;
  const SecondaryColorBG = siteData?.themeBGSecondaryColor;

  const idYandexMetrika = siteData?.idYandexMetrika || null;

  return (
    <html lang={localeLang} dir={dir(localeLang)}>
      <head>
        {/* ✅ Динамические стили темы */}
        <style>{`
          :root {
            --tg-theme-primary: ${primaryColor};
            --tg-theme-secondary: ${secondaryColor};
            --tg-common-color-bg-primary: ${PrimaryColorBG};
            --tg-common-color-bg-secondary: ${SecondaryColorBG};
          }
        `}</style>

        {/* ✅ Yandex.Metrika корректно загружается */}
        {idYandexMetrika && (
          <Script
            id="yandex-metrika"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(${idYandexMetrika}, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });
              `,
            }}
          />
        )}
      </head>
      <body suppressHydrationWarning={true}>
        {/* ✅ Noscript для Яндекс.Метрики */}
        {idYandexMetrika && (
          <noscript>
            <div>
              <Image
                src={`https://mc.yandex.ru/watch/${idYandexMetrika}`}
                alt="Yandex Metrika"
                width={1}
                height={1}
                style={{ position: "absolute", left: "-9999px" }}
              />
            </div>
          </noscript>
        )}

        {/* ✅ Основной контент */}
        {children}
      </body>
    </html>
  );
}
