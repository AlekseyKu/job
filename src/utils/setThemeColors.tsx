"use client";

import { useEffect } from "react";
import FetchSiteData from "@/utils/fetchSiteData";

interface SetThemeColorsProps {
  host: string;
}

export default function SetThemeColors({ host }: SetThemeColorsProps) {
  useEffect(() => {
    async function fetchColors() {
      const siteData = await FetchSiteData(host);
      document.documentElement.style.setProperty("--tg-theme-primary", siteData?.themePrimaryColor || "#45f882");
      document.documentElement.style.setProperty("--tg-theme-secondary", siteData?.themeSecondaryColor || "#ffbe18");
    }
    fetchColors();
  }, [host]);

  return null; // Компонент не отображает ничего, только выполняет эффект
}
