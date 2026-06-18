import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us - Nukkad Natak Street Play Agency India",
  description:
    "Learn about WI Events (nukkadnatak.com), India's leading Nukkad Natak agency for street play campaigns, CSR programs, and government awareness initiatives.",
  path: "/about",
  keywords: [
    "about nukkad natak",
    "street play agency India",
    "WI Events",
    "nukkad natak group",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
