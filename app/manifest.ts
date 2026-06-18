import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NukkadNatak.com - Street Play & Nukkad Natak Group",
    short_name: "NukkadNatak",
    description:
      "Professional Nukkad Natak and Street Play Services across India for CSR campaigns, IEC activities, and awareness programs.",
    start_url: "/",
    display: "standalone",
    background_color: "#f0e8d8",
    theme_color: "#EB631D",
    icons: [
      {
        src: "/images/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    lang: "en",
    scope: SITE_URL,
  };
}
