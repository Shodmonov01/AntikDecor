const SitemapGenerator = require("sitemap-generator");

// Base URL of your site
const generator = SitemapGenerator("https://yourwebsite.com", {
  stripQuerystring: false,
  filepath: "/public/sitemap.xml",
});

// Register event listeners
generator.on("done", () => {
  console.log("Sitemap created!");
});

// Start the crawler
generator.start();
