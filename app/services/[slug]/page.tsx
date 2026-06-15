// app/services/[slug]/page.tsx

import { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

async function getService(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services/slug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const data = await getService(slug);

  console.log("get single data",data)
  const service = data?.data;

  if (!service) {
    return {
      title: "Service Not Found | Nukkad Natak",
      description: "Requested service not found.",
    };
  }

  return {
    title:
      service?.seo?.metaTitle ||
      `${service.name} | Nukkad Natak`,

    description:
      service?.seo?.metaDescription ||
      service?.heroBanner?.description ||
      `Learn more about ${service.name}`,

    keywords: service?.seo?.keywords || [],

    openGraph: {
      title:
        service?.seo?.metaTitle ||
        service.name,

      description:
        service?.seo?.metaDescription ||
        service?.heroBanner?.description,

      images: service?.heroBanner?.image
        ? [service.heroBanner.image]
        : [],

      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title:
        service?.seo?.metaTitle ||
        service.name,

      description:
        service?.seo?.metaDescription ||
        service?.heroBanner?.description,

      images: service?.heroBanner?.image
        ? [service.heroBanner.image]
        : [],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ServiceDetailClient slug={slug} />;
}