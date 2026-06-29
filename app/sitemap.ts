import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rheole.com";
  
  const routes = [
    "",
    "/platform",
    "/models",
    "/technology",
    "/architecture",
    "/developers",
    "/docs",
    "/api-reference",
    "/sdks",
    "/tutorials",
    "/integrations",
    "/solutions",
    "/industries",
    "/case-studies",
    "/about",
    "/careers",
    "/research",
    "/blog",
    "/changelog",
    "/press",
    "/events",
    "/brand",
    "/community",
    "/trust-center",
    "/security",
    "/privacy",
    "/support",
    "/contact",
    "/manifesto",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.5,
  }));
}
