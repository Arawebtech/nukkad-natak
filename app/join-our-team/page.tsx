

"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";


import HeroBanner from "@/components/common/HeroBanner";
import WorkWithUs from "./WorkWithUs";
import CareerSection from "./CareerSection";


const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) {
      return;
    }

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
          force3D: true,
        },
      });

      // BREADCRUMB
      tl.fromTo(
        contentRef.current!.children[0],
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        }
      );

      // HEADING
      tl.fromTo(
        contentRef.current!.children[1],
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.3"
      );

      // DESCRIPTION
      tl.fromTo(
        contentRef.current!.children[2],
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.5"
      );

      // TEXT
      tl.fromTo(
        contentRef.current!.children[3],
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.4"
      );

    }, heroRef);

    return () => ctx.revert();

  }, []);


  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
  <HeroBanner
  backgroundImage="/images/herobanner.webp"
  heading="Join Our Team"
  breadcrumbItems={[
    { label: "Home", href: "/" },
    { label: "Team " },
  ]}
  description={
    <>
      Be a part of movemt that
      <br />
      creates {" "}
       <span style={{ color: "#F56A28" }}>
       awareness {" "}

      </span>
        and drives  {" "}
      <span style={{ color: "#F56A28" }}>
        change.
      
      </span>
    </>
  }
  text="(NukkadNatak.com) is India’s leading Nukkad Natak and street play agency, creating impactful awareness campaigns and audience engagement programs that connect directly with people."
/>

    <div className="website-container">
        <WorkWithUs/>
        <CareerSection/>
      </div>




      {/* RESPONSIVE CSS */}

    </div>
  );
};

export default AboutPage;

/* ================= STYLES ================= */

const styles: any = {
  page: {
    width: "100%",
    overflow: "hidden",

  },
}