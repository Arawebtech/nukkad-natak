import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Government Awareness Programs via Street Plays",
  description:
    "Street play campaigns for government organizations to spread awareness on schemes, policies, and social issues through engaging Nukkad Natak performances across India.",
  path: "/government-awareness",
  keywords: [
    "government awareness street play",
    "nukkad natak government campaigns",
    "IEC street theatre India",
  ],
});

export default function GovernmentAwarenessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
