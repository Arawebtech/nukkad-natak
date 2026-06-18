import { MetadataRoute } from "next";
import { fetchServices } from "@/lib/api";
import { SITE_URL } from "@/lib/seo";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: SITE_URL, priority: 1, changeFrequency: "weekly" },
  { url: `${SITE_URL}/about`, priority: 0.9, changeFrequency: "monthly" },
  { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${SITE_URL}/brand`, priority: 0.85, changeFrequency: "monthly" },
  {
    url: `${SITE_URL}/government-awareness`,
    priority: 0.85,
    changeFrequency: "monthly",
  },
  { url: `${SITE_URL}/gallery`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${SITE_URL}/team`, priority: 0.75, changeFrequency: "monthly" },
  { url: `${SITE_URL}/enquiry`, priority: 0.85, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = await fetchServices();

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
