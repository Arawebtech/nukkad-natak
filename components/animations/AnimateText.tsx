


"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimateTextProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: number;
  duration?: number;
};

export const AnimateText = ({
  children,
  className = "",
  delay = 0,
  y = 40,
  blur = 10,
  duration = 1,
}: AnimateTextProps) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: y,
          filter: `blur(${blur}px)`,
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true, // only one time animation
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, y, blur, duration]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};



