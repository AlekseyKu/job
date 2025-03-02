import { NextResponse } from "next/server";
import fetchSiteData from "@/utils/fetchSiteData";

const cache = new Map(); // Локальный кэш в памяти (домен -> targetLink)
const CACHE_TTL = 10 * 60 * 1000; // Кэш живёт 10 минут

export async function middleware(req) {
  if (req.nextUrl.pathname === "/go") {
    const host = req.headers.get("host"); // Определяем домен пользователя
    const now = Date.now();
    console.log(`🌐 Запрос с домена: ${host}`);

    // 1️⃣ Проверяем, есть ли кэш
    if (cache.has(host)) {
      const cachedData = cache.get(host);
      
      // Если кэш свежий, редиректим мгновенно
      if (now - cachedData.timestamp < CACHE_TTL) {
        // console.log(`⚡ Используем кэш для ${host}: ${cachedData.targetLink}`);
        return NextResponse.redirect(cachedData.targetLink);
      } else {
        // console.log(`🔄 Кэш для ${host} устарел, запрашиваем новый targetLink...`);
        cache.delete(host); // Удаляем старый кэш
      }
    }

    try {
      // 2️⃣ Загружаем свежие данные из Strapi
      const siteData = await fetchSiteData(host);
    //   console.log("🔍 Данные из fetchSiteData:", JSON.stringify(siteData.targetLink, null, 2));

      if (siteData && siteData.targetLink) {
        // console.log(`✅ Найден targetLink: ${siteData.targetLink}`);

        // 3️⃣ Сохраняем в кэш
        cache.set(host, { targetLink: siteData.targetLink, timestamp: now });

        return NextResponse.redirect(siteData.targetLink);
      } else {
        console.warn("⚠️ targetLink not found in Strapi data!");
      }
    } catch (error) {
      console.error("❌ Error in middleware:", error);
    }

    return NextResponse.next(); // Если нет targetLink, продолжаем обычную работу
  }

  return NextResponse.next(); // Все остальные запросы проходят без изменений
}
