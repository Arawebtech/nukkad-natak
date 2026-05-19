// "use client";

// import React, { useEffect, useRef } from "react";
// import Heading from "./common/Heading";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Home3 = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const headingWrapRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!gridRef.current || !headingWrapRef.current) return;

//     // Heading animation
//     gsap.from(headingWrapRef.current, {
//       y: 60,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: headingWrapRef.current,
//         start: "top 80%",
//       },
//     });

//     // Grid items animation
//     gsap.from(gridRef.current.children, {
//       y: 80,
//       opacity: 0,
//       scale: 0.95,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: gridRef.current,
//         start: "top 85%",
//       },
//     });
//   }, []);

//   return (
//     <div>
//       {/* wrap heading only for animation (UI SAME) */}
//       <div ref={headingWrapRef}>
//         <Heading />
//       </div>

//       <div
//         className="website-container"
//         style={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "35px",
//         }}
//       >
//         {/* GRID */}
//         <div ref={gridRef} className="responsiveGrid">
//           {[5, 6, 7, 8].map((item) => (
//             <div key={item} className="gridItem">
//               <img
//                 src={`/images/home${item}.png`}
//                 alt="Partner"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS (UNCHANGED) */}
// <style jsx>{`
//   .responsiveGrid {
//     width: 100%;
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//   }

//   .gridItem {
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 10px;
//   }

//   /* ❌ MOBILE: no border at all */
//   .gridItem::after {
//     display: none;
//   }

//   /* ✅ DESKTOP */
//   @media (min-width: 1024px) {
//     .responsiveGrid {
//       grid-template-columns: repeat(4, 1fr);
//     }

//     .gridItem::after {
//       content: "";
//       position: absolute;
//       right: 0;
//       top: 0;
//       width: 5px;
//       height: 100%;
//       background: linear-gradient(
//         to bottom,
//         black 0%,
//         black 30%,
//         black 100%
//       );
//       display: block;
//     }

//     /* remove border from last item */
//     .gridItem:last-child::after {
//       display: none;
//     }

//     /* remove border from last column items */
//     .gridItem:nth-child(4n)::after {
//       display: none;
//     }
//   }
// `}</style>
//     </div>
//   );
// };

// export default Home3;

"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/components/common/Heading";

gsap.registerPlugin(ScrollTrigger);

const Home3 = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !gridRef.current ||
      !headingWrapRef.current ||
      !sectionRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {

      // HEADING ANIMATION
      gsap.fromTo(
        headingWrapRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
          force3D: true,

          scrollTrigger: {
            trigger: headingWrapRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // GRID ITEMS ANIMATION
      gsap.fromTo(
        gridRef.current!.children,
        {
          y: 70,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power2.out",
          force3D: true,

          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        width: "100%",
        overflow: "hidden",
        // padding: "40px 0px",
      }}
    >
      {/* HEADING */}
      <div ref={headingWrapRef}>
        <Heading />
      </div>

      <div
        className="website-container"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "35px",
        }}
      >
        {/* GRID */}
        <div ref={gridRef} className="responsiveGrid">
          {[5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="gridItem"
            >
              <img
                src={`/images/home${item}.png`}
                alt="Partner"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .responsiveGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap:20px
        }

        .gridItem {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 10px;

          will-change: transform, opacity;

          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* MOBILE */
        .gridItem::after {
          display: none;
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
          .responsiveGrid {
            grid-template-columns: repeat(4, 1fr);
          }

          .gridItem::after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;

            width: 5px;
            height: 100%;

            background: linear-gradient(
              to bottom,
              black 0%,
              black 30%,
              black 100%
            );

            display: block;
          }

          /* REMOVE LAST BORDER */
          .gridItem:last-child::after {
            display: none;
          }

          .gridItem:nth-child(4n)::after {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home3;