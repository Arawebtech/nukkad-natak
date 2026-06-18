import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Company Enquiry - Book Nukkad Natak Street Play Services",
  description:
    "Tell us about your campaign requirements and our Nukkad Natak team will connect with you within 24 hours for CSR, IEC, and awareness programs across India.",
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
