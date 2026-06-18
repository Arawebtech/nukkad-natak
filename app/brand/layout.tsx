import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Brand Promotion via Street Plays & Nukkad Natak",
  description:
    "Promote your brand with powerful Nukkad Natak street play campaigns that drive awareness, customer engagement, and memorable audience interactions across India.",
  path: "/brand",
  keywords: [
    "brand promotion street play",
    "nukkad natak brand activation",
    "street theatre marketing India",
  ],
});

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
