"use client";


import Footer from "@/components/Footer";
import TrafficTracker from "@/components/common/TrafficTracker";
import Header from "./Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <TrafficTracker />
      {children}
      <Footer />
    </>
  );
}