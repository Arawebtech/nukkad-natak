// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// import "./globals.css";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";

// import TrafficTracker from "@/components/common/TrafficTracker";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: "NukkadNatak.com | Street Play Nukkad Natak & Group in India",
//   description: "Nukkad Natak Group for CSR campaigns, IEC activities, government awareness programs, and street play events across India.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={inter.className}
//         style={{
//           paddingTop: "70px",
//           overflowX: "hidden",
//         }}
//       >
  

//         <Header />
//          <TrafficTracker />
//   {children}

//         <Footer />
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import AppShell from "@/components/AppShell";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: "NukkadNatak.com - Street Play & Nukkad Natak Group in India",
//   description:
//     "Nukkad Natak Group for CSR campaigns, IEC activities, government awareness programs, and street play events across India.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={inter.className}
//         style={{
//           overflowX: "hidden",
//           paddingTop: "70px",
//         }}
//       >
//         <AppShell>{children}</AppShell>
//       </body>
//     </html>
//   );
// }


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import AppShell from "@/components/AppShell";
// import Script from "next/script";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: "NukkadNatak.com - Street Play & Nukkad Natak Group in India",
//   description:
//     "Nukkad Natak Group for CSR campaigns, IEC activities, government awareness programs, and street play events across India.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={inter.className}
//         style={{
//           overflowX: "hidden",
//           paddingTop: "70px",
//         }}
//       >
//         {/* ✅ GA4 Script */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-JV9B8DHYNH"
//           strategy="afterInteractive"
//         />

//         <Script id="ga4-script" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}

//             gtag('js', new Date());
//             gtag('config', 'G-JV9B8DHYNH');
//           `}
//         </Script>

//         {/* Your App */}
//         <AppShell>{children}</AppShell>
//       </body>
//     </html>
//   );
// }



import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Footer from "@/components/Footer";
import TrafficTracker from "@/components/common/TrafficTracker";
import Header from "@/components/Header";
import JsonLd from "@/components/seo/JsonLd";
import {
  buildPageMetadata,
  organizationJsonLd,
  websiteJsonLd,
  SITE_URL,
} from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#EB631D",
};

const rootPageMeta = buildPageMetadata({
  title:
    "NukkadNatak.com - Street Play & Nukkad Natak Group in India",
  path: "/",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: rootPageMeta.title as string,
    template: "%s | NukkadNatak.com",
  },
  description: rootPageMeta.description,
  keywords: rootPageMeta.keywords,
  alternates: rootPageMeta.alternates,
  openGraph: rootPageMeta.openGraph,
  twitter: rootPageMeta.twitter,
  robots: rootPageMeta.robots,
  applicationName: "NukkadNatak.com",
  category: "entertainment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={poppins.className}
        style={{
          overflowX: "hidden",
          paddingTop: "70px",
        }}
      >
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />

        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JV9B8DHYNH"
          strategy="afterInteractive"
        />

        <Script id="ga4-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JV9B8DHYNH');
          `}
        </Script>

   
        <Header/>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER (server-safe) */}
        <Footer />

        {/* TRACKER (client only if needed) */}
        <TrafficTracker />
      </body>
    </html>
  );
}