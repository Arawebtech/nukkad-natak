import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nukkadnatak.com";

export const SITE_NAME = "NukkadNatak.com";

export const DEFAULT_DESCRIPTION =
  "Nukkad Natak Group for CSR campaigns, IEC activities, government awareness programs, and street play events across India.";

export const DEFAULT_KEYWORDS = [
  "Nukkad Natak",
  "street play",
  "street play agency India",
  "CSR campaigns",
  "IEC activities",
  "government awareness programs",
  "nukkad natak group",
];

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
};

export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  keywords,
  noIndex = false,
  ogImage = "/images/logo.svg",
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WI Events - NukkadNatak.com",
  alternateName: "Nukkad Natak Group India",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  description: DEFAULT_DESCRIPTION,
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Nukkad Natak",
    "Street Play",
    "CSR Campaigns",
    "Government Awareness Programs",
    "IEC Activities",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: "WI Events - NukkadNatak.com",
    url: SITE_URL,
  },
};
