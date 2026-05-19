

"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";

import Breadcrumb from "@/components/common/Breadcrumb";
import Heading2 from "@/components/common/Heading2";
import HeroBanner from "@/components/common/HeroBanner";
import GalleryItems from "./GalleryItems";


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
  backgroundImage="/images/about.png"
  heading="Our Street Play Gallery "
  breadcrumbItems={[
    { label: "Home", href: "/" },
    { label: "Gallery " },
  ]}
  description={
    <>
      Using the power of street plays to
      <br />
      <span style={{ color: "#F56A28" }}>
        inform, inspire and bring real change.
      </span>
    </>
  }
  text="WI Events (nukkadnatak.com) is India's leading street play agency..."
/>

    <div className="website-container">
        <GalleryItems />
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