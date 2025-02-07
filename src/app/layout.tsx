import "./globals.scss";
import localFont from "next/font/local";
import { Poppins, Barlow } from "next/font/google";
import { headers } from "next/headers";
import { Metadata } from "next";
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import FetchSiteData from "@/utils/fetchSiteData";
import Script from 'next/script';
import Image from "next/image";
import Head from "next/head";

const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;

// const berlin = localFont({
//   src: [
//     {
//       path: "../../public/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff2",
//       weight: "normal",
//       style: "normal",
//     },
//     {
//       path: "../../public/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff",
//       weight: "normal",
//       style: "normal",
//     },
//   ],
//   variable: "--tg-berlin-font-family",
// });

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   variable: "--tg-body-font-family",
// });

// const barlow = Barlow({
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   variable: "--tg-heading-font-family",
// });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata(): Promise<Metadata> {
  const host = headers().get("host");
  const siteData = await FetchSiteData(host || "");

  // const primaryColor = siteData?.themePrimaryColor || "#defaultPrimary";
  const faviconUrl = siteData?.favicon.url;
  const fullFaviconUrl = `${httpAddress}${faviconUrl}` || "/favicon.png";

  return {
    title: siteData?.siteTitle || "Default Title",
    description: siteData?.siteDescription || "Default Description",
    icons: {
      icon: fullFaviconUrl,
    },
    alternates: {
      canonical: `https://${host}`,
    },
  };
}

export default async function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode;
  params: { lng?: string };
}) {
  const host = headers().get("host");
  const siteData = await FetchSiteData(host || "");
  const localeLang = lng || siteData?.localeLang || "en";

  // const imgUrl = siteData?.home_page?.pageImg.url;
  // const fullImgUrl = imgUrl ? `${httpAddress}${imgUrl}` : "/default-pageImg.png";

  const primaryColor = siteData?.themePrimaryColor || "#defaultPrimary";
  const secondaryColor = siteData?.themeSecondaryColor || "#defaultSecondary";
  const PrimaryColorBG = siteData?.themeBGPrimaryColor;
  const SecondaryColorBG = siteData?.themeBGSecondaryColor;

  const idYandexMetrika = siteData?.idYandexMetrika || null;

  // console.log(fullImgUrl)

  return (
    <html lang={localeLang} dir={dir(localeLang)}>
      <Head>
        {/* 📌 Основные метатеги */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content={primaryColor} />
        {/* <link rel="icon" href={`${httpAddress}${siteData?.favicon?.url || "/favicon.png"}`} /> */}
        
        {/* Предварительная загрузка критического изображения (например, главного изображения страницы) */}
        {/* <link rel="preload" as="image" href={fullImgUrl} /> */}

        {/* 📌 Предварительная загрузка шрифта */}
        <link
          rel="preload"
          href="/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* 📌 Yandex.Metrika counter */}
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
              `
            }}
          />
        )}
      </Head>
      <body
        suppressHydrationWarning={true}
        // className={`${berlin.variable} ${poppins.variable} ${barlow.variable}`}
      >
        <style>{`
          :root {
            --tg-theme-primary: ${primaryColor};
            --tg-theme-secondary: ${secondaryColor};
            --tg-common-color-bg-primary: ${PrimaryColorBG};
            --tg-common-color-bg-secondary: ${SecondaryColorBG};
          }
        `}</style>

        {/* 📌 Оптимизированное изображение вместо <img> */}
        {/* <Image
          src={fullImgUrl}
          alt="Main Image"
          width={500}
          height={500}
          priority
        /> */}

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
        {children}
      </body>
    </html>
  );
}
