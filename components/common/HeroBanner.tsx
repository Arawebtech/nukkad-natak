"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Breadcrumb from "@/components/common/Breadcrumb";
import Heading2 from "@/components/common/Heading2";

interface HeroBannerProps {
  backgroundImage: string;

  breadcrumbItems: {
    label: string;
    href?: string;
  }[];

  heading?: string;
  description?: React.ReactNode;
  text?: string;

  minHeight?: string;
}

const HeroBanner = ({
  backgroundImage,
  breadcrumbItems,
  heading,
  description,
  text,
  minHeight = "700px",
}: HeroBannerProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  if (!sectionRef.current || !contentRef.current) return;

  const el = contentRef.current; // 👈 safe reference

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
        force3D: true,
      },
    });

    tl.fromTo(
      el.children[0],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    );

    tl.fromTo(
      el.children[1],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      "-=0.3"
    );

    tl.fromTo(
      el.children[2],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      "-=0.4"
    );

    tl.fromTo(
      el.children[3],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      "-=0.3"
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="hero-mobile"
        style={{
          position: "relative",
          width: "100%",
          minHeight,

          paddingTop: "110px",
          paddingBottom: "80px",

          display: "flex",
          alignItems: "flex-start",

          // backgroundImage: `url(${backgroundImage})`,
          backgroundImage: `url(${backgroundImage?.trim() ? backgroundImage : "/images/herobanner.webp"})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",

          overflow: "hidden",
        }}
      >

          <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/images/transparent.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      zIndex: 0,
      pointerEvents: "none",
    }}
  />

        <div className="website-container-without-img">
          <div
            ref={contentRef}
            style={{
              maxWidth: "650px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              willChange: "transform, opacity",
            }}
          >
            {/* 1. BREADCRUMB */}
            <Breadcrumb items={breadcrumbItems} />

            {/* 2. HEADING */}
            <Heading2 title={heading} color="white" />

            {/* 3. DESCRIPTION */}
            {description && (
              <p
               className="text-shadow-black"
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  color: "#fff",
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                {description}
              </p>
            )}

            {/* 4. TEXT */}
            {text && (
              <p
               className="text-shadow-black"
                style={{
                  fontSize: "clamp(14px, 1.5vw, 18px)",
                  lineHeight: "1.8",
                  color: "#ddd",
                  margin: 0,

                }}
              >
                {text}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* RESPONSIVE */}
      <style jsx>{`
        .hero-mobile {
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .hero-mobile {
            min-height: auto !important;

    

            background: url("/images/mobile-banner2.jpeg")
              bottom center / cover no-repeat !important;
            padding-top: 50px !important;
            padding-bottom: 60px !important;
            background-position: center !important;
          }
        }
      `}</style>
    </>
  );
};

export default HeroBanner;



// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Breadcrumb from "@/components/common/Breadcrumb";
// import Heading2 from "@/components/common/Heading2";

// interface HeroBannerProps {
//   backgroundImage: string;

//   breadcrumbItems: {
//     label: string;
//     href?: string;
//   }[];

//   heading: string;
//   description?: React.ReactNode;
//   text?: string;

//   minHeight?: string;
// }

// const HeroBanner = ({
//   backgroundImage,
//   breadcrumbItems,
//   heading,
//   description,
//   text,
//   minHeight = "700px",
// }: HeroBannerProps) => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const contentRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!sectionRef.current || !contentRef.current) return;

//     const el = contentRef.current;

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: {
//           ease: "power2.out",
//           force3D: true,
//         },
//       });

//       tl.fromTo(
//         el.children[0],
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6 }
//       );

//       tl.fromTo(
//         el.children[1],
//         { y: 50, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.9 },
//         "-=0.3"
//       );

//       tl.fromTo(
//         el.children[2],
//         { y: 40, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.7 },
//         "-=0.4"
//       );

//       tl.fromTo(
//         el.children[3],
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.7 },
//         "-=0.3"
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <section
//         ref={sectionRef}
//         className="hero-mobile"
//         style={{
//           position: "relative",
//           width: "100%",
//           minHeight,

//           paddingTop: "110px",
//           paddingBottom: "80px",

//           display: "flex",
//           alignItems: "flex-start",

//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",

//           overflow: "hidden",
//         }}
//       >
//         {/* BLACK OVERLAY */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.35))",
//             zIndex: 1,
//           }}
//         />

//         <div
//           className="website-container-without-img"
//           style={{
//             position: "relative",
//             zIndex: 2,
//             width: "100%",
//           }}
//         >
//           <div
//             ref={contentRef}
//             style={{
//               maxWidth: "650px",
//               color: "#fff",
//               display: "flex",
//               flexDirection: "column",
//               gap: "18px",
//               willChange: "transform, opacity",
//             }}
//           >
//             {/* 1. BREADCRUMB */}
//             <Breadcrumb items={breadcrumbItems} />

//             {/* 2. HEADING */}
//             <div
//               style={{
//                 display: "inline-block",
//                 padding: "10px 18px",
//                 background: "rgba(0,0,0,0.45)",
//                 backdropFilter: "blur(4px)",
//                 borderRadius: "14px",
//                 width: "fit-content",
//                 boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
//               }}
//             >
//               <Heading2 title={heading} color="white" />
//             </div>

//             {/* 3. DESCRIPTION */}
//             {description && (
//               <p
//                 style={{
//                   fontSize: "clamp(16px, 2vw, 20px)",
//                   color: "#fff",
//                   fontWeight: 500,
//                   margin: 0,
//                   lineHeight: "1.6",
//                   textShadow: "0 3px 10px rgba(0,0,0,0.5)",
//                 }}
//               >
//                 {description}
//               </p>
//             )}

//             {/* 4. TEXT */}
//             {text && (
//               <p
//                 style={{
//                   fontSize: "clamp(14px, 1.5vw, 16px)",
//                   lineHeight: "1.8",
//                   color: "#ddd",
//                   margin: 0,
//                   textShadow: "0 2px 8px rgba(0,0,0,0.5)",
//                 }}
//               >
//                 {text}
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* RESPONSIVE */}
//       <style jsx>{`
//         .hero-mobile {
//           overflow: hidden;
//         }

//         @media (max-width: 768px) {
//           .hero-mobile {
//             min-height: auto !important;

//             background: url("/images/mobile-banner2.jpeg")
//               bottom center / cover no-repeat !important;

//             padding-top: 50px !important;
//             padding-bottom: 60px !important;
//             background-position: center !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeroBanner;