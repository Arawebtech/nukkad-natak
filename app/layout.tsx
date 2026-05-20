import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientEffects from "@/components/ClientEffects";
import TrafficTracker from "@/components/common/TrafficTracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nukkad Natak",
  description: "Modern Animated Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={inter.className}
      >
        <ClientEffects />

        <Header />
         <TrafficTracker />
  {children}

        <Footer />
      </body>
    </html>
  );
}