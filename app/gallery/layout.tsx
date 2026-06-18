import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Nukkad Natak Gallery | Campaign Photos & Performances",
  description:
    "Explore highlights from our nukkad natak campaigns — CSR drives, government awareness, NGO programmes & brand activations. 15+ years of impactful nukkad natak performances.",
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
