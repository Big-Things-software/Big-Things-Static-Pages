// TODO: Sanity implementation
import type { MetadataRoute } from "next";

const BASE_URL = "https://bigthingssoftware.org";


async function getEventSlugs(): Promise<string[]> {
  // const events = await sanityClient.fetch(`*[_type == "event"]{ "slug": slug.current }`);
  // return events.map((e: any) => e.slug);
  return [];
}

async function getProjectSlugs(): Promise<string[]> {
  // const projects = await getProjects(); // from the Big Things API
  // return projects.map((p: any) => p.slug);
  return [];
}

async function getBlogSlugs(): Promise<string[]> {
  // const posts = await sanityClient.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  // return posts.map((p: any) => p.slug);
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about/team`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/about/history`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/events`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/donate`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/partners`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const [eventSlugs, projectSlugs, blogSlugs] = await Promise.all([
    getEventSlugs(),
    getProjectSlugs(),
    getBlogSlugs(),
  ]);

  const eventRoutes: MetadataRoute.Sitemap = eventSlugs.map((slug) => ({
    url: `${BASE_URL}/events/${slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...eventRoutes, ...projectRoutes, ...blogRoutes];
}
