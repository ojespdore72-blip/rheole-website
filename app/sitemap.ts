import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rheole.com";
  
  const routes = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/manifesto",
    "/privacy",
    "/security",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/about" ? 0.8 : 0.5,
  }));
}
