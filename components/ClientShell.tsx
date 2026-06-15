"use client";

import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import TrafficTracker from "@/components/common/TrafficTracker";
import Header from "./Header";

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