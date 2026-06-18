import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import JsonLd from "@/components/seo/JsonLd";
import { fetchServiceBySlug } from "@/lib/api";
import { SITE_URL } from "@/lib/seo";
import type { ServiceDetail } from "@/types/service";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await fetchServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "Requested service not found.",
      robots: { index: false, follow: false },
    };
  }

  const title =
    service.seo?.metaTitle || `${service.name} | Nukkad Natak`;
  const description =
    service.seo?.metaDescription ||
    service.heroBanner?.description ||
    `Learn more about ${service.name}`;
  const ogImage = service.heroBanner?.image || "/images/logo.svg";

  return {
    title,
    description,
    keywords: service.seo?.keywords || [],
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title: service.seo?.metaTitle || service.name,
      description,
      url: `${SITE_URL}/services/${slug}`,
      type: "website",
      images: ogImage ? [{ url: ogImage, alt: service.name }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo?.metaTitle || service.name,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

function buildServiceJsonLd(service: ServiceDetail, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description:
      service.seo?.metaDescription ||
      service.heroBanner?.description ||
      service.name,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      "@type": "Organization",
      name: "WI Events - NukkadNatak.com",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    image: service.heroBanner?.image || `${SITE_URL}/images/logo.svg`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await fetchServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildServiceJsonLd(service, slug)} />
      <ServiceDetailClient initialService={service} />
    </>
  );
}
