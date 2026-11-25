import type { MetadataRoute } from "next";

const BASE_URL = "https://bigthingssoftware.org";

async function getSoftwareSlugs(): Promise<string[]> {
  // TODO: replace with a real Hub API client when the software catalog ships.
  return [];
}

async function getArticleSlugs(): Promise<string[]> {
  // TODO: replace with a Sanity client query for articles once wired up.
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/hub`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/hub/bundles`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/hub/categories`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/hub/new`, changeFrequency: "daily", priority: 0.6 },
    { url: `${BASE_URL}/hub/funded`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/hub/discover`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/hub/discover/guides`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/hub/discover/newsletter`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about/team`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/about/transparency`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/about/partners`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about/press`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/support`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/support/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/support/builders`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/support/communities`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/support/contact`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/donate`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/legal`, changeFrequency: "monthly", priority: 0.2 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${BASE_URL}/security`, changeFrequency: "monthly", priority: 0.4 },
  ];

  const [softwareSlugs, articleSlugs] = await Promise.all([
    getSoftwareSlugs(),
    getArticleSlugs(),
  ]);

  const softwareRoutes: MetadataRoute.Sitemap = softwareSlugs.map((slug) => ({
    url: `${BASE_URL}/hub/${slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/hub/discover/${slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...softwareRoutes, ...articleRoutes];
}
