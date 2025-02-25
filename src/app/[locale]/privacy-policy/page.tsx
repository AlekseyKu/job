import { fetchPrivacyPolicy } from "@/utils/fetchPrivacyPolicy";
import { fetchSiteData } from "@/utils/fetchSiteData";
import { Locale, locales } from "@/types/locales";
import parse from "html-react-parser";
import { headers } from "next/headers";
import Header from "@/app/components/leon/main-header"
import Footer from "@/app/components/leon/main-footer";


export function generateStaticParams() {
  return Object.keys(locales).map((locale) => ({ locale }));
}

// ✅ Функция для рандомного email
const generateRandomEmail = (siteName: string) => {
  const prefixes = ["info", "support", "help", "contact", "assistance", "service"];
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)]; // Выбираем случайный префикс
  return `${randomPrefix}@${siteName.replace(/\s+/g, "").toLowerCase()}.com`; // Формируем email
};

// ✅ Функция замены переменных в тексте
const replacePolicyVariables = (text: string, siteName: string, siteDomain: string) => {
  const randomEmail = generateRandomEmail(siteName); // Генерируем email
  return text
    .replace(/\[\[VAR_POLICY_SITENAME\]\]/g, siteName)
    .replace(/\[\[VAR_POLICY_DOMAIN\]\]/g, siteDomain)
    .replace(/\[\[VAR_POLICY_EMAIL\]\]/g, randomEmail);
};

export default async function PrivacyPolicy({ params }: { params: { locale: Locale } }) {
  const policy = await fetchPrivacyPolicy(params.locale);
  const host = headers().get("host");
  const siteData = await fetchSiteData(host || "");

  if (!policy || !siteData) {
    return <div>Ошибка: Политика конфиденциальности не найдена</div>;
  }

  // ✅ Динамическая подстановка значений
  const processedText = replacePolicyVariables(policy.text, siteData.siteName, siteData.siteDomain);

  return (
    <div className="privacy-policy-container">
      <h1>{policy.title}</h1>
      <div className="privacy-policy-content">
        {parse(processedText)}
      </div>
      <Footer 
        logo={siteData.siteLogo}
        footerText={siteData.siteDescription}
        socialTitle={siteData.attributes.footerSocialText ?? ""}
        targetLink={siteData.targetLinkButton}
        siteName={siteData.siteName}
      />
    </div>
  );
}
