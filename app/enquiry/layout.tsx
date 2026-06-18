import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Enquire Now | Book a Nukkad Natak Performance",
  description:
    "Looking to book a nukkad natak performance? Fill out our enquiry form and get a custom quote within 24 hours. CSR, government, NGO & brand campaigns.",
  path: "/enquiry",
  keywords: [
    "nukkad natak enquiry",
    "book street play India",
    "street play booking",
    "contact nukkad natak",
  ],
});

export default function EnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
