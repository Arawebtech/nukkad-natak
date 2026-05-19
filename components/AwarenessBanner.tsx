"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AwarenessBanner() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
          force3D: true,
        },
      });

      tl.fromTo(
        textRef.current!.children[0],
        {
          y: 35,
          opacity: 0,
          width: 0,
        },
        {
          y: 0,
          opacity: 1,
          width: "50px",
          duration: 0.8,
        }
      );

      tl.fromTo(
        textRef.current!.children[1],
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.4"
      );

      tl.fromTo(
        textRef.current!.children[2],
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.5"
      );

      tl.fromTo(
        textRef.current!.children[3].children,
        {
          y: 25,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "back.out(1.5)",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        minHeight: "100vh",

        background:
          "url('/images/home.png') top / cover no-repeat",

        display: "flex",
        alignItems: "center",

        overflow: "hidden",

        // paddingTop: "140px",
        paddingBottom: "100px",
        // paddingLeft: "20px",
        // paddingRight: "20px",
      }}
      className="hero-mobile"
    >
      <div
        className="website-container-without-img"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          ref={textRef}
          style={{
            maxWidth: "700px",
            width: "100%",

            display: "flex",
            flexDirection: "column",

            gap: "14px",

            willChange: "transform, opacity",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          <div>
            <p
              style={{
                color: "#F6A623",
                fontSize: "clamp(12px, 2.5vw, 16px)",
                whiteSpace: "nowrap",
                fontWeight: 600,
                margin: 0,
              }}
            >
              Book India’s #1 Street Play Agency for
            </p>

            <div
              style={{
                width: "50px",
                height: "2px",
                background: "#F6A623",
                marginTop: "10px",
                borderRadius: "20px",
              }}
            />
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(20px, 6vw, 40px)",
              lineHeight: "1.1",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Awareness Campaigns & Brand{" "}
            <span style={{ color: "#F6A623" }}>
              Activations
            </span>
          </h1>

          <p
            style={{
              color: "white",
              fontSize: "clamp(12px, 2.2vw, 16px)",
              lineHeight: "22px",
              margin: 0,
              maxWidth: "100%",
            }}
          >
            Trusted by NGOs, SMBs, B2B & Leading Organizations
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            {/* <Link
              href="/contact"
              style={{
                textDecoration: "none",

                backgroundImage: "url('/images/header1.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                padding: "14px 22px",

                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,

                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",

                transition: "all 0.35s ease",

                transform: "scale(1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.07)";
                e.currentTarget.style.filter =
                  "brightness(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "scale(1)";
                e.currentTarget.style.filter =
                  "brightness(1)";
              }}
            >
              Enquiry Now →
            </Link> */}

            {/* <Link
              href="/work"
              style={{
                background: "transparent",
                color: "#fff",

                padding: "10px 22px",

                border: "2px solid white",
                borderRadius: "10px",

                textDecoration: "none",

                fontSize: "14px",
                fontWeight: 700,

                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",

                transition: "all 0.35s ease",

                transform: "scale(1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "#EB631D";

                e.currentTarget.style.borderColor =
                  "#EB631D";

                e.currentTarget.style.transform =
                  "scale(1.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "transparent";

                e.currentTarget.style.borderColor =
                  "#fff";

                e.currentTarget.style.transform =
                  "scale(1)";
              }}
            >
              Watch Our Work ▶
            </Link> */}
          </div>
        </div>
      </div>

      <style global jsx>{`
        @media (max-width: 768px) {
          .hero-mobile {
            min-height: auto !important;
            height: auto !important;

            background: url("/images/mobile-banner2.jpeg")
              bottom center / cover no-repeat !important;

            padding: 100px 20px 100px 0px !important;
          }
        }
      `}</style>
    </section>
  );
}