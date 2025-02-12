// src/app/[site]/layout.tsx
import "@/app/globals.scss";
import { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { headers } from "next/headers";
import { dir } from "i18next";
import fetchSiteData from "@/utils/fetchSiteData";

export async function generateMetadata(): Promise<Metadata> {
  const host = headers().get("host");
  const siteData = await fetchSiteData(host || "");
  const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;
  const faviconUrl = siteData?.favicon?.url;
  const fullFaviconUrl = faviconUrl ? `${httpAddress}${faviconUrl}` : "/favicon.png";

  return {
    title: siteData?.siteTitle || "Default Title",
    description: siteData?.siteDescription || "Default Description",
    icons: { icon: fullFaviconUrl },
    alternates: { canonical: `https://${host}` },
  };
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng?: string };
}) {
  const host = headers().get("host");
  const siteData = await fetchSiteData(host || "");
  const localeLang = lng || siteData?.localeLang || "en";
  const primaryColor = siteData?.themePrimaryColor || "#defaultPrimary";
  const secondaryColor = siteData?.themeSecondaryColor || "#defaultSecondary";
  const PrimaryColorBG = siteData?.themeBGPrimaryColor;
  const SecondaryColorBG = siteData?.themeBGSecondaryColor;
  const idYandexMetrika = siteData?.idYandexMetrika || null;

  return (
    <html lang={localeLang} dir={dir(localeLang)}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content={primaryColor} />
        <link
          rel="preload"
          href="/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {idYandexMetrika && (
          <Script
            id="yandex-metrika"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){
                    (m[i].a=m[i].a||[]).push(arguments)
                  };
                  m[i].l=1*new Date();
                  for (var j=0; j<document.scripts.length; j++){
                    if(document.scripts[j].src===r){return;}
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0];
                  k.async=1;
                  k.src=r;
                  a.parentNode.insertBefore(k,a)
                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
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
      </Head>
      <body suppressHydrationWarning={true}>
        <style>{`
          :root {
            --tg-theme-primary: ${primaryColor};
            --tg-theme-secondary: ${secondaryColor};
            --tg-common-color-bg-primary: ${PrimaryColorBG};
            --tg-common-color-bg-secondary: ${SecondaryColorBG};
          }
        `}</style>
        {children}
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
      </body>
    </html>
  );
}
