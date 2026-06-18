import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Services - Nukkad Natak & Street Play India",
  description:
    "Explore our Nukkad Natak, CSR Campaign, IEC Activities, Awareness Programs and Street Play Services across India.",
  path: "/services",
  keywords: [
    "nukkad natak services",
    "street play services India",
    "CSR street play campaigns",
    "IEC activities street theatre",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
