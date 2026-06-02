





"use client";

import  { useEffect, useRef } from "react";

import gsap from "gsap";



import BrandFaqPage from "./BrandFaqPage";
import HeroBanner from "@/components/common/HeroBanner";
import BrandPromotionContent from "./Brandpromotioncontent";
import './style.css'


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
  

<HeroBanner
  backgroundImage="/images/brand-banner1.jpeg"
  heading="Brand Promotion "
  breadcrumbItems={[
    { label: "Home", href: "/" },
    { label: "", href: "/services" },
    { label: "Brand Promotion" },
  ]}
  description={
    <>
      Promote Your <span style={{ color: "#F56A28" }}>Brand</span>. Engage Your{" "}
      <span style={{ color: "#F56A28" }}>Audience</span>.
      <br />
      Create Lasting <span style={{ color: "#F56A28" }}>Impact</span>.
    </>
  }
  text="We create powerful, engaging and entertaining street play campaigns that help brands connect with their target audience in the most innovative and memorable way. Our Nukkad Natak performances drive brand awareness, customer engagement and meaningful interactions that leave a lasting impression."
/>

    

   
   


<div className="website-container">
      <BrandPromotionContent/>

</div>
      <BrandFaqPage/>

      {/* RESPONSIVE CSS */}
      <style jsx>{`
        .hero-mobile {
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .hero-mobile {
            min-height: 500px !important;
            height: auto !important;

            padding-top: 90px !important;
            // padding-bottom: 70px !important;

            background-position: center !important;
          }
        }
      `}</style>
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

  hero: {
    position: "relative",

    width: "100%",
    minHeight: "700px",

    paddingTop: "100px",
    paddingBottom: "80px",

    display: "flex",
    alignItems: "flex-start",

    backgroundImage: "url('/images/about.webp')",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  content: {
    position: "relative",

    zIndex: 2,

    maxWidth: "650px",

    color: "#fff",

    display: "flex",
    flexDirection: "column",

    gap: "18px",

    willChange: "transform, opacity",

    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
  },

  desc: {
    fontSize: "clamp(16px, 2vw, 20px)",

    color: "#fff",

    fontWeight: 500,

    margin: 0,

    lineHeight: "1.6",
  },

  text: {
    fontSize: "clamp(14px, 1.5vw, 16px)",

    lineHeight: "1.8",

    color: "#ddd",

    margin: 0,
  },
};