

"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";


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

    </>
  }
  text="Tell us about your campaign requirements and our team will connect with you within 24 hours."
/>

    <div className="website-container">
        <EnquirySection/>
      </div>

         {/* <div className="website-container" style={{
          paddingBottom:"60px"
         }}>
        <WhyStreetPlays/>
      </div> */}
      {/* <div className="website-container">
  <EnquirySection />
</div> */}

{/* Office Location */}
<div
  className="website-container"
  style={{
    paddingTop: "60px",
    // paddingBottom: "60px",
  }}
>
  {/* <div
    style={{
      textAlign: "center",
      marginBottom: "30px",
    }}
  >
    <h2
      style={{
        fontSize: "36px",
        fontWeight: 700,
        marginBottom: "10px",
      }}
    >
      Visit Our Office
    </h2>

    <p
      style={{
        color: "#666",
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: 1.8,
      }}
    >
      Office No 11, 1st Floor, Pocket 13, Sector 24, Rohini,
      New Delhi, 110085
    </p>

    <p
      style={{
        marginTop: "10px",
        color: "#F56A28",
        fontWeight: 600,
      }}
    >
      +91 9310996542 | contact@nukkadnatak.com
    </p>
  </div> */}

  <div
    style={{
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    }}
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.718261458338!2d77.08811867496033!3d28.727964679741532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d071fdffa4905%3A0x8cb994e20c9acef0!2sNukkadNatak.com%20-%20The%20Nukkad%20Natak%20Group!5e0!3m2!1sen!2sin!4v1782205704791!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      title="Nukkad Natak Office Location"
    />
  </div>
</div>

<div
  className="website-container"
  style={{
    paddingBottom: "60px",
  }}
>
  <WhyStreetPlays />
</div>




    

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