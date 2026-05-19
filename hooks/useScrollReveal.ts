"use client";

import { useEffect } from "react";
import gsap from "@/components/animations/gsap";

export const useScrollReveal = (
  ref: React.RefObject<HTMLElement>,
  options?: any
) => {
  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.children;

    gsap.from(elements, {
      y: options?.y || 80,
      opacity: 0,
      scale: options?.scale || 0.95,
      duration: 1,
      stagger: options?.stagger || 0.15,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        scrub: options?.scrub || false,
      },
    });
  }, [ref]);
};