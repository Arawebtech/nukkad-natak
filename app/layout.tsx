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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NukkadNatak.com - Street Play & Nukkad Natak Group in India",
  description:
    "Nukkad Natak Group for CSR campaigns, IEC activities, government awareness programs, and street play events across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          overflowX: "hidden",
          paddingTop: "70px",
        }}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}