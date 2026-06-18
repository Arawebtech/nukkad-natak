import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Work Gallery - Nukkad Natak Performances Across India",
  description:
    "Explore our gallery of live Nukkad Natak performances at schools, colleges, corporate events, CSR campaigns, and government awareness drives across India.",
  path: "/gallery",
  keywords: [
    "nukkad natak gallery",
    "street play performances India",
    "street theatre photos",
  ],
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
