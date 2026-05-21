

"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";

import Breadcrumb from "@/components/common/Breadcrumb";
import Heading2 from "@/components/common/Heading2";
import HeroBanner from "@/components/common/HeroBanner";
import WhyStreetPlays from "./WhyStreetPlays";
import EnquirySection from "./EnquirySection";


const Enquiry = () => {
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
  heading="Company Enquiry"
  breadcrumbItems={[
    { label: "Home", href: "/" },
    { label: "Enquiry" },
  ]}
  description={
    <>
      Using the power of street plays to
      creates {" "}
      <br />
       <span style={{ color: "#F56A28" }}>
      inform, inspire and bring real change. {" "}

      </span>
        {/* and drives  {" "}
      <span style={{ color: "#F56A28" }}>
        change.
      
      </span> */}
    </>
  }
  text="Tell us about your campaign requirements and our team will connect with you within 24 hours."
/>

    <div className="website-container">
        <EnquirySection/>
        <WhyStreetPlays/>
      </div>




      {/* RESPONSIVE CSS */}

    </div>
  );
};

export default Enquiry;

/* ================= STYLES ================= */

const styles: any = {
  page: {
    width: "100%",
    overflow: "hidden",

  },
}