import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
    <html lang="en">
      <body
        className={inter.className}
        style={{
          paddingTop: "70px",
          overflowX: "hidden",
        }}
      >
  

        <Header />
         <TrafficTracker />
  {children}

        <Footer />
      </body>
    </html>
  );
}