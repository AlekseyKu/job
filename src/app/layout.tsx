import "./globals.scss";
import localFont from "next/font/local";
import { Poppins, Barlow } from "next/font/google";
import { headers } from 'next/headers';
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const host = headers().get('host');
  const siteData = await FetchSiteData(host || '');
  const primaryColor = siteData?.themePrimaryColor || "#defaultPrimary";
  const secondaryColor = siteData?.themeSecondaryColor || "#defaultSecondary";
  const PrimaryColorBG = siteData?.themeBGPrimaryColor;
  const SecondaryColorBG = siteData?.themeBGSecondaryColor;


  const faviconUrl = siteData?.favicon.url 
  const fullFaviconUrl = `${httpAddress}${faviconUrl}` || "/favicon.png"; // Путь к favicon
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={fullFaviconUrl} />
        <style>{`
          :root {
            --tg-theme-primary: ${primaryColor};
            --tg-theme-secondary: ${secondaryColor};
            --tg-common-color-bg-primary: ${PrimaryColorBG};
            --tg-common-color-bg-secondary: ${SecondaryColorBG};
          }
        `}</style>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${berlin.variable} ${poppins.variable} ${barlow.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
