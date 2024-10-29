import "./globals.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Barlow } from "next/font/google";
import axios from "axios";

const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;

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

// Функция для получения данных SEO из Strapi
async function getSeoMetaTagsData() {
  try {
    const res = await axios.get(`${httpAddress}/api/seo-meta-tags?populate=*`);
    const SeoMetaTagData = res.data.data[0];
    
    // Проверка, существует ли favicon URL
    const faviconPath = SeoMetaTagData?.favicon?.url;
    const faviconUrl = faviconPath ? `${httpAddress}${faviconPath}` : "/favicon.ico";

    return {
      title: SeoMetaTagData?.title || "Default Title",
      description: SeoMetaTagData?.description || "Default description",
      favicon: faviconUrl, // Устанавливаем favicon URL
    };
  } catch (error) {
    console.error("Ошибка при получении данных для SeoMetaTags из Strapi:", error);
    return {
      title: "Fallback Title",
      description: "Fallback description",
      favicon: "/favicon.ico",
    };
  }
}

// Асинхронно устанавливаем metadata
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getSeoMetaTagsData();
  return {
    title: seoData.title,
    description: seoData.description,
    icons: {
      icon: seoData.favicon,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const seoData = await getSeoMetaTagsData();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={seoData.favicon} sizes="any" type="image/x-icon" />
        <meta name="description" content={seoData.description} />
        <title>{seoData.title}</title>
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
