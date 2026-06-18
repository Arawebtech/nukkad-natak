import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Join Our Nukkad Natak Team | Artists & Performers",
  description:
    " Are you a performer, actor or writer passionate about nukkad natak? Join NukkadNatak.com — apply now and be part of our nukkad natak group nationwide.",
  path: "/join-our-team",
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
