import "./globals.scss";
import localFont from "next/font/local";
import { Poppins, Barlow } from "next/font/google";
import { headers } from 'next/headers';
import FetchSiteData from "@/utils/fetchSiteData";



const berlin = localFont({
  src: [
    {
      path: "../../public/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff2",
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

  return (
    <html lang="en">
      <head>
        {/* Инлайн-стили для темы */}
        <style>{`
          :root {
            --tg-theme-primary: ${primaryColor};
            --tg-theme-secondary: ${secondaryColor};
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
