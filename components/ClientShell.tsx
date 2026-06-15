"use client";

import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrafficTracker from "@/components/common/TrafficTracker";

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header/>
      <TrafficTracker />
      {children}
      <Footer />
    </>
  );
}