import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tsebulenko-agency.ru",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
        {
      url: "https://tsebulenko-agency.ru#contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://tsebulenko-agency.ru#about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://tsebulenko-agency.ru#portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://tsebulenko-agency.ru#services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
        {
      url: "https://tsebulenko-agency.ru#solutions",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
        {
      url: "https://tsebulenko-agency.ru#process",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
        {
      url: "https://tsebulenko-agency.ru#benefits",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
