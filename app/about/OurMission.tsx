"use client";

import Heading3 from "@/components/common/Heading3";
import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading2 from "@/components/common/Heading2";

gsap.registerPlugin(ScrollTrigger);

const OurMission = () => {
  const values = [
    "Creativity with Purpose",
    "Social Responsibility",
    "Integrity & Transparency",
    "Excellence in Execution",
  ];

  // ✅ FIX TYPES
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 CARD ANIMATION
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          opacity: 0,
          y: 80,
          duration: 1.2,
          delay: index * 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });

      // 🔥 IMAGE REVEAL
      if (imageWrapRef.current) {
        gsap.from(imageWrapRef.current, {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: "top 85%",
          },
        });
      }

      // 🔥 IMAGE SCALE
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scale: 1.2,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        width: "100%",
        padding: "60px 0px 60px 0px",
      }}
    >
      <div
        className="mission-wrapper"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
          className="mission-content"
        >
          {/* MISSION */}
          <div
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
          >
            <div>
          <Heading2 title="Our" color="black" title2={true} title2Text="Mission" />
        </div>

            <p
              style={{
                marginTop: "10px",
                color: "#4b4b4b",
                lineHeight: "1.7",
                fontSize: "14px",
              }}
            >
              To spread awareness, inspire behavioral
              change and create a positive impact in
              society through the power of street plays.
            </p>

            <p
              style={{
                marginTop: "18px",
                color: "#F56A28",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              info@nukadnatak.com
            </p>
          </div>

          {/* VALUES */}
          <div
            ref={(el) => {
              cardsRef.current[1] = el;
            }}
          >
            <div>
          <Heading2 title="Our" color="black" title2={true} title2Text="Values" />
        </div>

            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {values.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      background: "#16C43B",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check
                      size={12}
                      color="#fff"
                      strokeWidth={3}
                    />
                  </div>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "#222",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageWrapRef}
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        >
          <img
            ref={imageRef}
            src="/images/about1.webp"
            alt="mission"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mission-wrapper {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .mission-content {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OurMission;