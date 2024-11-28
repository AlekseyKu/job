export default function handler(req, res) {
    const { host } = req.headers;
  
    const disallowPaths = ["/admin", "/api", "/private"];
    const sitemapPath = `/api/sitemap.xml`;
  
    const robotsContent = `
  User-agent: *
  ${disallowPaths.map((path) => `Disallow: ${path}`).join("\n")}
  Allow: /
  Sitemap: https://${host}${sitemapPath}
    `;
  
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(robotsContent.trim());
  }
  