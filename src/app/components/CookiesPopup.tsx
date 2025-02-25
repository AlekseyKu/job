"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchPrivacyPolicy } from "@/utils/fetchPrivacyPolicy";
import fetchSiteData from "@/utils/fetchSiteData";

const CookiesPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [locale, setLocale] = useState("en"); // ✅ Дефолтная локаль
  const [policyTitle, setPolicyTitle] = useState("Privacy Policy");
  const [buttonText, setButtonText] = useState("Accept"); // ✅ Дефолтный текст
  const router = useRouter();

  useEffect(() => {
    const isAccepted = localStorage.getItem("cookiesAccepted");
    if (!isAccepted) {
      setShowPopup(true);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const host = window.location.hostname;
        // console.log(`🌍 Получен хост с клиента: ${host}`);

        const siteData = await fetchSiteData(host);

        if (siteData?.locale) {
          // console.log(`🌍 Определенная локаль из API: ${siteData.locale}`);
          setLocale(siteData.locale);

          const policy = await fetchPrivacyPolicy(siteData.locale);
          if (policy) {
            setPopupText(policy.popupDescription || "Мы используем cookies...");
            setPolicyTitle(policy.title || "Privacy Policy");
            setButtonText(policy.buttonText || "Accept");
          } else {
            console.log("⚠️ Политика конфиденциальности не найдена.");
          }
        } else {
          console.log("⚠️ Не удалось получить локаль из API. Используем en.");
        }
      } catch (error) {
        console.log("❌ Ошибка при загрузке данных для CookiesPopup:", error);
      }
    }

    fetchData();
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowPopup(false);
  };

  const goToPrivacyPolicy = () => {
    router.push(`/privacy-policy`);
  };

  if (!showPopup || !popupText) return null;

  return (
    <div className="cookies-popup">
      <p>{popupText}</p>
      <div className="buttons-container">
        <button onClick={goToPrivacyPolicy}>{policyTitle}</button>
        <button onClick={acceptCookies}>{buttonText}</button>
      </div>
    </div>
  );
};

export default CookiesPopup;
