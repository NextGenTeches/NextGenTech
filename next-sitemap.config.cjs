/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nextgenteches.com", // ✅ your live domain
  generateRobotsTxt: true, // also generates robots.txt automatically
  sitemapSize: 7000, // splits large sites into multiple sitemap files if needed
  changefreq: "weekly",
  priority: 0.7,
  generateIndexSitemap: false, // ✅ allows index sitemap for scalability
  exclude: ["/api/*", "/server-sitemap.xml"], // optional: skip API or dynamic paths
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/*"] },
    ],
    additionalSitemaps: [
      "https://www.nextgenteches.com/sitemap.xml", // ✅ include main sitemap
    ],
  },
};
