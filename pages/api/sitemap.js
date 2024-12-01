import fetchSiteData from "@/utils/fetchSiteData";

export default async function handler(req, res) {
  const host = req.headers.host; // Получаем текущий хост

  try {
    // Используем fetchSiteData для получения данных о текущем сайте
    const siteData = await fetchSiteData(host);

    if (!siteData) {
      res.status(404).send("Site not found");
      return;
    }

    // Генерируем `sitemap.xml` для текущего сайта
    const siteUrl = siteData.siteDomain || `http://${host}`;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <url>
        <loc>${siteUrl}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>`;

    // Устанавливаем заголовок и возвращаем `sitemap.xml`
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  } catch (error) {
    console.error("Ошибка генерации sitemap:", error);
    res.status(500).end();
  }
}
