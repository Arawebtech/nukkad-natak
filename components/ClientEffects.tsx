"use client";

import { useEffect } from "react";
import { initGlobalGsap } from "@/components/animations/gsapSetup";

export default function ClientEffects() {
  useEffect(() => {
    initGlobalGsap();
  }, []);

  return null;
}