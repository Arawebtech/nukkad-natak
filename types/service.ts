// types/service.ts

export interface ServiceThumbnail {
  imageUrl: string;
  publicId: string;
}

export interface ServiceHeroBanner {
  image: string;
  publicId: string;
  heading: string;
  description: string;
  text: string;
}

export interface ServiceParagraph {
  _id?: string;
  text: string;
}

export interface ServiceSection {
  _id?: string;
  title: string;
  title2Text: string;
  showTitle2: boolean;
  paragraphs: ServiceParagraph[];
}

export interface ProcessStep {
  _id?: string;
  num: string;
  title: string;
  desc: string;
}

export interface ProcessSection {
  title: string;
  title2Text: string;
  showTitle2: boolean;
  description: string;
  steps: ProcessStep[];
}

export interface Faq {
  _id?: string;
  question: string;
  answer: string;
}

export interface FaqSection {
  title: string;
  title2Text: string;
  showTitle2: boolean;
  faqs: Faq[];
}

export interface ServiceSeo {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

// Full service (single detail page)
export interface ServiceDetail {
  _id: string;
  name: string;
  slug: string;
  thumbnail: ServiceThumbnail;
  heroBanner: ServiceHeroBanner;
  headingDesc: ServiceSection[];
  processSection: ProcessSection;
  faqSection: FaqSection;
  seo: ServiceSeo;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

// Lightweight type used in the services listing
export interface ServiceCard {
  _id: string;
  name: string;
  slug: string;
  thumbnail: ServiceThumbnail;
  heroBanner: Pick<ServiceHeroBanner, "heading" | "description">;
  seo: Pick<ServiceSeo, "metaTitle">;
}