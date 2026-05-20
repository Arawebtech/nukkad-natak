// "use client";

// import Breadcrumb from "@/components/common/Breadcrumb";
// import Heading2 from "@/components/common/Heading2";
// import React from "react";
// import OurStory from "./OurStory";
// import OurMission from "./OurMission";
// import WhyChooseUs from "./WhyChooseUs";
// import WhatWeDo from "./WhatWeDo";




// const AboutPage = () => {
//   return (
//     <div style={styles.page} >
//       {/* HERO SECTION */}
//       <div style={styles.hero} className="">
//         {/* OVERLAY */}
   

//         {/* CONTENT */}
//         <div className="website-container">

//         <div style={styles.content} >
          
//           <Breadcrumb
//             items={[
//               { label: "Home", href: "/" },
//               { label: "About Us" },
//             ]}
//           />

//          <Heading2 title="About"  color="white"/>

//           <p style={styles.desc}>
//            Using the power of street plays to  
//            <br /><span style={{
//             color:"#F56A28"
//            }}>
//             inform, inspire and bring real change.
//            </span>
//           </p>

//           <p style={styles.text}>
//          WI Events (nukkadnatak.com) is India's leading street play agency,
// specializing in awareness campaigns and brand activations
// that connect with people at the heart.
//           </p>
//         </div>
//                 </div>

//       </div>

//     <div className="website-container">
//         <OurStory/>
//     </div>
//         <WhyChooseUs/>
//     <div className="website-container">

//         <OurMission/>
//         <WhatWeDo/>
//     </div>
//         <style jsx>{`
//   @media (max-width: 768px) {
//     .hero-mobile {
//       min-height: 400px !important;
//       padding-top: 70px !important;
//       height: auto !important;
//     }
//   }
// `}</style>
//     </div>
    
//   );
// };

// export default AboutPage;

// /* ================= STYLES ================= */

// const styles: any = {
//   page: {
//     width: "100%",
//     minHeight: "",
//     fontFamily: "Arial, sans-serif",

//   },

//   hero: {
//     position: "relative",
//     width: "100%",
// minHeight: "700px",
// paddingTop:"100px",
//     display: "flex",
//     alignItems: "start",
//             backgroundImage:
//       "url('/images/about.webp')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//      backgroundRepeat: "no-repeat",

//   },

// //   overlay: {
// //     position: "absolute",
// //     inset: 0,
// //     background:
// //       "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4))",
// //   },

//   content: {
//     position: "relative",
//     zIndex: 2,
//     maxWidth: "650px",
//     color: "#fff",
//   },

//   title: {
//     fontSize: "clamp(40px, 5vw, 70px)",
//     fontWeight: "800",
//     margin: "15px 0",
//     color: "#fff",
//         maxWidth: "650px",
//   },

//   desc: {
//     fontSize: "clamp(16px, 2vw, 20px)",
//     color: "#fff",
//     fontWeight: 500,
//     marginBottom: "20px",
//   },

//   text: {
//     fontSize: "clamp(14px, 1.5vw, 16px)",
//     lineHeight: "1.7",
//     color: "#ddd",
//   },
// };





"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";

import Breadcrumb from "@/components/common/Breadcrumb";
import Heading2 from "@/components/common/Heading2";

import OurStory from "./OurStory";
import OurMission from "./OurMission";
import WhyChooseUs from "./WhyChooseUs";
import WhatWeDo from "./WhatWeDo";
import FaqPage from "./FaqPage";
import HeroBanner from "@/components/common/HeroBanner";


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
      {/* <div
        ref={heroRef}
        style={styles.hero}
        className="hero-mobile"
      >
        <div className="website-container-without-img">
          <div
            ref={contentRef}
            style={styles.content}
          >
       
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "About Us" },
              ]}
            />

      
            <Heading2
              title="About"
              color="white"
                mobileSize = "30px"
  desktopSize = "50px"
            />

      
            <p style={styles.desc}>
              Using the power of street plays to
              <br />

              <span
                style={{
                  color: "#F56A28",
                }}
              >
                inform, inspire and bring real
                change.
              </span>
            </p>

       
            <p style={styles.text}>
              WI Events (nukkadnatak.com) is India's
              leading street play agency,
              specializing in awareness campaigns
              and brand activations that connect
              with people at the heart.
            </p>
          </div>
        </div>
      </div> */}

<HeroBanner
  backgroundImage="/images/about.webp"
  heading="About Us"
  breadcrumbItems={[
    { label: "Home", href: "/" },
    { label: "About Us" },
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
  text="WI Events (nukkadnatak.com) is India's leading street play agency, specializing in awareness campaigns and brand activations that connect with people at the heart."
/>

      {/* STORY */}
       <div className="website-container">
        <OurStory />
      </div>

   
      <WhyChooseUs />

   
      <div className="website-container">
        <OurMission />
      {/*
        <WhatWeDo />
        */}
      </div> 

      <FaqPage/>
<div className="website-container">

</div>

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