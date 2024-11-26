import axios from 'axios';

export default async function handler(req, res) {
    const { host } = req.headers;

    try {
        // Получаем данные текущего сайта из Strapi
        const response = await axios.get(`https://your-strapi-api.com/api/allSite?filters[siteDomain][$eq]=${host}&populate=*`);
        const siteData = response.data.data[0];

        if (!siteData) {
            res.status(404).send('Sitemap not configured for this domain');
            return;
        }

        // Пример получения страниц (замените на свои данные)
        const pages = siteData.attributes.pages || []; // Предположим, это массив с данными страниц

        // Генерируем содержимое sitemap.xml
        const urls = pages.map(page => `
            <url>
                <loc>https://${host}${page.slug}</loc>
                <lastmod>${new Date(page.updatedAt).toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.8</priority>
            </url>
        `).join('');

        const sitemap = `
            <?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${urls}
            </urlset>
        `;

        res.setHeader('Content-Type', 'application/xml');
        res.status(200).send(sitemap.trim());
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to generate sitemap.xml');
    }
}
