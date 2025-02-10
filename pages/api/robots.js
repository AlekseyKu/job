export default function handler(req, res) {
  const { host } = req.headers;

  const disallowPaths = ["/admin", "/api", "/private"];
  const sitemapPath = `/api/sitemap.xml`;

  const robotsContent = `
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: *
${disallowPaths.map((path) => `Disallow: ${path}`).join("\n")}
Allow: /
Sitemap: https://${host}${sitemapPath}
  `;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(robotsContent.trim());
}
