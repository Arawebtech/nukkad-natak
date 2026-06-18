import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Join Our Team - Careers at Nukkad Natak India",
  description:
    "Join India's leading Nukkad Natak and street play agency. Explore career opportunities with WI Events and be part of awareness campaigns that create real change.",
  path: "/team",
  keywords: [
    "nukkad natak careers",
    "street play jobs India",
    "theatre jobs India",
  ],
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
