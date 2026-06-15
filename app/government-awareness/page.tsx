





"use client";

import  { useEffect, useRef } from "react";

import gsap from "gsap";



import GovernmentFaqPage from "./GovernmentFaqPage";
import HeroBanner from "@/components/common/HeroBanner";

import './style.css'
import GovernmentContent from "./Governmentcontent";


const Page = () => {
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
  

<HeroBanner backgroundImage="/images/governmet-banner1.jpeg"
  heading="Government Awareness"
  breadcrumbItems={[
    { label: "Home", href: "/" },
    // { label: "", href: "/" },
    { label: "Government Awareness" },
  ]}
  description={
    <>
      {/* Promote Your <span style={{ color: "#F56A28" }}>Brand</span>. Engage Your{" "}
      <span style={{ color: "#F56A28" }}>Audience</span>.
      <br />
      Create Lasting <span style={{ color: "#F56A28" }}>Impact</span>. */}
      Inform. <span style={{ color: "#F56A28" }}>Educate</span>. Empower. Building a Better Tomorrow Together.
    </>
  }
  text="Our street plays help government organizations spread awareness on important schemes, policies and social issues in the most engaging and effective way."
/>

    

   
   


<div className="website-container">
      <GovernmentContent/>

</div>
      <GovernmentFaqPage/>

    </div>
  );
};

export default Page;




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