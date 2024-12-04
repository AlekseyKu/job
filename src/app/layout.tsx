import "./globals.scss";
import localFont from "next/font/local";
import { Poppins, Barlow } from "next/font/google";
import { headers } from "next/headers";
import { Metadata } from "next";
import FetchSiteData from "@/utils/fetchSiteData";

const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;

const berlin = localFont({
  src: [
    {
      path: "../../public/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--tg-berlin-font-family",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tg-heading-font-family",
});

// Функция для генерации метаданных
export async function generateMetadata(): Promise<Metadata> {
  const host = headers().get("host");
  const siteData = await FetchSiteData(host || "");

  const primaryColor = siteData?.themePrimaryColor || "#defaultPrimary";
  const faviconUrl = siteData?.favicon.url;
  const fullFaviconUrl = `${httpAddress}${faviconUrl}` || "/favicon.png";

  return {
    title: siteData?.siteTitle || "Default Title",
    description: siteData?.siteDescription || "Default Description",
    icons: {
      icon: fullFaviconUrl,
    },
    alternates: {
      canonical: `https://${host}`, // Канонический URL для текущего сайта
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const host = headers().get("host");
  const siteData = await FetchSiteData(host || "");
  const localeLang = siteData?.localeLang || "en"; // Устанавливаем локаль из Strapi или "en" по умолчанию

  const imgUrl = siteData?.home_page?.pageImg.url
  const fullImgUrl = `${httpAddress}${imgUrl}`

  const primaryColor = siteData?.themePrimaryColor || "#defaultPrimary";
  const secondaryColor = siteData?.themeSecondaryColor || "#defaultSecondary";
  const PrimaryColorBG = siteData?.themeBGPrimaryColor;
  const SecondaryColorBG = siteData?.themeBGSecondaryColor;

  return (
    <html lang={localeLang}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content={primaryColor} />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${berlin.variable} ${poppins.variable} ${barlow.variable}`}
      >
        <style>{`
          :root {
            --tg-theme-primary: ${primaryColor};
            --tg-theme-secondary: ${secondaryColor};
            --tg-common-color-bg-primary: ${PrimaryColorBG};
            --tg-common-color-bg-secondary: ${SecondaryColorBG};
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
