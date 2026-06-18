// import type { Metadata } from "next";
// import { buildPageMetadata } from "@/lib/seo";

// export const metadata: Metadata = buildPageMetadata({
//   title: "About Us - Nukkad Natak Street Play Agency India",
//   description:
//     "Learn about WI Events (nukkadnatak.com), India's leading Nukkad Natak agency for street play campaigns, CSR programs, and government awareness initiatives.",
//   path: "/about",
//   keywords: [
//     "about nukkad natak",
//     "street play agency India",
//     "WI Events",
//     "nukkad natak group",
//   ],
// });

// export default function AboutLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return children;
// }

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Nukkad Natak | 15+ Years Nukkad Natak Experience",
  description:
    "Learn about NukkadNatak.com — a professional nukkad natak group with 15+ years of experience delivering impactful street plays across India. Trusted by TATA Motors, IndianOil and Indian Railways for awareness campaigns, CSR initiatives and brand activations.",
  path: "/about",
  keywords: [
    "about nukkad natak",
    "nukkad natak group",
    "professional nukkad natak team",
    "15 years nukkad natak experience",
    "street play agency India",
    "nukkad natak company India",
    "CSR campaign agency",
    "government awareness programs",
    "IEC activities",
    "brand activation through street play",
    "corporate nukkad natak",
    "TATA Motors nukkad natak",
    "IndianOil awareness campaigns",
    "Indian Railways street play",
    "NukkadNatak.com",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
